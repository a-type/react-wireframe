import styled from 'styled-components';
import color from 'tinycolor2';

export default styled.div`
  background: ${({ theme }) => color(theme.colors.accents[0]).darken(30).toHexString()};
  color: ${({ theme }) => theme.colors.background};
  padding: 16px;
  margin: 0;
`;
