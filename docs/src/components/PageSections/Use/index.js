import React from 'react';
import Section from '../Section';
import Content from './Content';
import Code from '../../Code';
import H1 from '../../H1';
import H2 from '../../H2';
import A from '../../A';

const Container = Section.extend`
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0 -6px 16px 0 rgba(0, 0, 0, 0.2);
`;

export default () => (
  <Container>
    <Content>
      <H2>Quick start</H2>
      <Code>
        npm i --save react-wireframe
      </Code>
    </Content>
    <Content>
      <H1>
        Decouple logic and presentation
      </H1>
      <p>
        Context-switching between writing business logic and creating presentational components can feel tedious. When you just want to make sure your application's state logic is working as intended, connect it to a Wireframe component and get back to work.
      </p>
      <Code>
        {[
          'import Wireframe from \'react-wireframe\';',
          '',
          'const Post = connect(',
          '  mapStateToPostProps,',
          '  mapDispatchToPostProps,',
          ')(Wireframe); // TODO: create presentational component',
        ].join('\n')}
      </Code>
      <p>
        Right out of the box, without any configuration, Wireframe will display component props in an easy-to-browse JSON tree.
      </p>
      <p>
        Wireframe can also be editable and support calling function props with computed data, so you can simulate a real UI experience.
      </p>
      <Code>
        {[
          'import Wireframe from \'react-wireframe\';',
          '',
          'const PostEditor = connect(',
          '  mapStateToPostProps,',
          '  mapDispatchToPostProps,',
          ')(props => (',
          '  <Wireframe',
          '    {...props}',
          '    wireframe={{',
          '      name: \'PostEditor\',',
          '      editable: true,',
          '      behaviors: [',
          '        {',
          '          name: \'submit\',',
          '          run: data => data.submit(data.title, data.text)',
          '        }',
          '      ]',
          '    }}',
          '  />',
          '));',
        ].join('\n')}
      </Code>
      <p>
        You can then edit the JSON as you like, and buttons will be generated to run your behaviors.
      </p>
    </Content>
    <Content>
      <H1>
        Use cases
      </H1>
      <H2>
        Rapid prototyping
      </H2>
      <p>
        Sometimes when you start a project, you're more concerned with whether you can get and organize your data than whether you can present it. Use Wireframes to start interacting with your backend quickly without worrying about look-and-feel.
      </p>
      <H2>
        Team collaboration
      </H2>
      <p>
        Within teams, there can be a wide range of expertise and interests. Maybe some developers excel with establishing the data layer, but despise CSS. Or there's that one person on your team who seems to mind-meld with the UX designers to create pixel-perfect output, but would rather never touch a reducer. Split up development work by letting your data-wranglers commit a Wireframe'd layout and handing off to the presentational pros.
      </p>
    </Content>
    <Content>
      <H2>Made by Grant Forrest (<A href="https://github.com/a-type">@a-type</A>)</H2>
      <A href="https://github.com/a-type/react-wireframe">Github</A>
    </Content>
  </Container>
);
