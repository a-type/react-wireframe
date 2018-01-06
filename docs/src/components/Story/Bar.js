import styled from 'styled-components';
import Button from '../Button';

export default styled.div`
  display: flex;
  flex-direction: row;
  padding: 9px 18px 18px 18px;

  & > ${Button} {
    margin: auto 8px auto 0;
  }

  & > span {
    font-size: 12px;
    display: block;
    margin: auto 0;
  }
`;
