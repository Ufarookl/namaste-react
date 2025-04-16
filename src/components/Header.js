import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Hooks/useOnlineStatus";
import UserContext from "../Hooks/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-orange-500 shadow-lg">
      <div className="logo-container">
        <Link to="/">
          <img
            className="w-[110px] cursor-pointer"
            src={LOGO_URL}
            alt="Food Logo"
          ></img>
        </Link>
      </div>
      <div className="flex items-center justify-between">
        <ul className="flex m-[15px] p-[15px] list-none ">
          <li className="px-[10px]">
            Online Status :{onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-[10px] cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="px-[10px] cursor-pointer">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-[10px] cursor-pointer">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-[15px] cursor-pointer font-bold">
            <Link to="/cart"> Cart ({cartItems.length})</Link>
          </li>
          <button
            className="log-btn cursor-pointer"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-[15px] font-bold  text-red-800 ">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
