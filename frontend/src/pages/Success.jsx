import React from "react";
import success from "@/assets/success.jpg";
import { Link } from "react-router-dom";
const Success = () => {
  return (
    <div className=" w-full max-w-md mx-auto flex justify-center items-center flex-col p-4 rounded ">
      <img src={success} width={150} height={150} />
      <p className="text-green-600 font-bold text-xl mt-10">
        {" "}
        Payment Successfully
      </p>
      <Link
        to={"/order"}
        className="p-3 m-5 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
      >
        See Order
      </Link>
    </div>
  );
};

export default Success;
