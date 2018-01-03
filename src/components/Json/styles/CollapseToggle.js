import styled from 'styled-components';

export default styled.div`
  display: inline-block;
  cursor: pointer;
  border-right: 1px solid #e2e2e2;
  padding-left: calc(0.5em - 1px);
  margin-right: 0.5em;
  transition: 0.2s;
  margin-top: 4px;
  margin-bottom: 4px;

  &:hover {
    border-right-color: #d2d2d2;
  }
`;
