import { Box } from "@mui/system";
import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import TowerIcon from "../../assets/icons/tower-cell.svg";
import CalendarIcon from "../../assets/icons/CalendarOutlined.png";
import { S } from "./MyDataPlanCardStyles";
import PlanDetailsCard from "./PlanDetailsCard";
import PrimayButton from "../../components/buttons/PrimaryButton";
import esfContractService from "../../ethereum/contract/esfContractService";
import { useWeb3React } from "@web3-react/core";
import { getTransactionReceiptMined } from "../../utils";

const MyDataPlanCard = ({ data, adminAddress }) => {
  const { account, library } = useWeb3React();
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

  const handleActivate = () => {
    // let tx = contract.erc1155.contractWrapper.writeContract.safeTransferFrom({
    //   from: account,
    //   to: adminAddress,
    //   id: data.tokenId,
    //   amount: 1,
    //   data: null,
    // });
    // const tx = await myFunctionAsync([
    //   account,
    //   adminAddress,
    //   data.tokenId,
    //   1,
    //   null,
    // ]);
    // console.log(tx, "TX");
    esfContractService
      .transfer({
        from: account,
        to: adminAddress,
        id: data.tokenId,
        amount: 1,
        data: "0x65",
      })
      .then((res) => console.log(res, "RESPONSE"))
      .catch((err) => console.log(err, "ERROR"));

    // let state = getTransactionReceiptMined(response, library);
  };

  // console.log(data.metadata, "DATA");
  // console.log(loading, "loading");

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

      {/* <S.MyDataPlanBody>
        <S.ValidityContainer>
          <span>{data?.metadata?.name}</span>
        </S.ValidityContainer>
        <S.ValidityContainer>
          <Box>
            <img
              style={{ paddingRight: "12px" }}
              src={CalendarIcon}
              alt="CalendarIcon"
            />
            Validity
          </Box>
          <span>{getValueFromDataByTraitType("VALIDITYINDAYS")} Days</span>
        </S.ValidityContainer>
        <S.ValidityContainer>
          <Box>
            <img
              style={{ paddingRight: "12px" }}
              src={TowerIcon}
              alt="CalendarIcon"
            />
            Provider
          </Box>
          <span>GIANT Connect</span>
        </S.ValidityContainer>
      </S.MyDataPlanBody> */}

      <S.MyDataPlanBody>
        <S.StatusContainer>
          <S.StatusText>Status : Active</S.StatusText>
          <PrimayButton
            style={{ height: "35px", width: "25%" }}
            onClick={handleActivate}
          >
            Activate
          </PrimayButton>
        </S.StatusContainer>
        <PlanDetailsCard />
      </S.MyDataPlanBody>
    </S.MyDataPlanCardContainer>
  );
};

export default MyDataPlanCard;
