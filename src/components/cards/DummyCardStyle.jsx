import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Box } from "@mui/system";

const MainContainer = styled(Box)(({ theme }) => ({
  height: "311px",
  width: "620px",
  borderRadius: "0.5rem",
  display: "grid",
  placeContent: "center",
  border: "3px dashed #C4C4C4",
}));

const OpenSeaButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  background: "rgba(21, 178, 229, 0.1);",
  borderRadius: "0.5rem",
  height: "4.8125rem",
  width: "19.625rem",
  fontSize: "24px",
  fontWeight: "700",
  color: "#0B213E",
  display: "flex",
  justifyContent: "center",
  gap: "1rem",
}));

export const S = {
  MainContainer,
  OpenSeaButton,
};
