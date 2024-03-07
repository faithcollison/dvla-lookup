import { ListItemText } from "@mui/material";
import styled from "@emotion/styled";

export const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  color: theme === "dark" ? "white" : "black",
}));
