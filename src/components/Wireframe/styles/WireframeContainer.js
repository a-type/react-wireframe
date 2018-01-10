import styled from 'styled-components';

export default styled.div`
  border: 1px solid #f2f2f2;
  background: #f8f8f8;
  overflow: auto;
  position: relative;
  padding: 8px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  & > *:first-child {
    flex: 1;
  }
  & > *:last-child {
    flex: 0 0 auto;
    margin-top: 8px;
  }
`;
