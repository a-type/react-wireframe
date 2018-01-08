import styled from 'styled-components';

export default styled.div`
  position: absolute;
  width: 100vw;
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
