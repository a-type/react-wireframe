import React from 'react';
import Intro from './Intro';
import Use from './Use';
import Container from './Container';

export default class PageSections extends React.Component {
  state = {
    containerWidth: document.body.clientWidth,
  };

  componentDidMount() {
    document.addEventListener('resize', () => {
      this.reMeasure();
    });
    // hack to accomodate the appreance of the vertical scrollbar
    setTimeout(this.reMeasure, 1);
  }

  reMeasure = () => {
    this.setState({ containerWidth: document.body.clientWidth });
  };

  render() {
    return (
      <Container>
        <Intro containerWidth={this.state.containerWidth} />
        <Use />
      </Container>
    );
  }
}
