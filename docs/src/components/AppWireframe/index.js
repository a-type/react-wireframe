import React from 'react';
import Layout from '../AppLayout';
import Feed from '../../containers/wireframes/Feed';
import ProfileImage from '../../containers/wireframes/ProfileImage';
import RefreshButton from '../../containers/wireframes/RefreshButton';
import Bio from '../../containers/wireframes/Bio';
import Suggestions from '../../containers/wireframes/Suggestions';

export default ({ innerRef }) => (
  <Layout innerRef={innerRef}>
    <RefreshButton
      wireframe={{
        name: 'RefreshButton',
        behaviors: [
          { name: 'refresh', run: data => data.refresh() },
        ],
      }}
    />
    <ProfileImage
      wireframe={{
        name: 'ProfileImage'
      }}
    />
    <Feed
      wireframe={{
        name: 'Feed'
      }}
    />
    <Bio
      wireframe={{
        name: 'Bio'
      }}
    />
    <Suggestions
      wireframe={{
        name: 'Suggestions'
      }}
    />
  </Layout>
);
