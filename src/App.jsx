import { Container } from  "@mui/material"

import { Lookup, Header } from './components/index'

export const App = () => {
  return (
    <Container maxWidth="md">
      <Header />
      <Lookup />
    </Container>
  );
}

