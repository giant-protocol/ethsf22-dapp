import { Tooltip, useMediaQuery } from "@mui/material";
import React from "react";
import WalletIcon from "../../../assets/icons/WalletIcon.svg";
import MainLogoBeta from "../../../assets/icons/MainLogoBeta.svg";
import MobileViewLogo from "../../../assets/icons/GiantMobileLogo.svg";
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
          <div
            style={{
              cursor: "pointer",
            }}
            onClick={handleConnect}
          >
            <Tooltip title="Connect wallet" arrow>
              <img src={WalletIcon} alt="walletLogo" />
            </Tooltip>
          </div>
        ) : (
          <S.BalanceContainer
            onClick={() => {
              localStorage.setItem("isConnected", false);
              metaMask.resetState();
            }}
          >
            <S.LeftContainer
              className="animate__animated animate__fadeInRight"
              sx={{ fontWeight: 700, fontSize: "18px" }}
            >
              {balance?.balance ? balance?.balance?.toPrecision(4) : "0"}
              &nbsp;ETH
            </S.LeftContainer>

            <img
              src={WalletIcon}
              style={{
                zIndex: "99",
                background: isConnected ? "#CED6E0" : "",
                height: "2.5rem",
              }}
              className="animate__animated animate__fadeIn"
              alt="walletLogo"
            />
            <S.RightContainer
              sx={{
                fontWeight: 400,
                color: "#66717B",
                fontSize: "1.125rem",
              }}
              className="animate__animated animate__fadeInLeft"
            >
              {account?.substring(0, 6)}...
              {account?.substring(account.length - 4)}
            </S.RightContainer>
          </S.BalanceContainer>
        )}
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
};

export default Header;
