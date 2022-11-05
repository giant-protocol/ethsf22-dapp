import { styled } from "@mui/system";
import { Button, Container, Grid, Typography } from "@mui/material";

const CustomFooter = styled(Container)(({ theme }) => ({
  background: theme.palette.primary.main,
  padding: "2rem",
  minHeight: "215px",
  alignItems: "start",
  [theme.breakpoints.down("lg")]: {
    justifyContent: "flex-start",
  },
  [theme.breakpoints.up("sm")]: {
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
  },
}));

const FooterLogoContainer = styled(Grid)(({ theme }) => ({
  padding: "1rem 0",
  width: "22%",
  minWidth: "350px",
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
  "@media (max-width: 400px)": {
    textAlign: "center",
    width: "100%",
    minWidth: "unset",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
}));

const FooterContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  flexFlow: "row-wrap",
  height: "100%",
  padding: "0 0 0.8rem 4.3rem",
  width: "100%",
  maxWidth: "1600px",
  margin: "auto",
  justifyContent: "space-evenly",
  [theme.breakpoints.down("sm")]: {
    padding: "0rem",
  },
}));

const CopyrightContainer = styled(Container)(({ theme }) => ({
  background: theme.palette.common.black,
  color: theme.palette.common.white,
  display: "grid",
  placeContent: "center",
  height: "3rem",
  fontWeight: 400,
  fontSize: "0.6563rem",
}));

const FooterSubText = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  marginBottom: "1rem",
}));

const FooterLinks = styled(Typography)(({ theme }) => ({
  textDecoration: "none",

  a: {
    textDecoration: "none",
    color: theme.palette.common.white,
  },
}));
const FooterLinkText = styled(Typography)(({ theme }) => ({
  textDecoration: "none",
  fontWeight: 500,
  fontSize: "18px",
  lineHeight: "23px",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  gap: "0.4rem",
  marginLeft: "0.5rem",
  color: theme.palette.common.white,
}));

const LinkButton = styled(Button)(({ theme }) => ({
  border: "none",
  background: "transparent",
  color: "#FCFCFC",
  textTransform: "none",
  display: "flex",
  justifyContent: "left",
  padding: "0",
  fontWeight: "400",
  fontSize: "13.5px",
  "@media (max-width: 400px)": {
    margin: "auto",
    justifyContent: "center",
  },
}));

const FooterHeaderText = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: "1.125rem",
  fontWeight: 700,
  marginBottom: "2rem",
  textAlign:"left",
  "@media (max-width: 400px)": {
    marginBottom: "1rem",
  },
}));

const FooterSubContainer = styled(Grid)(({ theme }) => ({
  padding: "1.5rem 0.5rem 0 0",
  width: "12%",
  gap: "1rem",
  minWidth: "150px",
  [theme.breakpoints.down("sm")]: {
    width: "33%",
  },
  "@media (max-width: 400px)": {
    textAlign: "center",
    width: "100%",
  },
}));
const FooterCustomSubContainer = styled(FooterSubContainer)(({ theme }) => ({
  minWidth: "180px",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    textAlign: "left",
  },
  "@media (max-width: 400px)": {
    textAlign: "center",
    width: "100%",
  },
}));

const SocialMediaContainer = styled(Grid)(({ theme }) => ({
  padding: "2.5rem 0 0 0rem",
  width: "25%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: "100%",
  },
  [theme.breakpoints.down("lg")]: {
    width: "unset",
  },
  "@media (max-width: 400px)": {
    textAlign: "center",
    width: "100%",
  },
}));

export const S = {
  CustomFooter,
  FooterLogoContainer,
  FooterContainer,
  CopyrightContainer,
  FooterSubText,
  FooterLinks,
  FooterLinkText,
  LinkButton,
  FooterHeaderText,
  FooterSubContainer,
  FooterCustomSubContainer,
  SocialMediaContainer,
};
