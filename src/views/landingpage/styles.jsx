import styled from "@emotion/styled";
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
  padding: "0 1rem",
}));

const ExplorePlansCard = styled(MyDataPlansCard)(({ theme }) => ({
  maxHeight: "unset",
  height: "48.75rem",
}));
const ExplorePlansCardBody = styled(MyDataPlansCardBody)(({ theme }) => ({
  maxHeight: "unset",
}));

export const S = {
  LandingPageContainer,
  MyDataPlansCard,
  MyDataPlansCardHeader,
  MyDataPlansCardBody,
  ExplorePlansCard,
  ExplorePlansCardBody,
};
