import styled from 'styled-components';
import Section from './Section';

export default styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  height: 0;
  overflow: overlay;
  -ms-overflow-style: -ms-autohiding-scrollbar;

  & > ${Section} {
    flex: 0 0 auto;
  }
`;
