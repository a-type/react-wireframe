import styled from 'styled-components';

export default styled.div`
  position: absolute;
  width: ${({ width }) => width}px;
  height: 100%;
  display: flex;
  flex-direction: column;

  & > * {
    margin: auto;

    &:first-child {
      margin-bottom: 0;
      text-align: center;
      color: white;
    }
  }
`;
