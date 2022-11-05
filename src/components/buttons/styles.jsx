import styled from "@emotion/styled";
import { Button } from "@mui/material";

const PrimaryCustomButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  background: theme.palette.primary.main,
  textTransform: "none",
  fontWeight: 700,
  fontSize: "1.25rem",
  borderRadius: "0.5rem",
  "&:hover": {
    background: theme.palette.primary.main,
    opacity: 0.75,
  },
  "&:disabled": {
    background: "#C5C5C5",
    color: theme.palette.primary.contrastText,
  },
}));

export const S = {
  PrimaryCustomButton,
};
