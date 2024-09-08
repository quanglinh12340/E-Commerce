import React from "react";
import BannerProduct from "@/components/BannerProduct";
import CategoryList from "@/components/CategoryList";
import HorizontalCardProduct from "@/components/HorizontalCardProduct";
import NewsLetter from "@/components/NewsLetter";
import Feature from "@/components/Feature";
import CategorySale from "@/components/CategorySale";
import BannerSale from "@/components/BannerSale";

const Home = () => {
  return (
    <div>
      <CategoryList />
      <BannerProduct />
      <Feature />
      <HorizontalCardProduct category={"airpodes"} heading={"Top's Airpodes"} />
      <HorizontalCardProduct
        category={"earphones"}
        heading={"Popular's Earphones"}
      />
      <HorizontalCardProduct category={"Mouse"} heading={"Top's Mouse"} />

      <CategorySale />
      <HorizontalCardProduct
        category={"printers"}
        heading={"Popular's Printers"}
      />
      <HorizontalCardProduct
        category={"processor"}
        heading={"Top's Processor"}
      />
      <HorizontalCardProduct
        category={"earphones"}
        heading={"Popular's Watches"}
      />
      <BannerSale />
      <NewsLetter />
    </div>
  );
};

export default Home;
