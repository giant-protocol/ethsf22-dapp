import styled from "@emotion/styled";
import {
  Checkbox,
  CircularProgress,
  FormControl,
  FormGroup,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

const ScanContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: "20px 40px 20px 50px",
  [theme.breakpoints.down("md")]: {
    flexWrap: "wrap",
    gap: "1rem",
  },
}));

const ScanContent = styled(Box)(({ theme }) => ({
  width: "60%",
  display: "flex",
  flexDirection: "column",
  gap: "25px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    order: "2",
  },
}));

const ScanQRContent = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  [theme.breakpoints.down("md")]: {
    flexWrap: "wrap",
    flexDirection: "column",
  },
}));

const ScanTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "24px",
  lineHeight: "31px",
}));

const MiniText = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[600],
  fontSize: "12px",
  fontWeight: "700",
  paddingTop: "0.3rem",
}));

const ScanQR = styled(Box)(({ theme, medium }) => ({
  width: "40%",
  display: "flex",
  justifyContent: "flex-end",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    display: medium ? "flex" : "none",
    justifyContent: "center",
  },
}));

const QRWrapper = styled(Box)(({ theme }) => ({
  border: `4px solid ${theme.palette.primary.main}`,
  height: "280px",
  width: "280px",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const CustomFormControl = styled(FormControl)(({ theme }) => ({
  margin: "0 0 0 0.8rem",
}));

const CheckBoxStyles = styled(Checkbox)(({ theme }) => ({
  width: "1.25rem",
  padding: 0,
  color: "#45B549",
  marginRight: "1rem",
}));
const CustomFormGroup = styled(FormGroup)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "1.625rem",
}));
const VerifyButton = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  [theme.breakpoints.down("md")]: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
}));
const ContrastProgress = styled(CircularProgress)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
}));
const TroubleText = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "12px",
  lineHeight: "21px",
  display: "flex",
  flexWrap: "wrap",
}));
const CustomLink = styled(TroubleText)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.primary.main,
  cursor: "pointer",
}));

export const S = {
  ScanContainer,
  ScanContent,
  ScanQRContent,
  ScanTitle,
  MiniText,
  ScanQR,
  QRWrapper,
  CustomFormControl,
  CheckBoxStyles,
  CustomFormGroup,
  VerifyButton,
  ContrastProgress,
  TroubleText,
  CustomLink,
};
