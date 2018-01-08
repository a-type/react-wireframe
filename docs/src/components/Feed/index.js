import React from 'react';
import Container from './Container';
import DefaultStory from '../../containers/implementations/Story';

const Feed = ({
  storyIds,
  Story,
}) => (
  <Container>
    {storyIds.map(id => <Story storyId={id} key={id}/>)}
  </Container>
);

Feed.defaultProps = {
  storyIds: [],
  Story: DefaultStory,
};

export default Feed;
