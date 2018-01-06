import React from 'react';
import AppImplemented from '../../AppImplemented';
import AppWireframe from '../../AppWireframe';
import SplitPane from 'react-split-pane';
import Container from './Container';
import Split from './Split';
import SplitLeft from './SplitLeft';
import SplitRight from './SplitRight';

export default () => (
  <Container>
    <SplitPane split="vertical">
      <Split>
        <SplitLeft>
          <AppWireframe />
        </SplitLeft>
      </Split>
      <Split>
        <SplitRight>
          <AppImplemented />
        </SplitRight>
      </Split>
    </SplitPane>
  </Container>
);
