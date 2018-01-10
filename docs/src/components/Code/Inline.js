import styled from 'styled-components';

export default styled.span`
  margin: 0;
  padding: 2px;
  display: inline-block;
  font-family: monospace;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.border};
  border-radius: 4px;
`;
