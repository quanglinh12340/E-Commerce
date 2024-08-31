import React from "react";
import BannerProduct from "@/components/BannerProduct";
import CategoryList from "@/components/CategoryList";
import HorizontalCardProduct from "@/components/HorizontalCardProduct";

const Home = () => {
  return (
    <div>
      <CategoryList />
      <BannerProduct />
      <HorizontalCardProduct category={"airpodes"} heading={"Top's Airpodes"} />
      <HorizontalCardProduct
        category={"earphones"}
        heading={"Popular's Watches"}
      />
      <HorizontalCardProduct category={"airpodes"} heading={"Top's Airpodes"} />
      <HorizontalCardProduct
        category={"earphones"}
        heading={"Popular's Watches"}
      />
      <HorizontalCardProduct category={"airpodes"} heading={"Top's Airpodes"} />
      <HorizontalCardProduct
        category={"earphones"}
        heading={"Popular's Watches"}
      />
      <HorizontalCardProduct category={"airpodes"} heading={"Top's Airpodes"} />
      <HorizontalCardProduct
        category={"earphones"}
        heading={"Popular's Watches"}
      />
      <HorizontalCardProduct category={"airpodes"} heading={"Top's Airpodes"} />
      <HorizontalCardProduct
        category={"earphones"}
        heading={"Popular's Watches"}
      />
    </div>
  );
};

export default Home;
