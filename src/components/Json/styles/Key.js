import styled from 'styled-components';

export default styled.span`
  display: inline-block;
  font-weight: bold;
  cursor: pointer;
  color: #222;

  &::after {
    content: ':';
    color: inherit;
  }

  &:hover {
    color: #888;
  }
`;
