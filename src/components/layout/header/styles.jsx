import styled from "@emotion/styled";
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
  width: "100vw",
}));

const HeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0rem 2rem",
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

const LeftContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.light,
  width: "100%",
  alignItems: "center",
  display: "flex",
  justifyContent: "flex-end",
  height: "2.5rem",
  borderRadius: "2rem 0 0 2rem",
  padding: "0 1rem",
}));

const RightContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.light,
  height: "2.5rem",
  width: "100%",
  alignItems: "center",
  display: "flex",
  padding: "0 1rem",
  borderRadius: "0 2rem 2rem 0",
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  cursor: "pointer",
}));

export const S = {
  HeaderWrapper,
  HeaderContainer,
  BalanceContainer,
  LeftContainer,
  RightContainer,
  LogoContainer,
};
