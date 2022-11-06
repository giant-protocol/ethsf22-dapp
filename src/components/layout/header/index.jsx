import { Box, useMediaQuery } from "@mui/material";
import React, { useEffect } from "react";
import * as PushAPI from "@pushprotocol/restapi";
import ETHicon from "../../../assets/icons/ethereum.svg";
import PolygonIcon from "../../../assets/icons/polygon.svg";
import MainLogoBeta from "../../../assets/icons/MainLogoBeta.svg";
import MobileViewLogo from "../../../assets/icons/GiantMobileLogo.svg";
import MetamaskIcon from "../../../assets/icons/MetamaskIcon.svg";
import PushProtocolIcon from "../../../assets/PushProtocolIcon.svg";
import { metaMask } from "../../../connectors/Metamask";
import { S } from "./styles";
import { useWeb3React } from "@web3-react/core";
import { handleConnect } from "../../../utils";
import { EmbedSDK } from "@pushprotocol/uiembed";

const Header = ({ subscribed, setUpdateUserPlans }) => {
  const mobileView = useMediaQuery("(max-width:450px)");
  const { account, provider } = useWeb3React();

  useEffect(() => {
    if (account) {
      console.log("initiated");
      EmbedSDK.init({
        headerText: "Notifications", // optional
        targetID: "sdk-trigger-id", // mandatory
        appName:
          parseInt(process.env.REACT_APP_CURRENT_CHAIN) === "137"
            ? "GIANT"
            : "giant-esim", // mandatory
        user: account, // mandatory
        chainId:
          parseInt(process.env.REACT_APP_CURRENT_CHAIN) === "137" ? 1 : 5, // mandatory
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
  }, [account, subscribed]);

  const handleNotification = async () => {
    const signer = provider.getSigner(account);

    await PushAPI.channels.subscribe({
      signer: signer,
      channelAddress: process.env.REACT_APP_PUSH_PROTOCOL_CHANNEL_ADDRESS, // channel address in CAIP
      userAddress: account,
      onSuccess: () => {
        console.log("opt in success");
        setUpdateUserPlans(true);
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
            justifyContent: "flex-end",
            gap: "1rem",
            width: "80rem",
          }}
        >
          {account !== undefined && (
            <>
              {subscribed === true ? (
                <S.PushProtocolButton
                  id="sdk-trigger-id"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <img src={PushProtocolIcon} alt="" />
                </S.PushProtocolButton>
              ) : (
                <S.PushProtocolUnSubButton
                  id="unsubscribed"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                  onClick={() => handleNotification()}
                >
                  <img src={PushProtocolIcon} alt="" />
                </S.PushProtocolUnSubButton>
              )}
            </>
          )}
          <S.WalletWrapperContainer sx={{ background: "#9369bf40 !important" }}>
            {process.env.REACT_APP_CURRENT_CHAIN === "5" ? (
              <img src={ETHicon} alt="" />
            ) : (
              process.env.REACT_APP_CURRENT_CHAIN === "137" && (
                <img src={PolygonIcon} alt="" />
              )
            )}

            {process.env.REACT_APP_CURRENT_CHAIN === "5"
              ? "Goerli test network"
              : process.env.REACT_APP_CURRENT_CHAIN === "137"
              ? "Polygon Mainnet"
              : "Invalid Network"}
          </S.WalletWrapperContainer>
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
