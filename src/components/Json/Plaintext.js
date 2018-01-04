import React from 'react';
import PropTypes from 'prop-types';
import DefaultTextArea from './styles/TextArea';

export default class PlainText extends React.Component {
  static propTypes = {
    data: PropTypes.any.isRequired,
    onDataChanged: PropTypes.func.isRequired,

    TextArea: PropTypes.func,
  };

  static defaultProps = {
    TextArea: DefaultTextArea,
  };

  constructor(props) {
    super(props);

    this.state = {
      text: JSON.stringify(props.data, null, '  '),
      valid: true,
    };
  }

  componentDidUpdate(oldProps) {
    if (oldProps.data !== this.props.data) {
      this.setState({ text: JSON.stringify(this.props.data, null, '  '), valid: true });
    }
  }

  handleChange = ev => {
    const text = ev.target.value;
    let valid = false;
    let data = null;
    try {
      data = JSON.parse(text);
      valid = true;
    } catch (err) {
      // no-op
    }

    this.setState({ text, valid });
    if (valid) {
      this.props.onDataChanged(data);
    }
  }

  render() {
    const { text, valid } = this.state;
    const { TextArea } = this.props;
    return <TextArea onChange={this.handleChange} value={text} valid={valid} />;
  }
}
