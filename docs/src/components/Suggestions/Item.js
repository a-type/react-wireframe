import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: row;
  margin: 8px 0;

  & > *:first-child {
    flex: 0 0 auto;
    margin: auto 8px auto 0;
  }
`;
