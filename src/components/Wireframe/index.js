import React from 'react';
import PropTypes from 'prop-types';
import WireframeContainer from './styles/WireframeContainer';
import Json from '../Json';
import DefaultBehaviors from '../Behaviors';
import omit from '../../util/omit';

const propsOrMessage = props => JSON.stringify(props) === '{}' ? 'No props' : props;
const controlledProps = ['Container', 'Renderer', 'editable', 'behaviors', 'Behaviors'];

class Wireframe extends React.Component {
  static propTypes = {
    editable: PropTypes.bool,
    behaviors: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      run: PropTypes.func.isRequired,
    })),

    Container: PropTypes.func,
    Renderer: PropTypes.func,
    Behaviors: PropTypes.func,
  };

  static defaultProps = {
    Container: WireframeContainer,
    Renderer: Json,
    editable: false,
    Behaviors: DefaultBehaviors,
    behaviors: [],
  };

  constructor(props) {
    super(props);

    const rest = omit(props, controlledProps);

    this.state = {
      data: rest,
    };
  }

  componentDidUpdate(oldProps) {
    if (oldProps === this.props) {
      return;
    }

    const rest = omit(this.props, controlledProps);

    this.setState({
      data: rest,
    });
  }

  handleDataChanged = data => {
    // preserve top-level keys when the user edits data
    const topLevelKeys = Object.keys(omit(this.props, controlledProps));
    const newData = topLevelKeys.reduce((collector, key) => {
      if (typeof this.props[key] === 'function') {
        // functions are special and must be preserved verbatim
        return { ...collector, [key]: this.props[key] };
      }
      const newValue = data.hasOwnProperty(key) ? data[key] : null;
      return { ...collector, [key]: newValue };
    }, {});

    this.setState({
      data: newData,
    });
  };

  runBehavior = behavior => {
    behavior.run(this.state.data);
  };

  render() {
    const { Container, Renderer, editable, behaviors, Behaviors } = this.props;
    const { data } = this.state;
    return (
      <Container>
        <Renderer data={propsOrMessage(data)} editable={editable} onDataChanged={this.handleDataChanged} />
        <Behaviors behaviors={behaviors} runBehavior={this.runBehavior} />
      </Container>
    );
  }
}

export default Wireframe;
