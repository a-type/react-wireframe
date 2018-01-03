import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Json from '../src/components/Json';
import Wireframe from '../src/components/Wireframe';

const flatData = { foo: 'bar', baz: 2, corge: true };
const nestedData = { foo: { bar: 'a', baz: 'b' }, corge: [0, 1, 2], thud: false };
const deepData = { one: { two: { three: { four: { five: [{ six: { seven: 8 } }] } } } } };

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
  .add('editable', () => <Wireframe {...nestedData} editable />);
