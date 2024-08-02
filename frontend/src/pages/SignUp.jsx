import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import loginIcons from "@/assets/signin.gif";
import imageTobase64 from "@/helpers/imageTobase64";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePic: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleUpLoadPic = async (e) => {
    const file = e.target.files[0];

    const imagePic = await imageTobase64(file);
    setData((prev) => {
      return {
        ...prev,
        profilePic: imagePic,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section id="login">
      <div className=" container mx-auto p-4">
        <div className="bg-white  p-5 w-full max-w-sm mx-auto  ">
          <div className="w-20 h-20 mx-auto relative overflow-hidden rounded-full ">
            <div>
              <img src={data.profilePic || loginIcons} alt="login icons" />
            </div>
            <label>
              <div className="text-xs bg-opacity-80 bg-slate-200 pt-2 pb-4 text-center absolute bottom-0 w-full cursor-pointer">
                Upload photo
              </div>
              <input
                type="file"
                className="hidden"
                onChange={handleUpLoadPic}
              />
            </label>
          </div>
          <form className="pt-6 flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className=" grid">
              <label>Name:</label>
              <div className="bg-slate-100 p-2">
                <input
                  value={data.name}
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full h-full outline-none bg-transparent"
                  required
                  onChange={handleOnChange}
                />
              </div>
            </div>
            <div className=" grid">
              <label>Email:</label>
              <div className="bg-slate-100 p-2">
                <input
                  value={data.email}
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full h-full outline-none bg-transparent"
                  required
                  onChange={handleOnChange}
                />
              </div>
            </div>
            <div>
              <label>Password:</label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  value={data.password}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="w-full h-full outline-none bg-transparent"
                  required
                  onChange={handleOnChange}
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
            <div>
              <label>Confirm Password:</label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  value={data.confirmPassword}
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Enter your confirm password"
                  className="w-full h-full outline-none bg-transparent"
                  required
                  onChange={handleOnChange}
                />
                <div
                  className="cursor-pointer text-lg"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                >
                  <span>
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6">
              Login
            </button>
          </form>
          <p className="my-5">
            Already have account ?{" "}
            <Link
              to={"/login"}
              className="text-red-600 hover:text-red-700 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
