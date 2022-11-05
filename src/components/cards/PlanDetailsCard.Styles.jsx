import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const MyDataPlanBodyContentCard = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "7.25rem",
  background: "#F3F5F7",
  border: `1px solid ${theme.palette.grey[700]}`,
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  padding: "0.5rem 0.8rem",
  boxSizing: "border-box",
  gap: "0.8rem",
}));

const DataAvailableText = styled(Typography)(({ theme }) => ({
  fontWeight: "400",
  fontSize: "0.875rem",
  textAlign: "left",
  display:"flex",
}));

const BottomContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

const BoldText = styled(Typography)(({ theme }) => ({
  fontWeight: "700",
  fontSize: "0.875rem",
  color: "#000000",
}));

export const S = {
  MyDataPlanBodyContentCard,
  DataAvailableText,
  BottomContainer,
  BoldText,
};
