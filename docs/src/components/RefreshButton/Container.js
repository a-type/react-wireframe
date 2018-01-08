import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  & > *:first-child {
    flex: 1;
  }
  & > *:last-child {
    flex: 0 0 auto;
  }
`;
