import React from 'react';
import PropTypes from 'prop-types';
import NodeContainer from './styles/NodeContainer';
import NodeContents from './styles/NodeContents';
import DefaultBracket from './styles/Bracket';
import DefaultKey from './styles/Key';
import DefaultCollapseToggle from './styles/CollapseToggle';
import DefaultNodeList from './styles/NodeList';
import DefaultValue from './styles/Value';
import DefaultField from './Field';

const isNested = data => (typeof data === 'object') && Object.keys(data).length > 0;
const getType = data => (data instanceof Array) ? 'array' : 'object';

export default class Node extends React.Component {
  static propTypes = {
    Container: PropTypes.func,
    Contents: PropTypes.func,
    Bracket: PropTypes.func,
    Key: PropTypes.func,
    NodeList: PropTypes.func,
    CollapseToggle: PropTypes.func,
    Value: PropTypes.func,
    data: PropTypes.any.isRequired,
    depth: PropTypes.number,
    dataType: PropTypes.string,
    dataKey: PropTypes.string,
    leaf: PropTypes.bool,
    editable: PropTypes.bool,
    Field: PropTypes.func,
    onDataChanged: PropTypes.func,
  };

  static defaultProps = {
    Container: NodeContainer,
    Contents: NodeContents,
    Bracket: DefaultBracket,
    Key: DefaultKey,
    NodeList: DefaultNodeList,
    CollapseToggle: DefaultCollapseToggle,
    Value: DefaultValue,
    depth: 0,
    dataType: 'object',
    dataKey: '',
    leaf: false,
    editable: false,
    Field: DefaultField,
  };

  constructor(props) {
    super(props);

    this.state = {
      expanded: isNested(props.data) && props.depth < 3,
    };
  }

  toggleExpanded = ev => {
    ev.stopPropagation();
    this.setState({ expanded: !this.state.expanded });
  };

  handleDataChanged = newData => {
    this.props.onDataChanged(newData);
  };

  bindHandleChildDataChanged = key => newData => {
    this.props.onDataChanged({
      ...this.props.data,
      [key]: newData,
    });
  };

  renderValue = () => {
    const { editable, leaf, data, Value, Field } = this.props;

    if (editable) {
      return <Field value={data} onChange={this.handleDataChanged} />;
    }

    return <Value leaf={leaf}>{JSON.stringify(data)}</Value>;
  }

  render() {
    const { Container, Contents, Bracket, Key, Value, CollapseToggle, NodeList, dataKey, data, depth, dataType, leaf, editable } = this.props;
    const { expanded } = this.state;

    if (expanded && !leaf) {
      return (
        <Container leaf={leaf}>
          {dataKey && <Key leaf={leaf} onClick={this.toggleExpanded}>{dataKey}</Key>}
          <Bracket leaf={leaf}>{dataType === 'array' ? '[' : '{'}</Bracket>
          <Contents leaf={leaf}>
            <CollapseToggle onClick={this.toggleExpanded} collapsed={!expanded} />
            <NodeList>
              {Object.keys(data).map(key => (
                <Node
                  key={key}
                  dataKey={key}
                  data={data[key]}
                  depth={depth + 1}
                  dataType={getType(data[key])}
                  leaf={!isNested(data[key])}
                  onDataChanged={this.bindHandleChildDataChanged(key)}
                  editable={editable}
                />
              ))}
            </NodeList>
          </Contents>
          <Bracket leaf={leaf}>{dataType === 'array' ? ']' : '}'}</Bracket>
        </Container>
      );
    }

    return (
      <Container leaf={leaf}>
        {dataKey && <Key onClick={this.toggleExpanded} leaf={leaf}>{dataKey}</Key>}
        {this.renderValue()}
      </Container>
    );
  }
}
