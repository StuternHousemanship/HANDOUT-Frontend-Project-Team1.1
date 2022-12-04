import React from "react";
import ProductItem from "../components/productItem/ProductItem";
import ItemCategories from "../components/ItemCategories";
import UserHeader from "../components/header/UserHeader";

function BrowseItems() {
  return (
    <div className="">
      <UserHeader />
      <br />
      <br />
      <br />
      <div className=" ">
        <ItemCategories />
      </div>
      <div className="  mt-[12px] flex flex-col justify-center items-center w-[100%] h-auto">
        <div className="  mt-[12px] justify-center items-center w-[80%] h-auto overflow-hidden">
          <div className=" flex justify-center w-full h-auto  ">
            <ProductItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrowseItems;
