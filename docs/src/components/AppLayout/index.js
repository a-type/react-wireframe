import React from 'react';
import Grid from './Grid';
import Container from './Container';

export default ({ children, innerRef }) => (
  <Container innerRef={innerRef}>
    <Grid>
      {children}
    </Grid>
  </Container>
);
