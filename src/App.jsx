import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import { Lookup, Header, Version } from "./components/index";
import { lightTheme, darkTheme } from "./components/theme";
import { StyledApp } from "./App.styles";

import { Container } from "@mui/material";

export const App = () => {
  const { theme } = useContext(ThemeContext);
  // useEffect(() => {
  //   document.body.style.backgroundColor = theme.body;
  //   document.body.style.color = theme.text;
  // }, [theme]);

  return (
    <StyledApp theme={theme === "dark" ? darkTheme : lightTheme}>
      <Container maxWidth="md">
        <Header />
        <Lookup />
        <Version />
      </Container>
    </StyledApp>
  );
};
