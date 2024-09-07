import SummaryApi from "@/common";
import Context from "@/context";
import displayINRCurrency from "@/helpers/displayCurrency";
import React, { useContext, useEffect, useState } from "react";
import { BsCartXFill } from "react-icons/bs";
import { CiCircleRemove } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import "@/assets/css/Cart.css";

const Cart = () => {
  const [data, setData] = useState([]);
  console.log("🚀 ~ Cart ~ data:", data);

  const context = useContext(Context);

  const fetchData = async () => {
    const fetchResponse = await fetch(SummaryApi.addToCart_product_view.url, {
      method: SummaryApi.addToCart_product_view.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
    });

    const dataResponse = await fetchResponse.json();

    if (dataResponse.success) {
      setData(dataResponse.data);
    }
  };

  const increaseQuantity = async (id, qty) => {
    const response = await fetch(SummaryApi.updateCart_product.url, {
      method: SummaryApi.updateCart_product.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        _id: id,
        quantity: qty + 1,
      }),
    });

    const responseData = await response.json();

    if (responseData.success) {
      fetchData();
    }
  };

  const decreaseQuantity = async (id, qty) => {
    if (qty >= 2) {
      const response = await fetch(SummaryApi.updateCart_product.url, {
        method: SummaryApi.updateCart_product.method,
        credentials: "include",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          _id: id,
          quantity: qty - 1,
        }),
      });

      const responseData = await response.json();

      if (responseData.success) {
        fetchData();
      }
    }
  };

  const deleteCartProduct = async (id) => {
    const response = await fetch(SummaryApi.deleteCart_product.url, {
      method: SummaryApi.deleteCart_product.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        _id: id,
      }),
    });
    const responseData = await response.json();

    if (responseData.success) {
      fetchData();
      context.fetchUserAddToCart();
    }
  };

  const totalQuantity = data.reduce(
    (prevValue, currValue) => prevValue + currValue.quantity,
    0
  );
  const totalPrice = data.reduce(
    (prev, curr) => prev + curr.quantity * curr?.productId?.sellingPrice,
    0
  );

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container ">
      {data.length === 0 ? (
        <div className=" text-center text-lg mt-16 ">
          <div>
            <BsCartXFill className="w-full text-6xl  text-red-400  mb-6" />
            <p className=" mb-10">There are no products in the cart</p>
            <Link
              to={"/"}
              className="bg-[#db4444] text-white py-5 px-12 hover:bg-[#ac1515] w-1/5"
            >
              Back to Home
            </Link>
          </div>
        </div>
      ) : (
        <div className="cart my-9">
          <div className="cart-full ">
            <h1>Shopping Card</h1>
            <div className="cart-title">
              <h3>Products</h3>
              <h3>Price</h3>
              <h3>Quantity</h3>
              <h3>Sub-Total</h3>
            </div>
            <div className="overflow-y-scroll">
              {data.map((product, index) => {
                return (
                  <div key={index} className="cart-items">
                    <div className="cart-product">
                      <button
                        className="btn-del"
                        onClick={() => deleteCartProduct(product?._id)}
                      >
                        <CiCircleRemove />
                      </button>
                      <img src={product?.productId.productImage[0]} alt="" />
                      <p>{product?.productId?.productName}</p>
                    </div>
                    <div className="cart-price">
                      <span>
                        {displayINRCurrency(product?.productId?.sellingPrice)}
                      </span>
                    </div>
                    <div className="cart-quantity">
                      <button
                        onClick={() =>
                          decreaseQuantity(product?._id, product?.quantity)
                        }
                      >
                        -
                      </button>
                      <h2> {product?.quantity}</h2>
                      <button
                        onClick={() =>
                          increaseQuantity(product?._id, product?.quantity)
                        }
                      >
                        +
                      </button>
                    </div>
                    <div className="cart-total">
                      <span>
                        {" "}
                        {displayINRCurrency(
                          product?.productId?.sellingPrice * product?.quantity
                        )}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="right">
            <div className="cart-total">
              <h3>Card Totals</h3>
              <div className="total">
                <div className="content">
                  <div className="sub-total">
                    <p>Sub-total</p>
                    <span>{displayINRCurrency(totalPrice)}</span>
                  </div>

                  <div className="Quantity">
                    <p>Quantity</p>
                    <span>{totalQuantity}</span>
                  </div>
                  <div className="final-total">
                    <p>Total</p>
                    <span>{displayINRCurrency(totalPrice)}</span>
                  </div>
                  <button
                    type="button"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    PROCEED TO CHECKOUT
                  </button>
                </div>
              </div>
            </div>
            <div className="coupone-Code">
              <form className="max-w-sm mx-auto">
                <div className="mb-5">
                  <label
                    form="Coupon Code"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Coupon Code
                  </label>
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    className="mt-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    APPLY COUPON
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
