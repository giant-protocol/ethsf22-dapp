import axios from "axios";
import React, { useEffect, useState } from "react";
import ExplorePlanCard from "../../components/cards/ExplorePlanCard";
import MyDataPlanCard from "../../components/cards/MyDataPlanCard";
import { DEVICE_TYPE, EXPLORE_CARD_PLANS } from "../../utils/constants";
import TopBannerImg from "../../assets/TopBanner.png";
import MetamaskIcon from "../../assets/icons/MetamaskIcon.svg";
import { S } from "./styles";
import { useWeb3React } from "@web3-react/core";
import { handleConnect } from "../../utils";
import { Box, CircularProgress } from "@mui/material";
import DummyCard from "../../components/cards/DummyCard";
import QrModal from "../../components/modal";
import noPlansIllustration from "../../assets/NoPlansIllustration.svg";

const LandingPage = ({
  setSubscribed,
  updateUserPlans,
  setUpdateUserPlans,
}) => {
  const [activePlans, setActivePlans] = useState([]);
  const [inActivePlans, setInactivePlans] = useState([]);
  const [adminAddress, setAdminAddress] = useState("");
  const [plansLoading, setPlansLoading] = useState(false);
  const [enableShowQrModal, setEnableShowQRModal] = useState(false);
  const [modalData, setModalData] = useState([]);
  const [deviceType, setDeviceType] = useState(DEVICE_TYPE[0].value);
  const { account } = useWeb3React();

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
        localStorage.setItem("subscribed", res?.data?.isPushProtocolEnabled);
        setSubscribed(res?.data?.isPushProtocolEnabled);
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
          <S.MyDataPlansCardHeader>My Data Plans</S.MyDataPlansCardHeader>

          <>
            {account !== undefined ? (
              <>
                {plansLoading ? (
                  <S.ConnectWalletButtonContainer>
                    <CircularProgress
                      sx={{ postion: "relative", top: "-2rem" }}
                    />
                  </S.ConnectWalletButtonContainer>
                ) : (
                  <>
                    {activePlans.length <= 0 && inActivePlans.length <= 0 ? (
                      <S.ConnectWalletButtonContainer
                        sx={{
                          display: "flex !important",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <img src={noPlansIllustration} alt="" />
                        <S.NoPlansText
                          sx={{ postion: "relative", top: "-2rem" }}
                        >
                          Need Data? Check plans below
                        </S.NoPlansText>
                      </S.ConnectWalletButtonContainer>
                    ) : (
                      <S.MyDataPlansCardBody>
                        {inActivePlans?.map((data, index) => {
                          return (
                            <MyDataPlanCard
                              data={data}
                              key={index}
                              adminAddress={adminAddress}
                              status="Inactive"
                              setUpdateUserPlans={() =>
                                setUpdateUserPlans(true)
                              }
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
                    )}
                  </>
                )}
              </>
            ) : (
              <S.ConnectWalletButtonContainer>
                <S.ConnectWalletButton onClick={handleConnect}>
                  <img src={MetamaskIcon} alt="metamask icon" />
                  Connect your Metamask wallet
                </S.ConnectWalletButton>
              </S.ConnectWalletButtonContainer>
            )}
          </>
        </S.MyDataPlansCard>
        <S.ExplorePlansCard>
          <S.MyDataPlansCardHeader>
            Explore eSIM data plans on Polygon/OpenSea
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
