import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-300 shadow-lg">
      <div className="logo-container">
        <Link to="/">
          <img className="w-[110px]" src={LOGO_URL} alt="Food Logo"></img>
        </Link>
      </div>
      <div className="flex items-center justify-between">
        <ul className="flex m-[15px] p-[15px] list-none ">
          <li className="px-[10px]">
            Online Status :{onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-[10px]">
            <Link to="/">Home</Link>
          </li>
          <li className="px-[10px]">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-[10px]">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-[15px]">Cart</li>
          <button
            className="log-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
