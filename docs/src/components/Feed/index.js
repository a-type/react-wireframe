import React from 'react';
import Container from './Container';
import Story from '../../containers/implementations/Story';

export default ({
  storyIds,
}) => (
  <Container>
    {storyIds.map(id => <Story storyId={id} key={id}/>)}
  </Container>
);
