import React, { useEffect, useState } from "react";
import { Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { S } from "./styles";
import ReactCountryFlag from "react-country-flag";
import { Box } from "@mui/system";
import { EXPLORE_CARD_PLANS } from "../../utils/constants";

const QrModal = ({ show, setEnableShowQRModal, modalData }) => {
  const [gradientColor, setGradientColor] = useState(
    "linear-gradient(180deg, #FFF9EB 0%, rgba(255, 212, 103, 0) 100%);"
  );
  const [packSize, setPackSize] = useState("");
  const handleClose = () => {
    setEnableShowQRModal(false);
  };

  const getValueFromDataByTraitType = (traitType) => {
    let outputData;
    modalData?.metadata?.attributes?.forEach((val) => {
      if (val.trait_type === traitType) {
        outputData = val.value;
      }
    });

    return outputData;
  };

  useEffect(() => {
    let temp = getValueFromDataByTraitType("quantity_of_data_in_GB");

    if (temp) {
      setPackSize(temp);
    }

    packSize !== "" && getGradientColor();
  }, [modalData, packSize]);

  const getGradientColor = () => {
    let planGradient;
    EXPLORE_CARD_PLANS.forEach((plan) => {
      console.log(plan.packSize, packSize);
      if (plan.packSize === parseInt(packSize)) {
        planGradient = plan.backgroundColorHeader;
      }
    });
    setGradientColor(planGradient);
  };

  return (
    <Modal open={show} onClose={handleClose}>
      <S.ModalMainContainer>
        <S.ModalHeader sx={{ background: gradientColor }}>
          <S.ModalSubHeader>
            <Box
              sx={{ display: "flex", gap: "0.5rem", alignItems: "baseline" }}
            >
              <S.DataValueText>
                {" "}
                {getValueFromDataByTraitType("quantity_of_data_in_GB")}
              </S.DataValueText>{" "}
              GB{" "}
              <S.DaysText>
                | {getValueFromDataByTraitType("validity_in_days")} days
              </S.DaysText>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              {getValueFromDataByTraitType("destination")}
              <ReactCountryFlag
                countryCode={getValueFromDataByTraitType("country_code")}
              />
            </Box>
          </S.ModalSubHeader>
          <S.CustomIconButton onClick={handleClose}>
            <CloseIcon
              sx={{
                border: "1px solid #DEE7FD",
                background: "#FFFFFF",
                padding: "unset !important",
              }}
            />
          </S.CustomIconButton>
        </S.ModalHeader>
      </S.ModalMainContainer>
    </Modal>
  );
};

export default QrModal;
