import { Tooltip, useMediaQuery } from "@mui/material";
import React from "react";
import WalletIcon from "../../../assets/icons/WalletIcon.svg";
import MainLogoBeta from "../../../assets/icons/MainLogoBeta.svg";
import MobileViewLogo from "../../../assets/icons/GiantMobileLogo.svg";
import MetamaskIcon from "../../../assets/icons/MetamaskIcon.svg";
import { metaMask } from "../../../connectors/Metamask";
import { S } from "./styles";
import { useWeb3React } from "@web3-react/core";
import useGetBalance from "../../../hooks/useGetBalance";

const Header = () => {
  const mobileView = useMediaQuery("(max-width:450px)");
  const { account } = useWeb3React();
  const balance = useGetBalance();
  const isConnected = localStorage.getItem("isConnected");

  const handleConnect = () => {
    if (window && window?.ethereum) {
      metaMask.activate();
      localStorage.setItem("isConnected", true);
    } else {
      window.open("https://metamask.io/");
    }
  };

  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <S.LogoContainer>
          <img src={mobileView ? MobileViewLogo : MainLogoBeta} alt="" />
        </S.LogoContainer>
        {!account ? (
          <S.WalletWrapperContainer onClick={handleConnect}>
            <img src={MetamaskIcon} alt="walletLogo" />
            Connect Metamask
          </S.WalletWrapperContainer>
        ) : (
          <S.BalanceContainer
            onClick={() => {
              localStorage.setItem("isConnected", false);
              metaMask.resetState();
            }}
          >
            <S.WalletWrapperContainer
              sx={{
                fontWeight: 400,
                color: "#66717B",
                fontSize: "1.125rem",
              }}
              className="animate__animated animate__fadeInLeft"
            >
              <img src={MetamaskIcon} alt="walletLogo" />
              {account?.substring(0, 6)}...
              {account?.substring(account.length - 4)}
            </S.WalletWrapperContainer>
          </S.BalanceContainer>
        )}
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
};

export default Header;
