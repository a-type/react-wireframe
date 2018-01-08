import styled, { css } from 'styled-components';

export default styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;

  ${({ first }) => first ? css`
    &::after {
      position: absolute;
      content: '⇐';
      right: 0;
      top: 50%;
      transform: translateX(50%);
      font-size: 48px;
      color: ${({ theme }) => theme.colors.accents[1]};
    }
    ` : css`
    &::after {
      position: absolute;
      content: '⇒';
      left: 0;
      top: 50%;
      transform: translateX(-50%);
      font-size: 48px;
      color: ${({ theme }) => theme.colors.accents[1]};
    }
    `
  }
`;
