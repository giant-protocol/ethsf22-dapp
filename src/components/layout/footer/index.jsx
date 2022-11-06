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
          </S.FooterLogoContainer>
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
            <Grid
              sx={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
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
                justifyContent: "center",
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
