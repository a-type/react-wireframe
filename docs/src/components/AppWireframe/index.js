import React from 'react';
import Layout from '../AppLayout';
import Feed from '../../containers/wireframes/Feed';
import ProfileImage from '../../containers/wireframes/ProfileImage';
import TextMark from '../TextMark';
import RefreshButton from '../../containers/wireframes/RefreshButton';
import Bio from '../../containers/wireframes/Bio';
import Suggestions from '../../containers/wireframes/Suggestions';

export default () => (
  <Layout>
    <TextMark>react-wireframe</TextMark>
    <RefreshButton />
    <ProfileImage />
    <Feed />
    <Bio />
    <Suggestions />
  </Layout>
);
