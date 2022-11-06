import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Box } from "@mui/system";

const LandingPageContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.grey[400],
  color: theme.palette.text.primary,
  height: "100%",
  padding: "5rem",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
}));

const MyDataPlansCard = styled(Box)(({ theme }) => ({
  height: "45vh",
  background: "white",
  width: "100%",
  maxWidth: "1400px",
  maxHeight: "24.5rem",
  position: "relative",
  margin: "auto",
  boxShadow:
    "0px 4px 8px rgba(0, 0, 0, 0.1), 0px 0px 1px rgba(11, 33, 62, 0.25)",
  borderRadius: "8px",
  padding: "1.5rem 2.5rem",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  justifyContent: "space-between",
}));

const ConnectWalletButtonContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  placeContent: "center",
  height: "45vh",
}));
const ConnectWalletButton = styled(Button)(({ theme }) => ({
  width: "24rem",
  height: "4.375rem",
  fontWeight: "700",
  fontSize: "1.125rem",
  color: "#0B213E",
  textTransform: "none",
  background: "rgba(226, 118, 37, 0.1);",
  borderRadius: "0.5rem",
  display: "flex",
  justifyContent: "center",
  gap: "1rem",
  position: "relative",
  top: "-1rem",
}));
const MyDataPlansCardHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  fontSize: "1.5rem",
  fontWeight: "700",
}));

const MyDataPlansCardBody = styled(Box)(({ theme }) => ({
  maxHeight: "90%",
  height: "90%",
  overflow: "auto",
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",
  justifyContent: "space-between",
  padding: "0 0.5rem",
}));

const ExplorePlansCard = styled(MyDataPlansCard)(({ theme }) => ({
  maxHeight: "unset",
  height: "48.75rem",
  gap: "0.5rem",
  justifyContent: "space-around",
}));
const ExplorePlansCardBody = styled(MyDataPlansCardBody)(({ theme }) => ({
  maxHeight: "unset",
  padding: "0",
}));

export const S = {
  LandingPageContainer,
  MyDataPlansCard,
  MyDataPlansCardHeader,
  MyDataPlansCardBody,
  ExplorePlansCard,
  ExplorePlansCardBody,
  ConnectWalletButtonContainer,
  ConnectWalletButton,
};
