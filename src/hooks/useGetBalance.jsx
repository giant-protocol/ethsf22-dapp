import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { formatEther } from "@ethersproject/units";

const useGetBalance = () => {
  const { account, chainId, provider } = useWeb3React();
  const [ethBalance, setEthBalance] = useState();
  //   const dispatch = useDispatch();

  useEffect(() => {
    if (provider && account) {
      handleBalance();
      let interval;
      interval = setInterval(() => {
        handleBalance();
      }, 300000);

      return () => clearInterval(interval);
    }
  }, [provider, account, chainId]);

  const handleBalance = () => {
    provider
      .getBalance(account)
      .then((balance) => {
        let value = parseFloat(formatEther(balance));
        setEthBalance(value);
        // dispatch(
        //   setAccountDetails({
        //     address: account,
        //     networkId: chainId,
        //     balance: {
        //       full: value.toString(),
        //       deci: value.toPrecision(4),
        //     },
        //   })
        // );
      })
      .catch(() => {
        setEthBalance(null);
      });
  };

  return { balance: ethBalance };
};

export default useGetBalance;
