import React from 'react';
import Layout from '../AppLayout';
// feed is particular... we will use the outer container, then provide a
// different Story component
import Feed from '../../containers/implementations/Feed';
import Story from '../../containers/wireframes/Story';
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
      Story={Story}
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
