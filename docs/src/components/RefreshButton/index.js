import React from 'react';
import Button from '../Button';
import Container from './Container';

export default ({ refresh }) => (
  <Container>
    <h4>Feed</h4>
    <Button onClick={refresh}>refresh</Button>
  </Container>
);
