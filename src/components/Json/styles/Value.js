import styled from 'styled-components';

export default styled.span`
  display: inline-block;
  cursor: ${({ leaf }) => leaf ? 'default' : 'pointer'};
`;
