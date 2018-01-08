import styled from 'styled-components';

export default styled.div`
  display: flex;
  width: 100vw;
  height: 60vh;
  max-width: 1000px;
  max-height: 600px;
  margin: auto;
  overflow-y: auto;
  padding: 8px;
  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.3);
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
`;
