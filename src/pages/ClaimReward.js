import React from "react";
import ClaimCard from "../Components/Card/ClaimRewards/ClaimCard";

function ClaimReward() {
  return (
    <div>
      <div className="flex flex-col md:flex-wrap text-white md:flex-row">
        {ClaimRewardData.map((data, key) => (
          <div key={key} className="px-2 mb-6 md:w-1/4">
            <ClaimCard value={data} />
          </div>
        ))}
      </div>

      <div className="w-full px-2">
        <div className="bg-[#29292b] rounded-xl shadow-[0_2px_4px_0_#010304] px-5 py-4">
          {ClaimData.map((data, key) => (
            <div key={key} className="flex justify-between text-white mb-4">
              <p>{data.title}</p>
              <p className="text-base font-semibold text-white">1234</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const ClaimRewardData = [
  // { title: "Your Balance" },
  // { title: "FirePit" },
  // { title: "BUSD Balance" },
  { title: "Reward Not Claim" }
];
const BUSDBalanceData = [{ title: "BUSD Balance" }];
const ClaimData = [{ title: "Current ChefCheemsInuSlap Price" }];
//  { title: "Next Reward Amount" },
//  { title: "Next Reward Amount USD" },
//  { title: "Next Reward Yield" },
//  { title: "ROI(1-Day Rate) USD" },
//  { title: "ROI(5-Day Rate)" },
//  { title: "ROI(5-Day Rate) USD" }
//];

export default ClaimReward;
