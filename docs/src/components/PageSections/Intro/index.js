import React from 'react';
import AppImplemented from '../../AppImplemented';
import AppWireframe from '../../AppWireframe';
import PanelGroup from 'react-panelgroup';
import Container from './Container';
import Split from './Split';
import SplitLeft from './SplitLeft';
import SplitRight from './SplitRight';
import TextMark from '../../TextMark';

export default class Intro extends React.Component {
  componentDidMount() {
    this.sync();
  }

  componentDidUpdate() {
    this.sync();
  }

  sync = () => {
    this.wireframe.onscroll = () => {
      this.implemented.scrollTop = this.wireframe.scrollTop;
    };
    this.implemented.onscroll = () => {
      this.wireframe.scrollTop = this.implemented.scrollTop;
    };
  };

  render() {
    return (
      <Container>
        <PanelGroup borderColor="black">
          <Split first>
            <SplitLeft>
              <TextMark>react-wireframe</TextMark>
              <AppWireframe innerRef={c => this.wireframe = c} />
            </SplitLeft>
          </Split>
          <Split>
            <SplitRight>
              <TextMark filled>react-wireframe</TextMark>
              <AppImplemented innerRef={c => this.implemented = c} />
            </SplitRight>
          </Split>
        </PanelGroup>
      </Container>
    );
  }
}
