import { Lookup, Header } from './components/index'
import styled from "@emotion/styled";

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

function App() {
  return (
    <Container>
      <Header />
      <Lookup />
    </Container>
  );
}

export default App;
