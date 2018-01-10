import styled from 'styled-components';

export default styled.div`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: 16px;
  margin: 0;
`;
