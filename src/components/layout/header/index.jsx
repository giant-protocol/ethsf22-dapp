import { Box, Tooltip, useMediaQuery } from "@mui/material";
import React, { useEffect } from "react";
import * as PushAPI from "@pushprotocol/restapi";
import WalletIcon from "../../../assets/icons/WalletIcon.svg";
import MainLogoBeta from "../../../assets/icons/MainLogoBeta.svg";
import MobileViewLogo from "../../../assets/icons/GiantMobileLogo.svg";
import MetamaskIcon from "../../../assets/icons/MetamaskIcon.svg";
import PushProtocolIcon from "../../../assets/PushProtocolIcon.svg";
import { metaMask } from "../../../connectors/Metamask";
import { S } from "./styles";
import { useWeb3React } from "@web3-react/core";
import { handleConnect } from "../../../utils";
import { EmbedSDK } from "@pushprotocol/uiembed";

const Header = () => {
  const mobileView = useMediaQuery("(max-width:450px)");
  const { account, provider } = useWeb3React();
  const isSubscribed = localStorage.getItem("subscribed");

  useEffect(() => {
    if (account) {
      console.log("initiated");
      EmbedSDK.init({
        headerText: "Notifications", // optional
        targetID: "sdk-trigger-id", // mandatory
        appName: "giant-esim", // mandatory
        user: account, // mandatory
        chainId: 5, // mandatory
        viewOptions: {
          showUnreadIndicator: true, // optional
          unreadIndicatorColor: "#cc1919",
          unreadIndicatorPosition: "bottom-right",
        },
        theme: "dark",
        onOpen: () => {
          console.log("-> client dApp onOpen callback");
        },
        onClose: () => {
          console.log("-> client dApp onClose callback");
        },
      });
    }

    return () => {
      EmbedSDK.cleanup();
    };
  }, [account]);

  const handleNotification = async () => {
    const signer = provider.getSigner(account);

    await PushAPI.channels.subscribe({
      signer: signer,
      channelAddress: process.env.REACT_APP_PUSH_PROTOCOL_CHANNEL_ADDRESS, // channel address in CAIP
      userAddress: account,
      onSuccess: () => {
        console.log("opt in success");
      },
      onError: () => {
        console.error("opt in error");
      },

      env: "staging",
    });
  };

  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <S.LogoContainer>
          <img src={mobileView ? MobileViewLogo : MainLogoBeta} alt="" />
        </S.LogoContainer>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            gap: "1rem",
            width: "20rem",
          }}
        >
          {account !== undefined && (
            <S.PushProtocolButton
              id={isSubscribed === "true" ? "sdk-trigger-id" : "unsubscribed"}
              sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              onClick={isSubscribed === "false" && handleNotification}
            >
              <img src={PushProtocolIcon} alt="" />
            </S.PushProtocolButton>
          )}
          {/* <button id="sdk-trigger-id">trigger button</button> */}
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
        </Box>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
};

export default Header;
