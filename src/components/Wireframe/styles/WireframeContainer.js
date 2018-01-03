import styled from 'styled-components';

export default styled.div`
  display: flex;
  border: 1px solid #f2f2f2;
  background: #f8f8f8;
  overflow: auto;
  position: relative;

  & > *:first-child {
    margin: auto;
  }
`;
