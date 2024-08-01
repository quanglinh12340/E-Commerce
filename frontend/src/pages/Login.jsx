import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import loginIcons from "@/assets/signin.gif";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section id="login">
      <div className=" container mx-auto p-4">
        <div className="bg-white p-2 py-5 w-full max-w-md mx-auto">
          <div className="w-20 h-20 mx-auto">
            <img src={loginIcons} alt="login icons" />
          </div>
          <form>
            <div className=" grid">
              <label>Email:</label>
              <div className="bg-slate-100 p-2">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>
            <div>
              <label>Password:</label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  className="w-full h-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-lg"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
              <Link
                to={"/forgot-password"}
                className="block w-fit ml-auto hover:underline hover:text-red-600"
              >
                Forgot Password
              </Link>
            </div>
            <button className="bg-red-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6">
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
