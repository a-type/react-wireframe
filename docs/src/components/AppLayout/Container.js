import styled from 'styled-components';

export default styled.div`
  display: flex;
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.accent.dark};
`;
