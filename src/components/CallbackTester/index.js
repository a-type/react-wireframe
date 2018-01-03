import React from 'react';
import PropTypes from 'prop-types';

const CallbackTester = ({
    call,
    Form,
    params,
}) => (
  <Form onSubmit={ev => { ev.preventDefault(); call(...params); }}>

  </Form>
);
