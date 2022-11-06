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

export const convertToPascalCase = (data) => {
  return data.toLowerCase().replace(/(\w)(\w*)/g, function (g0, g1, g2) {
    return g1.toUpperCase() + g2.toLowerCase();
  });
};

export function shortenedLink(address, chars = 4) {
  if (address) {
    return `${address.slice(0, chars + 15)}.....${address.substring(
      address.length - 1 - 20
    )}`;
  }
}
