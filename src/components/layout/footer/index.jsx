import * as React from "react";
import { Box } from "@mui/system";
import { Grid, useMediaQuery } from "@mui/material";
import FooterLogo from "../../../assets/icons/GiantconnectFooterLogo.svg";
import { SOCIAL_ICONS } from "../../../utils/constants";
import { S } from "./styled";
import FooterDropdownLogo from "../../../assets/icons/FooterDropdown.svg";
import ShareLogo from "../../../assets/icons/up-right-from-square.svg";

export const Footer = () => {
  const mobileView = useMediaQuery("(max-width:450px)");

  return (
    <>
      <S.CustomFooter maxWidth={false}>
        <S.FooterContainer container>
          <S.FooterLogoContainer item>
            <img
              style={{ height: "3rem", marginBottom: "3rem" }}
              src={FooterLogo}
              alt=""
            />
            {process.env.REACT_APP_CURRENT_CHAIN === "mainnet" && (
              <S.FooterLinkText
                onClick={() =>
                  window.open("https://app.testnet.giantprotocol.org", "_self")
                }
              >
                <img src={FooterDropdownLogo} alt="FooterDropdownLogo" />
                Switch to Testnet
                <img src={ShareLogo} alt="ShareLogo" />
              </S.FooterLinkText>
            )}
          </S.FooterLogoContainer>
          <S.FooterSubContainer item>
            <S.FooterHeaderText>Foundation</S.FooterHeaderText>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
            >
              <S.FooterLinks>
                <S.LinkButton
                  onClick={() => {
                    window.open("https://giantprotocol.org/about/");
                  }}
                  disableRipple={true}
                >
                  About
                </S.LinkButton>
              </S.FooterLinks>
              <S.FooterLinks>
                <S.LinkButton
                  onClick={() => {
                    window.open("https://giantprotocol.org/news/");
                  }}
                  disableRipple={true}
                >
                  News
                </S.LinkButton>
              </S.FooterLinks>
            </Box>
          </S.FooterSubContainer>
          <S.FooterSubContainer item>
            <S.FooterHeaderText>Get Involved</S.FooterHeaderText>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
            >
              <S.FooterLinks>
                <S.LinkButton
                  onClick={() => {
                    window.open("https://forms.gle/PnVp2Sza4tcwbT5n6");
                  }}
                  disableRipple={true}
                >
                  Be an Ambassador
                </S.LinkButton>
              </S.FooterLinks>
              <S.FooterLinks>
                <S.LinkButton
                  onClick={async () => {
                    window.open("https://forms.gle/jsEiEsfYt3wUAw6Z8");
                  }}
                  disableRipple={true}
                >
                  Be a Provider
                </S.LinkButton>
              </S.FooterLinks>
              <S.FooterLinks>
                <S.LinkButton
                  onClick={async () => {
                    window.open("https://forms.gle/qYLLEHuzBJm7auZKA");
                  }}
                  disableRipple={true}
                >
                  Be a Validator
                </S.LinkButton>
              </S.FooterLinks>
            </Box>
          </S.FooterSubContainer>
          <S.FooterSubContainer item>
            <S.FooterHeaderText>Support</S.FooterHeaderText>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
            >
              <S.FooterLinks>
                <S.LinkButton
                  onClick={async () => {
                    window.open(
                      "https://support.giantprotocol.org/hc/en-us/articles/9297603626519-How-do-I-install-and-activate-my-eSIM-"
                    );
                  }}
                  disableRipple={true}
                >
                  Installation Guide
                </S.LinkButton>
              </S.FooterLinks>
              <S.FooterLinks>
                <S.LinkButton
                  onClick={async () => {
                    window.open(
                      "https://support.giantprotocol.org/hc/en-us/sections/1500001787622-FAQs"
                    );
                  }}
                  disableRipple={true}
                >
                  FAQs
                </S.LinkButton>
              </S.FooterLinks>
              <S.FooterLinks>
                <S.LinkButton
                  onClick={async () => {
                    window.open(
                      "https://support.giantprotocol.org/hc/en-us/requests/new"
                    );
                  }}
                  disableRipple={true}
                >
                  Contact Us
                </S.LinkButton>
              </S.FooterLinks>
            </Box>
          </S.FooterSubContainer>

          <S.SocialMediaContainer
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1.8rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid sx={{ display: "flex", width: "100%", overflow: "hidden" }}>
              {SOCIAL_ICONS.map((icon, index) => {
                return (
                  <S.LinkButton
                    key={index}
                    onClick={() => {
                      window.open(icon.link.toString());
                    }}
                    disableRipple={true}
                  >
                    <img src={icon.icon} style={{ cursor: "pointer" }} alt="" />
                  </S.LinkButton>
                );
              })}
            </Grid>
            <Box
              sx={{
                display: "flex",
                gap: "2rem",
                width: "100%",
                justifyContent: mobileView ? "center" : "flex-start",
              }}
            >
              <S.FooterLinks>
                <S.LinkButton
                  onClick={() => {
                    window.open("https://giantprotocol.org/privacy/");
                  }}
                >
                  Privacy Policy
                </S.LinkButton>
              </S.FooterLinks>
              <S.FooterLinks>
                <S.LinkButton
                  onClick={() => {
                    window.open("https://giantprotocol.org/tos/");
                  }}
                >
                  Terms of service
                </S.LinkButton>
              </S.FooterLinks>
            </Box>
          </S.SocialMediaContainer>
        </S.FooterContainer>
      </S.CustomFooter>
      <S.CopyrightContainer maxWidth={false}>
        @2022, GIANT Protocol Foundation. All rights reserved
      </S.CopyrightContainer>
    </>
  );
};
