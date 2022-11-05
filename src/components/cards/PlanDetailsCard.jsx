import { Box } from "@mui/material";
import React from "react";
import CustomProgessBar from "../progressbar";
// import GiantDollor from "assets/icons/GiantDollor.svg";

import { S } from "./PlanDetailsCard.Styles";

const PlanDetailsCard = () => {
  return (
    <S.MyDataPlanBodyContentCard>
      <S.BottomContainer>
        <S.DataAvailableText>Data Available:</S.DataAvailableText>
        <S.DataAvailableText>
          Expires on:&nbsp;<S.BoldText>November 30,2022</S.BoldText>
        </S.DataAvailableText>
      </S.BottomContainer>

      <CustomProgessBar
        dctStatus={"minted"}
        remainValue={5368709120}
        totalValue={5368709120}
        esimStatus={"enabled"}
      />

      <S.DataAvailableText sx={{ alignSelf: "flex-end" }}>
        Last Updated:&nbsp;<S.BoldText>November 30,2022</S.BoldText>
      </S.DataAvailableText>

      {/* for reference  */}
      {/* <CustomProgessBar
        dctStatus={data?.dctStatus}
        remainValue={dataConsumed ?? data?.dataUsageRemainingInBytes}
        totalValue={data?.dataLimitInBytes}
        esimStatus={data?.esimStatus}
      /> */}
    </S.MyDataPlanBodyContentCard>
  );
};

export default PlanDetailsCard;
