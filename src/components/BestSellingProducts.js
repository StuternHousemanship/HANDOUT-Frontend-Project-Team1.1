/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from "react";
// import "./ProductItem/ProductItem.css";
import Grid from "@mui/material/Grid";
import product1 from "../assets/img/Products/product1.png";
import product2 from "../assets/img/Products/product2.png";
import product3 from "../assets/img/Products/product3.png";
import product4 from "../assets/img/Products/product4.png";
import BestSellingProduct from "./BestSellingProduct";

function ProductItem() {
  const [allItems, setAllItems] = useState([]);

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
  ];
  /** Function to get all items and store them in a state */
  const allData = () => setAllItems(products);

  useEffect(() => allData(), []);

  return (
    <Grid
      container
      justify="center"
      rowSpacing={5}
      columnSpacing={3}
      className="flex justify-center items-center"
    >
      {allItems.map((product) => (
        <BestSellingProduct product={product} />
      ))}
    </Grid>
  );
}

export default ProductItem;
