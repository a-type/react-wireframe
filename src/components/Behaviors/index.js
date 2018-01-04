import React from 'react';
import PropTypes from 'prop-types';
import DefaultContainer from './styles/Container';
import DefaultButton from '../Button';

const Behaviors = ({ behaviors, runBehavior, Container, Button }) => (
  <Container>
    {behaviors.map(behavior => (
      <Button key={behavior.name} onClick={() => runBehavior(behavior)}>{behavior.name}</Button>
    ))}
  </Container>
);

Behaviors.propTypes = {
  behaviors: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    run: PropTypes.func.isRequired,
  })),
  runBehavior: PropTypes.func.isRequired,
  Container: PropTypes.func,
  Button: PropTypes.func,
};

Behaviors.defaultProps = {
  Container: DefaultContainer,
  Button: DefaultButton,
};

export default Behaviors;
