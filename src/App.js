import { useWeb3React } from "@web3-react/core";
import { useEffect } from "react";
import "./App.css";
import Layout from "./components/layout";
import { metaMask } from "./connectors/Metamask";
import esfContractService from "./ethereum/contract/esfContractService";

function App() {
  const isConnected = localStorage.getItem("isConnected");
  const { account,provider } = useWeb3React();

  useEffect(() => {
    if (isConnected === "true") {
      if (metaMask) {
        metaMask.connectEagerly();
      }
    }
  }, []);

  useEffect(() => {
    if(account !== undefined && provider !== undefined){
      esfContractService.setup(provider)
    }
  }, [account,provider])
  

  return (
    <div className="App">
        <Layout />
    </div>
  );
}

export default App;
