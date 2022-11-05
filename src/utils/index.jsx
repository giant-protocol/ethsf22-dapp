import { metaMask } from "../connectors/Metamask";

export function getTransactionReceiptMined(txHash, library, interval) {
  const transactionReceiptAsync = (resolve, reject) => {
    library
      .getTransactionReceipt(txHash)
      .then((receipt) => {
        if (receipt == null) {
          setTimeout(
            () => transactionReceiptAsync(resolve, reject),
            interval ? interval : 500
          );
        } else {
          resolve(receipt);
        }
      })
      .catch((e) => {
        console.log("Error getting transaction receipt--->", e);
      });
  };

  if (Array.isArray(txHash)) {
    return Promise.all(
      txHash.map((oneTxHash) =>
        getTransactionReceiptMined(oneTxHash, library, interval)
      )
    );
  } else if (typeof txHash === "string") {
    return new Promise(transactionReceiptAsync);
  } else {
    throw new Error("Invalid Type: " + txHash);
  }
}

export const handleConnect = () => {
  if (window && window?.ethereum) {
    metaMask.activate();
    localStorage.setItem("isConnected", true);
  } else {
    window.open("https://metamask.io/");
  }
};
