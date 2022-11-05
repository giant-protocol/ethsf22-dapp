import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const MyDataPlanCardContainer = styled(Box)(({ theme }) => ({
  height: "17.9375rem",
  width: "38.75rem",
  borderRadius: "0.5rem",
  background: theme.palette.primary.contrastText,
  boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.1)",
}));

const MyDataPlanHeader = styled(Box)(({ theme }) => ({
  height: "5.75rem",
  width: "38.75rem",
  borderRadius: "0.5rem 0.5rem 0 0",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 1.25rem",
}));

const DataLimitText = styled(Typography)(({ theme }) => ({
  fontWeight: "700",
  fontSize: "36px",
}));
const DataValueText = styled(Typography)(({ theme }) => ({
  fontWeight: "700",
  fontSize: "32px",
}));
const CountryText = styled(Typography)(({ theme }) => ({
  fontWeight: "700",
  fontSize: "32px",
}));

const MyDataPlanBody = styled(Box)(({ theme }) => ({
  padding: "1.25rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
}));
const StatusContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));
const StatusText = styled(Typography)(({ theme }) => ({
  fontWeight: "700",
  fontSize: "1.25rem",
}));
const ViewDetailsText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: "700",
  fontSize: "1.125rem",
  cursor: "pointer",
}));
const ValidityContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontWeight: "700",
  fontSize: "1.125rem",
}));

export const S = {
  MyDataPlanCardContainer,
  MyDataPlanHeader,
  MyDataPlanBody,
  DataLimitText,
  DataValueText,
  CountryText,
  StatusContainer,
  StatusText,
  ViewDetailsText,
  ValidityContainer,
};
