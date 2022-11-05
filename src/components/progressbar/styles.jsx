import styled from "@emotion/styled";
import { Slider } from "@mui/material";
import { Box } from "@mui/system";

const CustomSliderContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  position: "relative",
  display: "flex",
  alignItems: "center",
  gap: "0.8rem",
  justifyContent: "flex-start",
}));
const CustomSlider = styled(Slider)(
  ({ theme, percentage, dctStatus, esimStatus }) => ({
    padding: "0",
    "& .MuiSlider-thumb": {
      display: "none",
    },
    "& .MuiSlider-track": {
      border: "none",
      backgroundColor:
        dctStatus === "minted" ||
        dctStatus === "disabled" ||
        dctStatus === "inactive" ||
        dctStatus === "expired" ||
        esimStatus === "EXPIRED"
          ? "#66717B"
          : percentage <= 15
          ? "#F27564"
          : percentage <= 50
          ? "#FAC748"
          : percentage > 50
          ? "#00C853"
          : "#F27564",
      height: 15,
    },
    "& .MuiSlider-rail": {
      opacity: 1,
      height: 15,
      backgroundColor: "#EBEEF3",
    },
  })
);
const SliderText = styled(Box)(({ theme, percentage }) => ({
  position: "absolute",
  left: `${percentage / 2 + 3}%`,
  fontWeight: 700,
  fontSize: "0.75rem",
  lineHeight: "1rem",
  transform: "translate(-100%,7%) scale(1) !important",
  color: "white",
}));

export const S = {
  CustomSliderContainer,
  CustomSlider,
  SliderText,
};
