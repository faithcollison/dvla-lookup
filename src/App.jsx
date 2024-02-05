import "./App.css";
import Lookup from "./components/Lookup";
import Header from "./components/Header";
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
