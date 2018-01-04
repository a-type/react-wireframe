import styled from 'styled-components';

export default styled.input`
  border: 1px solid transparent;
  background: transparent;
  font-size: 1em;
  font-family: inherit;
  transition: 0.2s;
  padding: 0;
  margin: 0;

  &:hover:not(:disabled) {
    border: 1px solid #e2e2e2;
  }

  &:active:not(:disabled), &:focus:not(:disabled) {
    border: 1px solid #d2d2d2;
    background: white;
    outline: none;
  }
`;
