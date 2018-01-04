import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Json from '../src/components/Json';
import Wireframe from '../src/components/Wireframe';

const flatData = { name: 'John Doe', age: 29, bio: 'Frontend Developer' };
const nestedData = {
  name: {
    first: 'John',
    last: 'Doe'
  },
  experience: [
    { years: 1, role: 'JQuery Developer' },
    { years: 4, role: 'React Developer' }
  ],
  knowsRedux: true,
  submit: data => action('submit')(data),
  clear: action('clear')
};

const deepData = { one: { two: { three: { four: { five: [{ six: { seven: 8 } }] } } } } };
const behaviors = [
  {
    name: 'Submit',
    run: data => {
      console.log(data);
      data.submit({
        name: data.name.first + ' ' + data.name.last,
        totalExperience: data.experience.reduce((t, exp) => t + exp.years, 0),
        experience: data.experience,
        knowsRedux: data.knowsRedux,
      });
    },
  },
  {
    name: 'Clear',
    run: data => data.clear(),
  },
];

storiesOf('Json', module)
  .add('with flat data', () => <Json data={flatData} />)
  .add('with nested data', () => <Json data={nestedData} />)
  .add('with deeply nested data', () => <Json data={deepData} />)
  .add('editable', () => <Json editable data={nestedData} onDataChanged={action('dataChanged')} />);

storiesOf('Wireframe', module)
  .add('with no data', () => <Wireframe />)
  .add('with flat data', () => <Wireframe {...flatData} />)
  .add('with nested data', () => <Wireframe {...nestedData} />)
  .add('with deeply nested data', () => <Wireframe {...deepData} />)
  .add('editable', () => <Wireframe {...nestedData} editable />)
  .add('with behaviors', () => (
    <Wireframe
      {...nestedData}
      behaviors={behaviors}
    />
  ))
  .add('editable with behaviors', () => (
    <Wireframe
      {...nestedData}
      behaviors={behaviors}
      editable
    />
  ));
