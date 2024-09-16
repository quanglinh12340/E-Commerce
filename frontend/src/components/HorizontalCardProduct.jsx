import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

import fetchCategoryWiseProduct from "@/helpers/fetchCategoryWiseProduct";
import displayINRCurrency from "@/helpers/displayCurrency";
import "@/assets/css/HorizontalCardProduct.css";
import addToCart from "@/helpers/addToCart";
import renderStars from "@/helpers/renderStars";
import Context from "@/context";
const HorizontalCardProduct = ({ category, heading }) => {
  const [data, setData] = useState([]);

  const { fetchUserAddToCart } = useContext(Context);

  const handleAddToCart = async (e, id) => {
    await addToCart(e, id);
    fetchUserAddToCart();
  };

  const fetchData = async () => {
    const categoryProduct = await fetchCategoryWiseProduct(category);
    setData(categoryProduct?.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h2 className="text-2xl font-semibold py-4 ml-10 ">{heading}</h2>
      <div className="horizontal-card-product flex justify-between ml-10 ">
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
                    <p className="text-slate-400 line-through">
                      {displayINRCurrency(product?.price)}
                    </p>
                    <h4>{displayINRCurrency(product?.sellingPrice)}</h4>
                  </div>
                  <button
                    className="cart"
                    onClick={(e) => handleAddToCart(e, product?._id)}
                  >
                    <FaCartPlus className="cart-plus" />
                  </button>
                </div>
              </div>
              {index === 1 && (
                <div className=" max-w-[1400px]">
                  <div className=" text-end my-16 w-[115%]">
                    <Link
                      to={"/product-category?category=" + product?.category}
                      className="bg-[#db4444] text-white py-5 px-12 hover:bg-[#ac1515]"
                    >
                      View All Product
                    </Link>
                  </div>
                </div>
              )}
            </Link>
          );
        })}
      </div>
    </>
  );
};

HorizontalCardProduct.propTypes = {
  category: PropTypes.string,
  heading: PropTypes.string,
};

export default HorizontalCardProduct;
