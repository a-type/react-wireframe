import styled from 'styled-components';

export default styled.button`
  color: ${({ theme }) => theme.colors.accent.light};
  background: ${({ theme }) => theme.colors.accent.dark};
  border-radius: 4px;
  padding: 6px 12px;
  border: 0;
  cursor: pointer;
`;
