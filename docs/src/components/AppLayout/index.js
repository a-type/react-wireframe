import React from 'react';
import Grid from './Grid';
import Container from './Container';

export default ({ children }) => (
  <Container>
    <Grid>
      {children}
    </Grid>
  </Container>
);
