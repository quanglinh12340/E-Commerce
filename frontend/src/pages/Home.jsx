import React from "react";
import BannerProduct from "@/components/BannerProduct";
import CategoryList from "@/components/CategoryList";
import HorizontalCardProduct from "@/components/HorizontalCardProduct";
import NewsLetter from "@/components/NewsLetter";
import Feature from "@/components/Feature";
import CategorySale from "@/components/CategorySale";

const Home = () => {
  return (
    <div>
      <CategoryList />
      <BannerProduct />
      <Feature />
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
      <CategorySale />
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
      <NewsLetter />
    </div>
  );
};

export default Home;
