import React from 'react';
import Section from '../Section';
import Content from './Content';

const Container = Section.extend`
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0 -12px 24px 0 rgba(0, 0, 0, 0.2);
`;

export default () => (
  <Container>
    <Content>
      <h2>
        Decouple logic and presentation
      </h2>
    </Content>
  </Container>
);
