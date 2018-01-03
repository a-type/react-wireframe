import styled from 'styled-components';

export default styled.div`
  font-family: monospace;
  ${({ leaf }) => leaf ? 'border: 0;' : 'margin-top: -1px;'}
`;
