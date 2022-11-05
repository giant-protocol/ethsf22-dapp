import React from "react";
import { S } from "./DummyCardStyle";
import OpenSeaIcon from "../../assets/icons/OpenSeaIcon.svg";

const DummyCard = () => {
  return (
    <S.MainContainer>
      <S.OpenSeaButton
        onClick={() =>
          window.open("https://testnets.opensea.io/collection/giant-v3")
        }
      >
        {" "}
        <img src={OpenSeaIcon} alt="" /> View on Opensea
      </S.OpenSeaButton>
    </S.MainContainer>
  );
};

export default DummyCard;
