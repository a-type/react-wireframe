import React from 'react';
import Container from './Container';
import Text from './Text';
import Bar from './Bar';
import Line from './Line';
import Button from '../Button';

export default ({
  story,
  like,
}) => (
  <Container>
    <Text>
      {story.text.split('\n').map((line, idx) => <Line key={idx}>{line}</Line>)}
    </Text>
    <Bar>
      <Button onClick={like}>like</Button>
      <span>{story.likes} likes</span>
    </Bar>
  </Container>
);
