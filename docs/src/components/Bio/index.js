import React from 'react';
import Text from './Text';
import Button from '../Button';

export default ({
  bio,
  name,
  follow,
  followed,
}) => (
  <Text>
    <h2>{name}</h2>
    <div>
      <Button onClick={follow}>{followed ? 'Followed' : 'Follow'}</Button>
    </div>
    {bio}
  </Text>
);
