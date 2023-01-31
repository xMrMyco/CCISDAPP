import React, { useState, useEffect } from "react";

function CCISCard(props) {
  const [price, setPrice] = useState(3.5003);

  // async function LoadPriceTag() {
  //   const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd");
  //   const data = await response.json();
  //   setPrice(data.binancecoin.usd);
  //}

  //  useEffect(() => {
  //    LoadPriceTag();
  //  }, []);

  return (
    <div className="py-6 px-5 bg-[#29292b] rounded-xl shadow-[0_2px_4px_0_#010304] w-full">
      <div className="CCIS Price">
        <p className="text-base text">{props.value.title}</p>
        <p className="font-semibold text-xl text-white">Coming Soon</p>
      </div>
    </div>
  );
}

export default CCISCard;
