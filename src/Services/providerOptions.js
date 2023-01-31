import WalletConnect from "@walletconnect/web3-provider";
import { Binance } from "@binance-chain/javascript-sdk";

export const providerOptions = {
  walletconnect: {
    package: WalletConnect, // required
    options: {
      infuraId: "8043bb2cf99347b1bfadfb233c5325c0" // required
    }
  },
  binance: {
    package: Binance,
    options: {
      network: "smart_chain",
      chainId: 56,
      rpcUrl: "https://bsc-dataseed.binance.org/"
    }
  }
};
