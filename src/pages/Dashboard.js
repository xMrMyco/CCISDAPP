import React from "react";
import CCISCard from "../Components/Card/CCISCard";
import CCISMarketCap from "../Components/Card/CCISMarketCap";

function Dashboard() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-wrap text-white mx-2">
          {DashboardData.map((data, key) => (
            <div key={key} className="w-full px-2 mb-6 sm:w-1/2 md:w-1/3">
              <CCISCard value={data} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-wrap text-white mx-2">
          {MarketpriceData.map((data, key) => (
            <div key={key} className="w-full px-2 mb-6 sm:w-1/2 md:w-1/3">
              <CCISMarketCap value={data} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

const DashboardData = [{ title: "CCIS Price" }];
const MarketpriceData = [{ title: "Market Cap" }];
// { title: "Market Cap" },
//{ title: "Circulating Supply" },
//{ title: "Total Dividend Distribute" },
//{ title: "Next Rebase" },
//{ title: "Total Supply" },
//{ title: "Market Value of Treasury Asset" },
//{ title: "Pool Value" },
//{ title: "EverSAFU Dividend Fund Value" },
//{ title: "# Value of FirePit" },
//{ title: "Value of FirePit" },
//{ title: "% FirePit : Supply" }
//
export default Dashboard;
