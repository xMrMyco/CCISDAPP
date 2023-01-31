import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider
} from "@web3modal/ethereum";

import { Web3Modal } from "@web3modal/react";

import { configureChains, createClient, WagmiConfig } from "wagmi";

import { bsc, mainnet, polygon } from "wagmi/chains";

import { Web3Button } from "@web3modal/react";

function Header(props) {
  const chains = [bsc, mainnet, polygon];

  // Wagmi client
  const { provider } = configureChains(chains, [
    walletConnectProvider({ projectId: "b1f3788b6c78c0b8dec32b12cdac182c" })
  ]);
  const wagmiClient = createClient({
    autoConnect: false,
    connectors: modalConnectors({ appName: "web3Modal", chains }),
    provider
  });

  // Web3Modal Ethereum Client
  const ethereumClient = new EthereumClient(wagmiClient, chains);

  // State to check if user is connected to Metamask
  const [isConnected, setIsConnected] = useState(false);

  // Function to update the state when the connection is made
  const onConnect = async () => {
    await wagmiClient.connect();
    setIsConnected(true);
  };

  return (
    <div className="z-10 flex items-center h-20 mb-5 shadow-2xl lg:shadow-none px-7">
      <div className="flex items-center lg:hidden">
        <GiHamburgerMenu
          size={30}
          color="#e69c3c"
          onClick={() => props.setisOpen(!props.isOpen)}
        />
        <img
          alt="sd"
          src={"/logo.png"}
          height="auto"
          width="80px"
          className="ml-5"
        ></img>
      </div>
      <div className="flex-1"></div>
      <div>
        {!isConnected && (
          <WagmiConfig client={wagmiClient}>
            <Web3Button onConnect={onConnect} />
          </WagmiConfig>
        )}
        {isConnected && <p>Connected to Metamask</p>}

        <Web3Modal
          projectId="b1f3788b6c78c0b8dec32b12cdac182c"
          ethereumClient={ethereumClient}
        />
      </div>
    </div>
  );
}

export default Header;
