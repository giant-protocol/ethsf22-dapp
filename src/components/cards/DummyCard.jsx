import React from "react";
import { S } from "./DummyCardStyle";
import OpenSeaIcon from "../../assets/icons/OpenSeaIcon.svg";

const DummyCard = () => {
  return (
    <S.MainContainer>
      <S.OpenSeaButton
        onClick={() =>
          window.open(`${process.env.REACT_APP_OPENSEA_COLLECTION_LINK}`)
        }
      >
        {" "}
        <img src={OpenSeaIcon} alt="" /> View on Opensea
      </S.OpenSeaButton>
    </S.MainContainer>
  );
};

export default DummyCard;
