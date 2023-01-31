import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import NFTEarn from "../pages/NFTEarn";
import ClaimReward from "../pages/ClaimReward";
import Dashboard from "../pages/Dashboard";
import Staking from "../pages/Staking";
import Swap from "../pages/Swap";

function Layout() {
  const [isOpen, setisOpen] = React.useState(false);
  return (
    <>
      <div className="flex h-screen bg-[#202021] relative">
        <SideBar isOpen={isOpen} setisOpen={setisOpen} />
        <div className="flex-1 overflow-auto mt-7 ">
          <Header setisOpen={setisOpen} isOpen={isOpen} />
          <div className="mx-auto my-0 lg:max-w-7xl">
            <Routes>
              <Route excat path="/" element={<Dashboard />} />
              <Route path="/claim-reward" element={<ClaimReward />} />
              <Route path="/Staking" element={<Staking />} />
              <Route path="/nftearn" element={<NFTEarn />} />
              <Route path="/swap" element={<Swap />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
