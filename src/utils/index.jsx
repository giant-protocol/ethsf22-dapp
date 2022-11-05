import { metaMask } from "../connectors/Metamask";

export const handleConnect = () => {
  if (window && window?.ethereum) {
    metaMask.activate();
    localStorage.setItem("isConnected", true);
  } else {
    window.open("https://metamask.io/");
  }
};

export const getValueFromDataByTraitType = (traitType, data) => {
  let outputData;
  data?.external_data?.attributes?.forEach((val) => {
    if (val.trait_type === traitType) {
      outputData = val.value;
    }
  });

  return outputData;
};
