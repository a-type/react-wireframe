import React from 'react';
import PropTypes from 'prop-types';
import DefaultNode from './Node';
import DefaultPlaintextToggle from './styles/PlaintextToggle';
import DefaultButton from '../Button';
import DefaultContainer from './styles/Container';
import DefaultPlaintext from './Plaintext';
import PlaintextToggle from './styles/PlaintextToggle';

const isNested = data => (typeof data === 'object') && Object.keys(data).length > 0;
const getType = data => (data instanceof Array) ? 'array' : 'object';

export default class Json extends React.Component {
  static propTypes = {
    data: PropTypes.any.isRequired,
    editable: PropTypes.bool,
    onDataChanged: PropTypes.func,

    Node: PropTypes.func,
    PlaintextToggle: PropTypes.func,
    Button: PropTypes.func,
    Container: PropTypes.func,
    Plaintext: PropTypes.func,
  };

  static defaultProps = {
    editable: false,
    PlaintextToggle: DefaultPlaintextToggle,
    Button: DefaultButton,
    Node: DefaultNode,
    Container: DefaultContainer,
    Plaintext: DefaultPlaintext,
  };

  state = {
    plaintext: false,
  };

  togglePlaintext = () => this.setState({ plaintext: !this.state.plaintext });

  renderPlaintext = () => {
    const { Plaintext, data, onDataChanged } = this.props;
    return <Plaintext data={data} onDataChanged={onDataChanged} />;
  };

  renderNode = () => {
    const { data, Node, onDataChanged, editable } = this.props;
    return <Node data={data} editable={editable} onDataChanged={onDataChanged} />;
  };

  render() {
    const { plaintext } = this.state;
    const { Container, PlaintextToggle, Button, editable } = this.props;

    return (
      <Container>
        {plaintext ? this.renderPlaintext() : this.renderNode()}
        {editable &&
          <PlaintextToggle>
            <Button onClick={this.togglePlaintext}>
              {plaintext ? '{}' : 'Tt'}
            </Button>
          </PlaintextToggle>
        }
      </Container>
    )
  }
}
