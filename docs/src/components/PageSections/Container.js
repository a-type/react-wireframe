import styled from 'styled-components';
import Section from './Section';

export default styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  margin-bottom: 32px;

  & > ${Section} {
    flex: 0 0 auto;
  }
`;
