import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BiHome, BiDollarCircle, BiAtom } from "react-icons/bi";
import { ImStack } from "react-icons/im";
import { BsLightningChargeFill } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
function SideBar(props) {
  let location = useLocation();

  return (
    <div
      className={`absolute ${
        props.isOpen ? "block" : "hidden"
      } lg:relative bottom-0 top-0 left-0 right-0 w-full z-10 lg:w-60 lg:block bg-[#202021]`}
    >
      <div className="mt-5 ml-5 lg:hidden">
        <CgClose
          size={30}
          color={"#9945ff"}
          onClick={() => props.setisOpen(!props.isOpen)}
        />
      </div>
      <div className="flex justify-center lg:relative mt-10 mb-12">
        <img className="w-auto" src={"/logo.png"} alt="logo"></img>
      </div>
      <div>
        <ul className="flex flex-col justify-center">
          {NavData.map((data, key) => (
            <li
              key={key}
              onClick={() => props.setisOpen(false)}
              className={`${
                location.pathname === data.href
                  ? "text-[#03ff74]"
                  : "text-white"
              } py-2.5 font-semibold text-lg flex items-center justify-center hover:text-[#03ff74]`}
            >
              <span className="">{data.icon}</span>
              <Link
                // activeClassName=""
                className="ml-2.5 "
                to={data.href}
              >
                {data.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const NavData = [
  { icon: <BiHome />, href: "/", title: "Dashboard" },
  { icon: <BiDollarCircle />, href: "/claim-reward", title: "Claim Reward" },
  {
    icon: <BiAtom />,
    href: "/Staking",
    title: "Staking"
  },
  { icon: <ImStack />, href: "/nftearn", title: "NFT Earn(Coming soon)" },
  { icon: <BsLightningChargeFill />, href: "/swap", title: "Swap" }
];
export default SideBar;
