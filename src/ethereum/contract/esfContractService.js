import { Contract } from "@ethersproject/contracts";
import ETHSF from "../build/ETHSF.json";

const esfContractService = () => {
  let contractInstance, deployed, contractWeb3, signer;
  const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
  
  const setup = (_currentProvider) => {
    signer = _currentProvider.getSigner();

    contractWeb3 = new Contract(contractAddress, ETHSF, signer);
    deployed = true;
  };

  const transfer = ({ from, to, id, amount, data }) => {
    if (!deployed) {
      alert("Contract is not deployed!");
      return null;
    }

    const response = contractWeb3.safeTransferFrom(from, to, id, amount, data);

    // console.log(response, "RESPONSE");
    return response;
  };

  return {
    setup,
    transfer,
  };
};

export default esfContractService();
