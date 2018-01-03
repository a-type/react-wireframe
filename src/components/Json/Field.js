import React from 'react';
import DefaultTextField from './styles/TextField';
import DefaultSelectField from './styles/SelectField';

const Field = ({
  value,
  onChange,

  TextField,
  SelectField,
}) => {
  switch (typeof value) {
    case 'boolean':
      return (
        <SelectField value={value} onChange={ev => onChange(ev.target.value === 'true')}>
          <option>true</option>
          <option>false</option>
        </SelectField>
      );
    default:
      return (
        <TextField value={value} onChange={ev => onChange(ev.target.value)} />
      );
  }
}

Field.defaultProps = {
  TextField: DefaultTextField,
  SelectField: DefaultSelectField,
};

export default Field;
