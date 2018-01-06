import styled from 'styled-components';

export default styled.button`
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme.colors.accent.dark};
  margin: 12px auto;
`;
