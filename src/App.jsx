import { Container } from "@mui/material";

import { Lookup, Header, Version } from "./components/index";

export const App = () => {
  return (
    <Container maxWidth="md">
      <Header />
      <Lookup />
      <Version />
    </Container>
  );
};
