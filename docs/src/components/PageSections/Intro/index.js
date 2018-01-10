import React from 'react';
import AppImplemented from '../../AppImplemented';
import AppWireframe from '../../AppWireframe';
import PanelGroup from 'react-panelgroup';
import Section from '../Section';
import Split from './Split';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import TextMark from '../../TextMark';
import H2 from '../../H2';

const Container = Section.extend`
  background: linear-gradient(33deg, ${({ theme }) => `${theme.colors.accents[2]}, ${theme.colors.accents[0]}`});
  flex-basis: 95vh;
  width: 100%;
`;

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
        <PanelGroup>
          <Split first>
            <LeftSide>
              <div>
                <TextMark>react-wireframe</TextMark>
                <H2>streamline development and collaborate better</H2>
              </div>
              <AppWireframe innerRef={c => this.wireframe = c} />
            </LeftSide>
          </Split>
          <Split>
            <RightSide>
              <div>
                <TextMark filled>react-wireframe</TextMark>
                <H2>streamline development and collaborate better</H2>
              </div>
              <AppImplemented innerRef={c => this.implemented = c} />
            </RightSide>
          </Split>
        </PanelGroup>
      </Container>
    );
  }
}
