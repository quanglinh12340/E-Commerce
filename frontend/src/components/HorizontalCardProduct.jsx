import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

import fetchCategoryWiseProduct from "@/helpers/fetchCategoryWiseProduct";
import displayINRCurrency from "@/helpers/displayCurrency";
import "@/assets/css/HorizontalCardProduct.css";
import addToCart from "@/helpers/addToCart";
import renderStars from "@/helpers/renderStars";
const HorizontalCardProduct = ({ category, heading }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const categoryProduct = await fetchCategoryWiseProduct(category);
    setData(categoryProduct?.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h2 className="text-2xl font-semibold py-4">{heading}</h2>
      <div className="flex justify-between ">
        {data.slice(0, 4).map((product, index) => {
          return (
            <Link to={"product/" + product?._id} key={index} id="product1">
              <div className="pro-container">
                <div className="pro">
                  <img src={product.productImage[0]} alt="" />
                  <div className="des">
                    <h5>{product?.productName}</h5>
                    <span>{product?.category}</span>
                    <div className="star">{renderStars()}</div>
                    <h4>{displayINRCurrency(product?.price)}</h4>
                  </div>
                  <button className="cart">
                    <FaCartPlus
                      className="cart-plus"
                      onClick={(e) => addToCart(e, product?._id)}
                    />
                  </button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="w-full text-center mt-8">
        <button className="bg-[#db4444] text-white py-5 px-12 hover:bg-[#ac1515]">
          View All Product
        </button>
      </div>
    </>
  );
};

HorizontalCardProduct.propTypes = {
  category: PropTypes.string,
  heading: PropTypes.string,
};

export default HorizontalCardProduct;
