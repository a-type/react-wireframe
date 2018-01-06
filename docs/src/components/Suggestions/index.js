import React from 'react';
import ProfileImage from '../ProfileImage';
import Container from './Container';
import Item from './Item';

export default ({ suggestions }) => (
  <Container>
    <div>You might also like...</div>
    {suggestions.map(suggestion => (
      <Item key={suggestion.name}>
        <ProfileImage imageSrc={suggestion.profileImage} width="32px" height="32px" />
        <span>{suggestion.name}</span>
      </Item>
    ))}
  </Container>
);
