import { Box } from "@mui/system";
import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import GreenDot from "../../assets/icons/GreenDot.svg";
import YellowDot from "../../assets/icons/YellowDot.svg";
import { S } from "./MyDataPlanCardStyles";
import PlanDetailsCard from "./PlanDetailsCard";
import PrimayButton from "../../components/buttons/PrimaryButton";
import esfContractService from "../../ethereum/contract/esfContractService";
import { useWeb3React } from "@web3-react/core";
import { CircularProgress } from "@mui/material";
import axios from "axios";

const MyDataPlanCard = ({ data, adminAddress, status, setUpdateUserPlans }) => {
  const { account } = useWeb3React();
  const [loading, setLoading] = useState(false);

  const getValueFromDataByTraitType = (traitType) => {
    let outputData;
    data?.metadata?.attributes?.forEach((val) => {
      if (val.trait_type === traitType) {
        outputData = val.value;
      }
    });

    return outputData;
  };

  const handleActivate = async () => {
    setLoading(true);
    await esfContractService
      .transfer({
        from: account,
        to: adminAddress,
        id: data.tokenId,
        amount: 1,
        data: "0x65",
      })
      .then((res) => {
        console.log(res, "RESPONSE");
        checkPaymentStatus(res);
      })
      .catch((err) => {
        console.log(err, "ERROR");
        setLoading(false);
      });
  };

  const checkPaymentStatus = (response) => {
    let confirmationTimeout;
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/api/wallet/payment/confirmation`,
        {
          walletAddress: account,
          tokenId: data?.tokenId,
          amount: data?.amount,
          transactionHash: response?.hash,
        }
      )
      .then((res) => {
        console.log(res, "res2");
        if (res?.data?.status !== true) {
          confirmationTimeout = setTimeout(() => {
            checkPaymentStatus(response);
          }, 15000);
        } else {
          setLoading(false);
          setUpdateUserPlans();
        }
      })
      .catch((err) => {
        console.log(err, "ERR2");
        setLoading(false);
      });
  };

  const handleQr = () => {};

  return (
    <S.MyDataPlanCardContainer>
      <S.MyDataPlanHeader
        style={{
          background: `linear-gradient(113.74deg,#F8D0D4 9.6%, #FDF0F2 91.34%)`,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            verticalAlign: "baseline",
          }}
        >
          <S.DataLimitText>
            {getValueFromDataByTraitType("quantity_of_data_in_GB")}
          </S.DataLimitText>
          &nbsp;
          <S.DataValueText>GB</S.DataValueText>
        </Box>
        <S.CountryText>
          {getValueFromDataByTraitType("destination")}{" "}
          <ReactCountryFlag
            countryCode={getValueFromDataByTraitType("country_code")}
          />
        </S.CountryText>
      </S.MyDataPlanHeader>

      <S.MyDataPlanBody>
        <S.StatusContainer>
          <S.StatusText
            sx={{ display: "flex", alignItems: "center", gap: "0.3rem" }}
          >
            Status :{" "}
            <img src={status === "Inactive" ? YellowDot : GreenDot} alt="" />{" "}
            {status}
          </S.StatusText>
          <PrimayButton
            style={{
              height: "35px",
              width: status === "Inactive" ? "25%" : "35%",
            }}
            onClick={() =>
              status === "Inactive" ? handleActivate() : handleQr()
            }
          >
            {loading ? (
              <CircularProgress color="inherit" size="1.5rem" />
            ) : status === "Inactive" ? (
              "Activate Now"
            ) : (
              "Show eSIM QR"
            )}
          </PrimayButton>
        </S.StatusContainer>
        <PlanDetailsCard />
      </S.MyDataPlanBody>
    </S.MyDataPlanCardContainer>
  );
};

export default MyDataPlanCard;
