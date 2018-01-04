import styled from 'styled-components';

export default styled.textarea`
  padding: 8px;
  font-family: monospace;
  border: 1px solid ${({ valid }) => valid ? '#d2d2d2' : '#f29292'};
  background: #f2f2f2;
  width: 100%;
  margin-right: 24px;
  box-sizing: border-box;
  height: 300px;

  &:focus {
    outline: none;
    background: #fff;
  }
`;
