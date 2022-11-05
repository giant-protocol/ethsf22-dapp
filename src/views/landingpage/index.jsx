import axios from "axios";
import React, { useEffect, useState } from "react";
import ExplorePlanCard from "../../components/cards/ExplorePlanCard";
import MyDataPlanCard from "../../components/cards/MyDataPlanCard";
import { EXPLORE_CARD_PLANS } from "../../utils/constants";
import TopBannerImg from "../../assets/TopBanner.png";
import MetamaskIcon from "../../assets/icons/MetamaskIcon.svg";
import { S } from "./styles";
import { useWeb3React } from "@web3-react/core";
import { handleConnect } from "../../utils";
import { CircularProgress } from "@mui/material";

const LandingPage = () => {
  const [activePlans, setActivePlans] = useState([]);
  const [inActivePlans, setInactivePlans] = useState([]);
  const [adminAddress, setAdminAddress] = useState("");
  const [plansLoading, setPlansLoading] = useState(false);
  const [updateUserPlans, setUpdateUserPlans] = useState(false);
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
      });
  };

  return (
    <>
      <img
        src={TopBannerImg}
        alt=""
        style={{ marginTop: "5rem", width: "100vw" }}
      />
      <S.LandingPageContainer>
        <S.MyDataPlansCard>
          <S.MyDataPlansCardHeader>My Data Plans</S.MyDataPlansCardHeader>
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
                      />
                    );
                  })}
                  {activePlans?.map((data, index) => {
                    return (
                      <MyDataPlanCard
                        data={data}
                        key={data.id}
                        status="Active"
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
          </S.ExplorePlansCardBody>
        </S.ExplorePlansCard>
      </S.LandingPageContainer>
    </>
  );
};

export default LandingPage;
