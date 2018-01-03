import React from 'react';
import PropTypes from 'prop-types';
import WireframeContainer from './styles/WireframeContainer';
import Json from '../Json';
import omit from '../../util/omit';

const propsOrMessage = props => JSON.stringify(props) === '{}' ? 'No props' : props;
const controlledProps = ['Container', 'Renderer', 'editable', 'behaviors'];

class Wireframe extends React.Component {
  static propTypes = {
    Container: PropTypes.func,
    Renderer: PropTypes.func,
    editable: PropTypes.bool,
  };

  static defaultProps = {
    Container: WireframeContainer,
    Renderer: Json,
    editable: false,
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

  handleDataChanged = newData => {
    this.setState({
      data: newData,
    });
  };

  render() {
    const { Container, Renderer, editable } = this.props;
    const { data } = this.state;
    return (
      <Container>
        <Renderer data={propsOrMessage(data)} editable={editable} onDataChanged={this.handleDataChanged} />
      </Container>
    );
  }
}

export default Wireframe;
