import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import GreenDot from "../../assets/icons/GreenDot.svg";
import YellowDot from "../../assets/icons/YellowDot.svg";
import RefreshIcon from "../../assets/icons/RefreshIcon.svg";
import { S } from "./MyDataPlanCardStyles";
import PlanDetailsCard from "./PlanDetailsCard";
import PrimayButton from "../../components/buttons/PrimaryButton";
import esfContractService from "../../ethereum/contract/esfContractService";
import { useWeb3React } from "@web3-react/core";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import { EXPLORE_CARD_PLANS } from "../../utils/constants";
import { convertToPascalCase, getValueFromDataByTraitType } from "../../utils";

const MyDataPlanCard = ({
  data,
  adminAddress,
  status,
  setUpdateUserPlans,
  setEnableShowQRModal,
  setModalData,
}) => {
  const { account } = useWeb3React();
  const [loading, setLoading] = useState(false);
  const [packSize, setPackSize] = useState("");

  useEffect(() => {
    let temp = getValueFromDataByTraitType("quantity_of_data_in_GB", data);

    if (temp) {
      setPackSize(temp);
    }

    packSize !== "" && getGradientColor();
  }, [data, packSize]);

  const [gradientColor, setGradientColor] = useState(
    "linear-gradient(113.74deg, #F8D0D4 9.6%, rgba(253, 240, 242, 0) 91.34%);"
  );

  const handleActivate = async () => {
    setLoading(true);
    await esfContractService
      .transfer({
        from: account,
        to: adminAddress,
        id: data.token_id,
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
    let plansTimer;
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/api/wallet/plan/validate`, {
        walletAddress: account,
        tokenId: data?.tokenId,
        amount: data?.amount,
        transactionHash: response?.hash,
      })
      .then((res) => {
        if (res?.data?.status !== true) {
          confirmationTimeout = setTimeout(() => {
            checkPaymentStatus(response);
          }, 15000);
        } else {
          setLoading(false);
          // plansTimer = setTimeout(() => {
          //   setUpdateUserPlans();
          // }, 5000);
          setModalData(res?.data?.purchasedEsim);
          setEnableShowQRModal(true);
        }
      })
      .catch((err) => {
        console.log(err, "ERR2");
        setLoading(false);
      });
  };

  const handleQr = () => {
    setEnableShowQRModal(true);
    setModalData(data);
  };

  const getGradientColor = () => {
    let planGradient;
    EXPLORE_CARD_PLANS.forEach((plan) => {
      if (plan.packSize === parseInt(packSize)) {
        planGradient = plan.backgroundColorHeader;
      }
    });
    setGradientColor(planGradient);
  };

  const handleRefresh = () => {
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/api/wallet/verify/installation`,
        {
          iccid: data?.iccid,
        }
      )
      .then((res) => setUpdateUserPlans(true));
  };

  return (
    <S.MyDataPlanCardContainer>
      <S.MyDataPlanHeader
        style={{
          background: gradientColor,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            verticalAlign: "baseline",
          }}
        >
          <S.DataLimitText>{packSize}</S.DataLimitText>
          &nbsp;
          <S.DataValueText>GB</S.DataValueText>
        </Box>
        <S.CountryText>
          {getValueFromDataByTraitType("destination", data)}{" "}
          <ReactCountryFlag
            countryCode={getValueFromDataByTraitType("country_code", data)}
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
            {status === "Inactive"
              ? "Inactive"
              : convertToPascalCase(data?.eSimStatus)}
            {status === "Active" && (
              <img
                src={RefreshIcon}
                alt=""
                style={{ cursor: "pointer" }}
                onClick={handleRefresh}
              />
            )}
          </S.StatusText>
          <PrimayButton
            style={{
              height: "35px",
              width: status === "Inactive" ? "30%" : "35%",
            }}
            onClick={() =>
              status === "Inactive" ? handleActivate() : handleQr()
            }
            disable={loading}
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
        <PlanDetailsCard data={data} status={status} />
      </S.MyDataPlanBody>
    </S.MyDataPlanCardContainer>
  );
};

export default MyDataPlanCard;
