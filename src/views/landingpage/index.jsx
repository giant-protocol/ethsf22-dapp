import axios from "axios";
import React, { useEffect, useState } from "react";
import ExplorePlanCard from "../../components/cards/ExplorePlanCard";
import MyDataPlanCard from "../../components/cards/MyDataPlanCard";
import { DEVICE_TYPE, EXPLORE_CARD_PLANS } from "../../utils/constants";
import TopBannerImg from "../../assets/TopBanner.png";
import MetamaskIcon from "../../assets/icons/MetamaskIcon.svg";
import PushProtocolIcon from "../../assets/PushProtocolIcon.svg";
import { S } from "./styles";
import { useWeb3React } from "@web3-react/core";
import { handleConnect } from "../../utils";
import { CircularProgress } from "@mui/material";
import DummyCard from "../../components/cards/DummyCard";
import QrModal from "../../components/modal";
import * as PushAPI from "@pushprotocol/restapi";

const LandingPage = () => {
  const [activePlans, setActivePlans] = useState([]);
  const [inActivePlans, setInactivePlans] = useState([]);
  const [adminAddress, setAdminAddress] = useState("");
  const [plansLoading, setPlansLoading] = useState(false);
  const [updateUserPlans, setUpdateUserPlans] = useState(false);
  const [enableShowQrModal, setEnableShowQRModal] = useState(false);
  const [modalData, setModalData] = useState([]);
  const [deviceType, setDeviceType] = useState(DEVICE_TYPE[0].value);
  const { account, provider } = useWeb3React();

  useEffect(() => {
    if (account !== undefined) {
      setPlansLoading(true);
      getUserPlans();
      setUpdateUserPlans(false);
    }
  }, [account, updateUserPlans]);

  const getUserPlans = () => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/api/wallet/plans`, {
        walletAddress: account,
      })
      .then((res) => {
        setPlansLoading(false);
        setActivePlans(res.data.activePlans);
        setInactivePlans(res.data.inActivePlans);
        setAdminAddress(res.data.admin);
      });
  };

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
    <>
      <img
        src={TopBannerImg}
        alt=""
        style={{ marginTop: "5rem", width: "100%" }}
      />
      <S.LandingPageContainer>
        <S.MyDataPlansCard>
          <S.MyDataPlansCardHeader>
            My Data Plans
            <S.PushProtocolButton
              sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              onClick={handleNotification}
            >
              <img src={PushProtocolIcon} alt="" /> Subscribe to push
              notifications
            </S.PushProtocolButton>
          </S.MyDataPlansCardHeader>
          {plansLoading ? (
            <S.ConnectWalletButtonContainer>
              <CircularProgress sx={{ postion: "relative", top: "-2rem" }} />
            </S.ConnectWalletButtonContainer>
          ) : (
            <>
              {account !== undefined ? (
                <S.MyDataPlansCardBody>
                  {inActivePlans?.map((data, index) => {
                    return (
                      <MyDataPlanCard
                        data={data}
                        key={index}
                        adminAddress={adminAddress}
                        status="Inactive"
                        setUpdateUserPlans={() => setUpdateUserPlans(true)}
                        setEnableShowQRModal={setEnableShowQRModal}
                        setModalData={setModalData}
                      />
                    );
                  })}
                  {activePlans?.map((data, index) => {
                    return (
                      <MyDataPlanCard
                        data={data}
                        key={data.id}
                        status="Active"
                        setEnableShowQRModal={setEnableShowQRModal}
                        setModalData={setModalData}
                      />
                    );
                  })}
                </S.MyDataPlansCardBody>
              ) : (
                <S.ConnectWalletButtonContainer>
                  <S.ConnectWalletButton onClick={handleConnect}>
                    <img src={MetamaskIcon} alt="metamask icon" />
                    Connect your Metamask wallet
                  </S.ConnectWalletButton>
                </S.ConnectWalletButtonContainer>
              )}
            </>
          )}
        </S.MyDataPlansCard>
        <S.ExplorePlansCard>
          <S.MyDataPlansCardHeader>
            Explore eSIM data plans on OpenSea
          </S.MyDataPlansCardHeader>
          <S.ExplorePlansCardBody>
            {EXPLORE_CARD_PLANS.map((plan) => {
              return <ExplorePlanCard key={plan.id} data={plan} />;
            })}
            <DummyCard />
          </S.ExplorePlansCardBody>
        </S.ExplorePlansCard>
      </S.LandingPageContainer>
      <QrModal
        show={enableShowQrModal}
        setEnableShowQRModal={setEnableShowQRModal}
        modalData={modalData}
        deviceType={deviceType}
        setDeviceType={setDeviceType}
        getUserPlans={getUserPlans}
      />
    </>
  );
};

export default LandingPage;
