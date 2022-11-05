import { Box } from "@mui/material";
import moment from "moment";
import React from "react";
import { getValueFromDataByTraitType } from "../../utils";
import CustomProgessBar from "../progressbar";
// import GiantDollor from "assets/icons/GiantDollor.svg";

import { S } from "./PlanDetailsCard.Styles";

const PlanDetailsCard = ({ data, status }) => {
  return (
    <S.MyDataPlanBodyContentCard>
      <S.BottomContainer>
        <S.DataAvailableText
          sx={{ display: "flex", alignItems: "baseline", gap: "0.3rem" }}
        >
          Data Available:
          <S.DataValueText>
            {" "}
            {getValueFromDataByTraitType(
              "quantity_of_data_in_GB",
              data
            )} GB{" "}
          </S.DataValueText>
        </S.DataAvailableText>
        {status === "Active" && (
          <S.DataAvailableText>
            Expires on:&nbsp;
            <S.BoldText>
              {" "}
              {moment(data?.endTime * 1000).format("MMMM DD, YYYY")}
            </S.BoldText>
          </S.DataAvailableText>
        )}
      </S.BottomContainer>

      <CustomProgessBar
        dctStatus={"minted"}
        remainValue={
          status === "Inactive"
            ? getValueFromDataByTraitType("quantity_of_data_in_GB", data)
            : data?.dataUsageRemainingInBytes
        }
        totalValue={5368709120}
        esimStatus={"enabled"}
      />

      <S.DataAvailableText sx={{ alignSelf: "flex-end" }}>
        Last Updated:&nbsp;
        <S.BoldText>
          {" "}
          {moment(data?.endTime).format("MMMM DD, YYYY")}
        </S.BoldText>
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
