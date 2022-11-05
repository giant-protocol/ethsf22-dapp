import { Contract } from "@ethersproject/contracts";
import ETHSF from "../build/ETHSF.json";

const esfContractService = () => {
  let contractInstance, deployed, contractWeb3, signer;
  const contractAddress = "0x2ae22705c943a9a7cb29d27736df0cc8238c5a8c";
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
