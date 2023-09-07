/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import "./ProductItem.css";
import Grid from "@mui/material/Grid";
import { ReactComponent as LoadingIcon } from "../../assets/svg/loading-light-icon.svg";
import product1 from "../../assets/img/Products/product1.png";
import product2 from "../../assets/img/Products/product2.png";
import product3 from "../../assets/img/Products/product3.png";
import product4 from "../../assets/img/Products/product4.png";
import product5 from "../../assets/img/Products/product5.png";
import product6 from "../../assets/img/Products/product6.png";
import product7 from "../../assets/img/Products/product7.png";
import product8 from "../../assets/img/Products/product8.png";
import product9 from "../../assets/img/Products/product9.png";
import product10 from "../../assets/img/Products/product10.png";
import product11 from "../../assets/img/Products/product11.png";
import product12 from "../../assets/img/Products/product12.png";
import dropdown from "../../assets/svg/dropdown.svg";
import SingleProduct from "./SingleProduct";

function ProductItem() {
  const [allItems, setAllItems] = useState([]);
  const [visible, setVisible] = useState(3);
  const [buttonIsLoading, setButtonIsLoading] = useState(false);
  // const [textTooLong, setTextTooLong] = useState(true);
  const [toggleTab, setToggleTab] = useState(1);
  // const navigate = useNavigate();

  const toggleView = (tab) => {
    setToggleTab(tab);
  };
  const products = [
    {
      id: 1,
      name: "WristWatch",
      href: "#",
      imageSrc: product1,
      imageAlt: "wrist watch",
      price: "$39.84",
      text: "Id massa diam massa tellus vitae massa suscipit tinciunt. Vitae et proin diam tortor eget suspendisse. ",
    },
    {
      id: 2,
      name: "Sandal",
      href: "#",
      imageSrc: product2,
      imageAlt: "sandal",
      price: "$39.84",
      text: "Id massa diam massa tellus vitae massa suscipit tinciunt. Vitae et proin diam tortor eget suspendisse. ",
    },
    {
      id: 3,
      name: "Sunglasses",
      href: "#",
      imageSrc: product3,
      imageAlt: "sunglass",
      price: "$39.84",
      text: "Id massa diam massa tellus vitae massa suscipit tinciunt. Vitae et proin diam tortor eget suspendisse. ",
    },
    {
      id: 4,
      name: "JBL Headset",
      href: "#",
      imageSrc: product4,
      imageAlt: "headset",
      price: "$39.84",
      text: "Id massa diam massa tellus vitae massa suscipit tinciunt. Vitae et proin diam tortor eget suspendisse. ",
    },
    {
      id: 5,
      name: "Earbuds",
      href: "#",
      imageSrc: product5,
      imageAlt: "Earbud",
      price: "$39.84",
      text: "Id massa diam massa tellus vitae massa suscipit tinciunt. Vitae et proin diam tortor eget suspendisse. ",
    },
    {
      id: 6,
      name: "Polaroid Camera",
      href: "#",
      imageSrc: product6,
      imageAlt: "Camera",
      price: "$39.84",
      text: "Id massa diam massa tellus vitae massa suscipit tinciunt. Vitae et proin diam tortor eget suspendisse. ",
    },
    {
      id: 7,
      name: "Classic Seiko timepiece",
      href: "#",
      imageSrc: product7,
      imageAlt: "classic wrist watch",
      price: "$39.84",
      text: "Id massa diam massa tellus vitae massa suscipit tinciunt. Vitae et proin diam tortor eget suspendisse. ",
    },
    {
      id: 8,
      name: "Sun Boots",
      href: "#",
      imageSrc: product8,
      imageAlt: "boot",
      price: "$39.84",
      text: "Id massa diam massa tellus vitae massa suscipit tinciunt. Vitae et proin diam tortor eget suspendisse. ",
    },
    {
      id: 9,
      name: "Nike Sneakers",
      href: "#",
      imageSrc: product9,
      imageAlt: "Nike",
      price: "$39.84",
      text: "Id massa diam massa tellus vitae massa suscipit tinciunt. Vitae et proin diam tortor eget suspendisse.",
    },
    {
      id: 10,
      name: "Sony A7III",
      href: "#",
      imageSrc: product10,
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$2900",
      text: "Id massa diam massa tellus vitae massa suscipit tinciunt. Vitae et proin diam tortor eget suspendisse. ",
    },
    {
      id: 11,
      name: "Canon r5",
      href: "#",
      imageSrc: product11,
      imageAlt: "Camera",
      price: "$3900",
      text: "Id massa diam massa tellus vitae massa suscipit tinciunt. Vitae et proin diam tortor eget suspendisse. ",
    },
    {
      id: 12,
      name: "Curabitur backpack",
      href: "#",
      imageSrc: product12,
      imageAlt: "bag pack.",
      price: "$39.84",
      text: "Id massa diam massa tellus vitae massa suscipit tinciunt. Vitae et proin diam tortor eget suspendisse. ",
    },
  ];
  /** Function to get all items and store them in a state */
  const allData = () => setAllItems(products);

  /** Function to load more images */
  const loadMore = () => {
    setVisible(visible + 4);
    setButtonIsLoading(true);
  };
  useEffect(() => allData(), []);

  return (
    <div>
      <div className="shadow-sm flex justify-between font-[500] font-Raleway sm:text-[12px] xs:text-[10px]  text-[#141414] align-center w-[100%] h-auto py-[12px] ">
        <div className=" pl-[20px] ">
          <button
            type="button"
            onClick={() => toggleView(1)}
            className={
              toggleTab === 1
                ? "lg:mr-[110px] md:mr-[60px] sm:mr-[20px] xs:mr-[10px] active-tab p-2 "
                : "lg:mr-[110px] md:mr-[60px] sm:mr-[20px] xs:mr-[10px] text-[#949292] p-2"
            }
          >
            All Products
          </button>
          <button
            type="button"
            onClick={() => toggleView(2)}
            className={
              toggleTab === 2
                ? "lg:mr-[110px] md:mr-[60px] sm:mr-[20px] xs:mr-[10px] active-tab p-2"
                : "lg:mr-[110px] md:mr-[60px] sm:mr-[20px] xs:mr-[10px] text-[#949292] p-2"
            }
          >
            Free
          </button>
          <button
            type="button"
            onClick={() => toggleView(3)}
            className={
              toggleTab === 3
                ? "lg:mr-[110px] md:mr-[60px] sm:mr-[20px] xs:mr-[10px] active-tab p-2"
                : "lg:mr-[110px] md:mr-[60px] sm:mr-[20px] xs:mr-[10px] text-[#949292] p-2"
            }
          >
            New In
          </button>
          <button
            type="button"
            onClick={() => toggleView(4)}
            className={
              toggleTab === 4
                ? "lg:mr-[110px] md:mr-[60px] sm:mr-[20px] xs:mr-[10px] active-tab p-2"
                : "lg:mr-[110px] md:mr-[60px] sm:mr-[20px] xs:mr-[10px] text-[#949292] p-2"
            }
          >
            Sales
          </button>
        </div>
        <div className="flex font-Raleway sm:text-[12px] xs:text-[10px] items-center justify-center ">
          <div
            className={
              allItems.length >= 1 && toggleTab === 1 ? "flex" : "hidden"
            }
          >
            <p>
              {allItems.length > visible
                ? `Showing 1-${visible} of ${allItems.length}
              results`
                : `Showing 1-${allItems.length} of ${allItems.length}
              results`}
            </p>
          </div>
          <div className={allItems.length === 0 ? "flex" : "hidden"}>
            <p>No items to display</p>
          </div>
          <div className="bg-[#EAEDF2] cursor-pointer flex justify-center items-center w-[110px] h-[40px] rounded-[12px] text-[#141414] sm:ml-[30px] xs:ml-[15px] ">
            <p className="font-[500] ">Date Added</p>
            <span>
              <img alt="dropdown icon" src={dropdown} />{" "}
            </span>
          </div>
        </div>
      </div>
      <div className={toggleTab === 1 ? "mt-[20px] block" : "hidden"}>
        <Grid
          container
          justify="center"
          rowSpacing={5}
          columnSpacing={3}
          className="flex justify-center items-center"
        >
          {allItems.slice(0, visible).map((product) => (
            <SingleProduct product={product} />
          ))}
        </Grid>
        {visible < allItems.length ? (
          <div className="flex items-center justify-center">
            <button
              type="button"
              className="mt-[24px] font-Raleway text-[18px] font-[700] w-[220px] h-[50px] rounded-[4px] text-center bg-[#077369] text-white "
              onClick={loadMore}
            >
              {buttonIsLoading ? (
                <span className="flex items-center justify-center">
                  <LoadingIcon className="suspense-loading-icon mr-4" />
                  Load more
                </span>
              ) : (
                <p>Load more</p>
              )}
            </button>
          </div>
        ) : (
          <p className="mt-[24px] font-Raleway text-[14px] font-[500]  rounded-[4px] text-center bg-[#F1F7F7]  flex items-center justify-center">
            No more items...
          </p>
        )}
      </div>
      <div
        className={
          toggleTab !== 1
            ? "mt-[20px] flex items-center justify-center"
            : "hidden"
        }
      >
        <p className="font-Raleway text-[14px] font-[500] ">
          No items added yet
        </p>
      </div>
    </div>
  );
}

export default ProductItem;
