import styled from "@emotion/styled";
import { Box } from "@mui/system";

const ButtonsContainer = styled(Box)(({ theme }) => ({
  height: "45px",
  display: "grid",
  gridTemplateColumns: "115px 1fr 1.5fr",
  alignSelf: "center",
  [theme.breakpoints.down("md")]: {
    order: 2,
    padding: "1rem 0 0.5rem 0",
    display: "flex",
    placeContent: "center",
  },
}));

const Toggler = styled(Box)(({ theme, selected, disabled }) => ({
  display: "flex",
  border: "2px solid black",
  padding: "0.5rem",
  minWidth: "130px",
  maxWidth: "130px",
  alignItems: "center",
  justifyContent: "center",
  background: selected ? "#fff" : "rgba(60, 60, 67, 0.05)",
  borderColor: selected ? "#45B549" : "rgba(60, 60, 67, 0.06)",
  color: selected ? "#45B549" : "rgba(61, 61, 61, 0.5)",
  cursor: disabled === true ? "not-allowed" : "pointer",
  fontSize: "1.125rem",
  fontWeight: 500,
  borderRadius: "0.5rem",
  zIndex: selected ? 2 : "unset",
}));

export const S = {
  ButtonsContainer,
  Toggler,
};
