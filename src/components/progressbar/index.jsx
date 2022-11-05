import React from "react";
import { S } from "./styles";

const CustomProgessBar = ({
  remainValue,
  totalValue,
  dctStatus,
  esimStatus,
}) => {
  const dataPercentage = Math.round((remainValue / totalValue) * 100);

  return (
    <>
      <S.CustomSliderContainer>
        <S.CustomSlider
          value={remainValue}
          min={0}
          max={totalValue}
          percentage={dataPercentage}
          dctStatus={dctStatus ?? ""}
          esimStatus={esimStatus ?? ""}
        />
        {remainValue > 0 && (
          <S.SliderText percentage={dataPercentage}>
            {dataPercentage}%
          </S.SliderText>
        )}
      </S.CustomSliderContainer>
    </>
  );
};

export default CustomProgessBar;
