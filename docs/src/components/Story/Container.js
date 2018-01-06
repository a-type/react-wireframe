import styled from 'styled-components';

export default styled.div`
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 8px solid ${({ theme }) => theme.colors.accent.dark};
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);
  margin: 0 0 18px 0;
  width: 100%;
`;
