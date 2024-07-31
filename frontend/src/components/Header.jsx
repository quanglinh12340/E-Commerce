import React from "react";
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="h-16 shadow-md bg-white">
      <div className="container h-full mx-auto flex items-center px-10 justify-between">
        <div className="">
          <Link to={"/"}>
            <img className="w-24 h-24" src={logo} alt="" />
          </Link>{" "}
        </div>
        <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2">
          <input
            className="w-full outline-none "
            type="text"
            placeholder="Search product here...."
          />
          <div className="text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white">
            <GrSearch />
          </div>
        </div>
        <div className="flex items-center gap-7">
          <div className="text-3xl cursor-pointer">
            <FaRegCircleUser />
          </div>{" "}
          <div className="text-2xl relative">
            <span>
              <FaShoppingCart />
            </span>
            <div className="bg-red-600 text-white w-5 h-5 p-1  rounded-full flex items-center justify-center absolute -top-2 -right-3">
              <p className="text-sm">0</p>
            </div>
          </div>
          <div>
            <Link
              to={"/login"}
              className="px-3 py-1 rounded-full bg-red-600 text-white hover:bg-red-700"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
