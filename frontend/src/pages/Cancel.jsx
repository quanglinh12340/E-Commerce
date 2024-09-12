import React from "react";
import cancel from "@/assets/cancel.jpg";
import { Link } from "react-router-dom";
const Cancel = () => {
  return (
    <div className=" w-full max-w-md mx-auto flex justify-center items-center flex-col p-4 rounded ">
      <img src={cancel} width={150} height={150} />
      <p className="text-[#db4444] font-bold text-xl mt-5"> Payment Cancel</p>
      <Link
        to={"/cart"}
        className="bg-[#db4444] text-white py-5 px-12 hover:bg-[#ac1515] rounded-md mt-5"
      >
        Go to Cart
      </Link>
    </div>
  );
};

export default Cancel;
