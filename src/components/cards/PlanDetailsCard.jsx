import { Box } from "@mui/material";
import moment from "moment";
import React from "react";
import { getValueFromDataByTraitType } from "../../utils";
import CustomProgessBar from "../progressbar";
// import GiantDollor from "assets/icons/GiantDollor.svg";

import { S } from "./PlanDetailsCard.Styles";

const PlanDetailsCard = ({ data, status }) => {
  let lastUpdatedOn = moment(new Date(data?.updatedOn)).valueOf();
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
        dctStatus={status === "Inactive" ? "inactive" : "enabled"}
        remainValue={
          status === "Inactive"
            ? getValueFromDataByTraitType("quantity_of_data_in_GB", data) *
              1073741824
            : data?.dataUsageRemainingInBytes
        }
        totalValue={
          getValueFromDataByTraitType("quantity_of_data_in_GB", data) *
          1073741824
        }
        esimStatus={"enabled"}
      />
      <S.DataAvailableText sx={{ alignSelf: "flex-end" }}>
        {status === "Active" && (
          <>
            Last Updated:&nbsp;
            <S.BoldText>
              {" "}
              {moment(lastUpdatedOn).format("MMMM DD, YYYY hh:mm a")}
            </S.BoldText>
          </>
        )}
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
