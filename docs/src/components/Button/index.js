import styled from 'styled-components';

export default styled.button`
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.accents[3]};
  border-radius: 4px;
  padding: 6px 12px;
  border: 0;
  cursor: pointer;
  margin: auto;

  &:hover {
    background: ${({ theme }) => theme.colors.accents[2]};
  }
`;
