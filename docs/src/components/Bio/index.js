import React from 'react';
import Text from './Text';

export default ({
  bio,
  name,
}) => (
  <Text>
    <h2>{name}</h2>
    {bio}
  </Text>
);
