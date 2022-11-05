import { metaMask } from "../connectors/Metamask";

export const handleConnect = () => {
  if (window && window?.ethereum) {
    metaMask.activate();
    localStorage.setItem("isConnected", true);
  } else {
    window.open("https://metamask.io/");
  }
};
