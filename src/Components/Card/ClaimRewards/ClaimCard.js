import React, { useState, useEffect } from "react";

function ClaimCard(props) {
  return (
    <div className="py-6 px-5 bg-[#29292b] rounded-xl shadow-[0_2px_4px_0_#010304] w-full">
      <div className="CCIS Price">
        <p className="text-base color:#000002 text">{props.value.title}</p>
        <p className="font-semibold text-xl text-white">Comigng Soon</p>
      </div>
    </div>
  );
}

export default ClaimCard;
