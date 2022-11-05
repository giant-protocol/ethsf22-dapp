import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const ModalMainContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#fff",
  borderRadius: "8px !important",
  outline: "none",
  border: "none",
  boxShadow: "none",

  [theme.breakpoints.up("lg")]: {
    height: "65.5%",
    width: "77%",
    maxHeight: 500,
    maxWidth: 970,
  },

  [theme.breakpoints.down("lg")]: {
    height: "56.5%",
    width: "90%",
    minHeight: 500,
    minWidth: 900,
  },

  [theme.breakpoints.down("md")]: {
    width: "95%",
    height: "98vh",
    minHeight: 500,
    minWidth: "unset",
  },
}));

const ModalHeader = styled(Box)(({ theme }) => ({
  display: "grid",
  borderRadius: "0.5rem 0.5rem 0px 0px !important",
  gridTemplateColumns: "95% 5%",
  padding: "0 1.6875rem 0 3rem",
  minHeight: "84px",
  [theme.breakpoints.down(365)]: {
    padding: "0 1.6875rem 0 1rem",
  },
}));

const ModalSubHeader = styled(Box)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "8px 8px 0px 0px !important",
  fontSize: "32px",
  fontWeight: 700,
}));

const CustomIconButton = styled(Box)(({ theme }) => ({
  padding: "0 !important",
  marginLeft: "1.6875rem",
  display: "grid",
  placeContent: "center",
  "&:hover": {
    background: "none",
  },
  svg: {
    color: "#000",
    padding: "0 !important",
    borderRadius: "50%",
    "&:hover": {
      background: theme.palette.grey[200],
    },
  },
  cursor: "pointer",
}));
const DataValueText = styled(Typography)(({ theme }) => ({
  fontSize: "2.875rem",
  fontWeight: 700,
}));

const DaysText = styled(DataValueText)(({ theme }) => ({
  fontSize: "1.25rem",
}));

export const S = {
  ModalMainContainer,
  ModalHeader,
  CustomIconButton,
  ModalSubHeader,
  DataValueText,
  DaysText,
};
