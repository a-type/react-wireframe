import styled from 'styled-components';

export default styled.div`
  margin: auto;
  max-width: 1000px;
  width: 100%;
  justify-items: center;
  min-height: 100%;

  display: grid;
  grid-template-areas:
    ". refreshButton ."
    "profileImage feed suggestions"
    "bio feed suggestions"
    ". feed suggestions";
  grid-template-columns: 20fr 60fr 20fr;
  grid-template-rows: auto auto auto 1fr auto;
  grid-column-gap: 18px;

  & > *:nth-child(1) {
    grid-area: refreshButton;
  }
  & > *:nth-child(2) {
    grid-area: profileImage;
  }
  & > *:nth-child(3) {
    grid-area: feed;
  }
  & > *:nth-child(4) {
    grid-area: bio;
  }
  & > *:nth-child(5) {
    grid-area: suggestions;
  }
`;
