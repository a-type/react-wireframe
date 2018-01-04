import React from 'react';
import DefaultTextField from './styles/TextField';
import DefaultSelectField from './styles/SelectField';
import describeFunction from '../../util/describeFunction';
import printObject from '../../util/printObject';

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
    case 'function':
      return <TextField disabled value={describeFunction(value)} size={describeFunction(value).length} />;
    case 'object':
      return <TextField disabled size={printObject(value).length} value={printObject(value)} />
    case 'number':
      return (
        <TextField
          size={('' + value).length || 1}
          value={value}
          type="number"
          onChange={ev => {
            if (('' + ev.target.value).indexOf('.') >= 0) {
              onChange(parseFloat(ev.target.value));
            } else {
              onChange(parseInt(ev.target.value));
            }
          }}
        />
      );
    default:
      return (
        <TextField size={('' + value).length || 1} value={value} onChange={ev => onChange(ev.target.value)} />
      );
  }
}

Field.defaultProps = {
  TextField: DefaultTextField,
  SelectField: DefaultSelectField,
};

export default Field;
