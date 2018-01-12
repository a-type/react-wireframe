import styled from 'styled-components';

export default styled.a`
  color: ${({ theme }) => theme.colors.accents[2]};

  &:active, &:visited {
    color: ${({ theme }) => theme.colors.accents[0]};
  }
`;
