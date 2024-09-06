import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";

import Header from "./components/Header";
import Footer from "./components/Footer";
import SummaryApi from "./common";
import Context from "./context";
import { setUserDetails } from "./store/userSlice";

const App = () => {
  const [cartProductCount, setCartProductCount] = useState(0);

  const dispatch = useDispatch();
  const fetchUserDetails = async () => {
    const dataResponse = await fetch(SummaryApi.current_user.url, {
      method: SummaryApi.current_user.method,
      credentials: "include",
    });

    const dataApi = await dataResponse.json();

    if (dataApi.success) {
      dispatch(setUserDetails(dataApi.data));
    }
  };

  const fetchUserAddToCart = async () => {
    const dataResponse = await fetch(SummaryApi.addToCart_product_count.url, {
      method: SummaryApi.addToCart_product_count.method,
      credentials: "include",
    });

    const dataApi = await dataResponse.json();

    setCartProductCount(dataApi?.data?.count);
  };

  useEffect(() => {
    // user details
    fetchUserDetails();

    // user add to cart
    fetchUserAddToCart();
  }, []);
  return (
    <>
      <Context.Provider
        value={{
          fetchUserDetails, //user details fetch
          cartProductCount, // current user add to cart product count
          fetchUserAddToCart,
        }}
      >
        <ToastContainer className="mt-10" />
        <Header />
        <main className="min-h-[calc(100vh-120px)] mx-16 pt-16">
          <Outlet />
        </main>{" "}
        <Footer />
      </Context.Provider>
    </>
  );
};

export default App;
