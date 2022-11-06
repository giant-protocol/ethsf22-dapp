import React from "react";
import ReactCountryFlag from "react-country-flag";
import { S } from "./ExplorePlanCardStyles";
import TowerIcon from "../../assets/icons/TowerDark.png";
import CalendarIcon from "../../assets/icons/CalandarDark.png";
import { Box } from "@mui/system";
import ESimImg from "../../assets/ESimImg.svg";
import GiantProviderLogo from "../../assets/GiantProviderIcon.svg";

const ExplorePlanCard = ({ data }) => {
  const handleOpenSeaLink = () => {
    window.open(data?.link);
  };
  return (
    <S.MainContainer
      sx={{
        background: `${data.backgroundColor}`,
        cursor: "pointer",
      }}
      onClick={() => handleOpenSeaLink()}
    >
      <S.ExplorePlansHeader
        sx={{ borderBottom: `5px solid ${data?.borderColor}` }}
      >
        <S.HeaderDataContainer>
          <S.DataValueText>{data?.packSize}</S.DataValueText>&nbsp;GB |
          USA&nbsp;
          <ReactCountryFlag countryCode={"US"} />{" "}
        </S.HeaderDataContainer>
        <img
          src={data?.illustration}
          style={{
            position: "relative",
            bottom: data?.id === 3 ? "-0.4rem" : "-0.1rem",
          }}
          alt=""
        />
      </S.ExplorePlansHeader>
      <S.ExplorePlansBody>
        <S.DataValueContainer>
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.2rem" }}>
            <img src={TowerIcon} alt="" />
            &nbsp; Provider :{" "}
            <img src={GiantProviderLogo} alt="provider icon" /> GIANT
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <img src={CalendarIcon} alt="" />
            &nbsp; Validity : {data?.validity}
          </Box>
        </S.DataValueContainer>
        <S.EsimContainer>
          <S.EsimWrapper
            sx={{
              background: data?.innerGradient,
              border: `2px solid ${data?.borderColor}`,
            }}
          ></S.EsimWrapper>
          <img
            src={ESimImg}
            alt=""
            style={{
              position: "absolute",
              top: "3rem",
              left: "2.5rem",
            }}
          />
        </S.EsimContainer>
      </S.ExplorePlansBody>
    </S.MainContainer>
  );
};

export default ExplorePlanCard;
