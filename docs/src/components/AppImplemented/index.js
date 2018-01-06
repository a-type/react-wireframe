import React from 'react';
import Layout from '../AppLayout';
import Feed from '../../containers/implementations/Feed';
import ProfileImage from '../../containers/implementations/ProfileImage';
import TextMark from '../TextMark';
import RefreshButton from '../../containers/implementations/RefreshButton';
import Bio from '../../containers/implementations/Bio';
import Suggestions from '../../containers/implementations/Suggestions';

export default () => (
  <Layout>
    <TextMark filled>react-wireframe</TextMark>
    <RefreshButton />
    <ProfileImage />
    <Feed />
    <Bio />
    <Suggestions />
  </Layout>
);
