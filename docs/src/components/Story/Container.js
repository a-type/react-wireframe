import styled from 'styled-components';

export default styled.div`
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin: 0 0 18px 0;
  width: 100%;
`;
