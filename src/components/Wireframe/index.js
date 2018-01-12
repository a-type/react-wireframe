import React from 'react';
import PropTypes from 'prop-types';
import WireframeContainer from './styles/WireframeContainer';
import WireframeName from './styles/WireframeName';
import Json from '../Json';
import DefaultBehaviors from '../Behaviors';
import omit from '../../util/omit';

const propsOrMessage = props => Object.keys(props).length === 0 ? 'No props' : props;
const controlledProps = ['wireframe', 'wireframeComponents'];

class Wireframe extends React.Component {
  static propTypes = {
    wireframe: PropTypes.shape({
      name: PropTypes.string,
      editable: PropTypes.bool,
      behaviors: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        run: PropTypes.func.isRequired,
      })),
    }),
    wireframeComponents: PropTypes.shape({
      Container: PropTypes.func,
      Renderer: PropTypes.func,
      Behaviors: PropTypes.func,
      Name: PropTypes.func,
    }),
  };

  static defaultProps = {
    wireframe: {
      editable: false,
      behaviors: [],
      name: 'Wireframe',
    },
    wireframeComponents: {
      Container: WireframeContainer,
      Behaviors: DefaultBehaviors,
      Renderer: Json,
      Name: WireframeName,
    },
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
    const { Container = WireframeContainer, Renderer = Json, Behaviors = DefaultBehaviors, Name = WireframeName } = this.props.wireframeComponents;
    const { editable = false, behaviors = [], name } = this.props.wireframe;
    const { data } = this.state;

    return (
      <Container>
        <div>
          {name && <Name>{`<${name}/>`}</Name>}
          <Renderer data={propsOrMessage(data)} editable={editable} onDataChanged={this.handleDataChanged} />
        </div>
        <Behaviors behaviors={behaviors} runBehavior={this.runBehavior} />
      </Container>
    );
  }
}

export default Wireframe;
