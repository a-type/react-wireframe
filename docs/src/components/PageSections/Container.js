import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  height: 0;

  background: linear-gradient(33deg, ${({ theme }) => `${theme.colors.accents[2]}, ${theme.colors.accents[0]}`});
`;
