import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { WagmiConfig, createClient, configureChains } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc"; // For custom RPC
import { BrowserRouter } from "react-router-dom";

const GANACHE_CHAIN_ID = 5777;

const { chains, provider, webSocketProvider } = configureChains(
  [
    {
      id: GANACHE_CHAIN_ID,
      name: "Ganache",
      network: "ganache",
      nativeCurrency: {
        name: "Ether",
        symbol: "ETH",
        decimals: 18,
      },
      rpcUrls: {
        default: "http://127.0.0.1:7545", // Ganache default RPC
      },
      testnet: true,
    },
  ],
  [
    jsonRpcProvider({
      rpc: () => ({ http: "http://127.0.0.1:7545" }),
    }),
  ]
);

const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <WagmiConfig client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </WagmiConfig>
);
