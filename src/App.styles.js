import styled from "@emotion/styled";

export const StyledApp = styled.div`
background-color: ${({ theme }) => theme.body};
color: ${({ theme }) => theme.text};
min-height: 100vh;
padding: 0;
`;
