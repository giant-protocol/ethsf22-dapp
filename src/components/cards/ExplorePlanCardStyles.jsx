import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const MainContainer = styled(Box)(({ theme }) => ({
  height: "311px",
  width: "620px",
  borderRadius: "0.5rem",
  boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.1)",
  display: "grid",
  gridTemplateRows: "1fr 1fr",
}));

const ExplorePlansHeader = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
}));
const HeaderDataContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "0 1.25rem",
  fontSize: "2.25rem",
  fontWeight: "700",
}));

const ExplorePlansBody = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "3fr 1fr",
}));
const DataValueText = styled(Typography)(({ theme }) => ({
  fontSize: "2.875rem",
  fontWeight: "700",
}));
const DataValueContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  gap: "1rem",
  fontSize: "26px",
  fontWeight: 700,
  padding: "0 20px",
}));
const EsimContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  placeContent: "center",
  position:"relative",
}));
const EsimWrapper = styled(Box)(({ theme }) => ({
  height: "6.25rem",
  width: "6.25rem",
  borderRadius:"1rem",
  opacity: "0.4",
}));

export const S = {
  MainContainer,
  ExplorePlansHeader,
  HeaderDataContainer,
  ExplorePlansBody,
  DataValueText,
  DataValueContainer,
  EsimContainer,
  EsimWrapper,
};
