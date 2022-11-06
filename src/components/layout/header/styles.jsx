import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Box } from "@mui/system";

const HeaderWrapper = styled(Box)(({ theme }) => ({
  background: theme.palette.common.white,
  boxShadow:
    "0px 4px 8px rgba(0, 0, 0, 0.1), 0px 0px 1px rgba(11, 33, 62, 0.25)",
  color: theme.palette.text.primary,
  position: "fixed",
  top: 0,
  zIndex: 99,
  height: "5rem",
  width: "100%",
}));

const HeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0rem 2rem 0 2rem",
  height: "100%",
  //   [theme.breakpoints.down("sm")]: {
  //     padding: "0rem 0 0 1rem",
  //   },
  //   [theme.breakpoints.down(1350)]: {
  //     padding: "0rem 1rem",
  //   },
}));

const BalanceContainer = styled(Box)(({ theme }) => ({
  width: "15%",
  alignItems: "center",
  display: "flex",
  justifyContent: "space-evenly",
  borderRadius: "20px",
}));

const WalletWrapperContainer = styled(Box)(({ theme }) => ({
  background: "rgba(226, 118, 37, 0.1);",
  height: "2.5rem",
  maxWidth: "19.5rem",
  alignItems: "center",
  display: "flex",
  justifyContent: "space-around",
  gap: "1rem",
  padding: "0 1rem",
  borderRadius: "2rem",
  cursor: "pointer",
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  cursor: "pointer",
}));

const PushProtocolButton = styled(Button)(({ theme }) => ({
  height: "2.5rem",
  background: "#ff96e840",
  borderRadius: "3.125rem",
  textTransform: "none",
  color: "#0B213E",
  fontSize: "1.25rem",
  fontWeight: "400",
  padding: "0 1.5rem",
}));

const PushProtocolUnSubButton = styled(Button)(({ theme }) => ({
  height: "2.5rem",
  background: "#ff96e840",
  borderRadius: "3.125rem",
  textTransform: "none",
  color: "#0B213E",
  fontSize: "1.25rem",
  fontWeight: "400",
  padding: "0 1.5rem",
}));

export const S = {
  HeaderWrapper,
  HeaderContainer,
  BalanceContainer,
  WalletWrapperContainer,
  LogoContainer,
  PushProtocolButton,
  PushProtocolUnSubButton,
};
