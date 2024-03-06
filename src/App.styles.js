import styled from "@emotion/styled";

export const StyledApp = styled.div`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
