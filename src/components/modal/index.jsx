import React, { useEffect, useState } from "react";
import { Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { S } from "./styles";
import ReactCountryFlag from "react-country-flag";
import { Box } from "@mui/system";
import { EXPLORE_CARD_PLANS } from "../../utils/constants";
import { getValueFromDataByTraitType } from "../../utils";
import DeviceToggle from "../toggle/DeviceToggle";
import Scan from "./scan";

const QrModal = ({
  show,
  setEnableShowQRModal,
  modalData,
  deviceType,
  setDeviceType,
}) => {
  const [gradientColor, setGradientColor] = useState(
    "linear-gradient(113.74deg, #F8D0D4 9.6%, rgba(253, 240, 242, 0) 91.34%);"
  );
  const [packSize, setPackSize] = useState("");
  const handleClose = () => {
    setEnableShowQRModal(false);
  };

  useEffect(() => {
    let temp = getValueFromDataByTraitType("quantity_of_data_in_GB", modalData);

    if (temp) {
      setPackSize(temp);
    }

    packSize !== "" && getGradientColor();
  }, [modalData, packSize]);

  const getGradientColor = () => {
    let planGradient;
    EXPLORE_CARD_PLANS.forEach((plan) => {
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
              <S.DataValueText> {packSize}</S.DataValueText> GB{" "}
              <S.DaysText>
                | {getValueFromDataByTraitType("validity_in_days", modalData)}{" "}
                days
              </S.DaysText>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              {getValueFromDataByTraitType("destination", modalData)}
              <ReactCountryFlag
                countryCode={getValueFromDataByTraitType(
                  "country_code",
                  modalData
                )}
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

        <S.DeviceToggleContainer>
          <DeviceToggle deviceType={deviceType} setDeviceType={setDeviceType} />
        </S.DeviceToggleContainer>

        <Scan deviceType={deviceType} />
      </S.ModalMainContainer>
    </Modal>
  );
};

export default QrModal;
