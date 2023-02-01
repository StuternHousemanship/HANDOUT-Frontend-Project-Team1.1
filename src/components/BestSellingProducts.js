/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import "./ProductItem/ProductItem.css";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { CardMedia } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { AuthRoutes } from "../url";

import product1 from "../assets/img/Products/product1.png";
import product2 from "../assets/img/Products/product2.png";
import product3 from "../assets/img/Products/product3.png";
import product4 from "../assets/img/Products/product4.png";

function ProductItem() {
  const [allItems, setAllItems] = useState([]);

  const [textTooLong, setTextTooLong] = useState(true);

  const navigate = useNavigate();

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
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Card className="relative">
            <CardMedia
              component="img"
              onClick={() => navigate(AuthRoutes.ViewAllItems)}
              image={product.imageSrc}
              title={product.name}
              sx={{
                position: "relative",
                cursor: "pointer",
              }}
            />
            <p className="rounded-[12px] bg-[#F1F7F7] absolute top-[12px] left-[12px] font-[500] font-Raleway text-[10px] text-[#141414] py-[6px] px-[12px] ">
              Today
            </p>
            <CardContent className="bg-[#F1F7F7] ">
              <div className="flex justify-between">
                <Typography
                  variant="body2"
                  fontStyle="Raleway"
                  sx={{
                    fontSize: "12px",
                    fontFamily: "Raleway",
                    fontWeight: "500",
                  }}
                >
                  {product.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontFamily: "Raleway",
                    fontWeight: "700",
                  }}
                >
                  {product.price}
                </Typography>
              </div>
              <Typography
                sx={{
                  fontSize: "10px",
                  fontFamily: "Raleway",
                  fontColor: "#141414",
                  marginTop: "10px",
                }}
              >
                <div>
                  {textTooLong
                    ? `${product.text.substr(0, 70)} ...`
                    : product.text}
                  {textTooLong ? (
                    <button
                      type="button"
                      key={product.id}
                      className="text-[10px] font-[600] font-Raleway text-[#077369] ml-1"
                      onClick={() => setTextTooLong(!textTooLong)}
                    >
                      View More
                    </button>
                  ) : (
                    <button
                      type="button"
                      key={product.id}
                      className="text-[10px] font-[600] font-Raleway text-[#077369] ml-1"
                      onClick={() => setTextTooLong(!textTooLong)}
                    >
                      View less
                    </button>
                  )}
                </div>
              </Typography>
              <div className="mt-[10px] flex justify-between ">
                <div>
                  <Typography
                    sx={{
                      fontSize: "10px",
                      fontFamily: "Raleway",
                      fontColor: "#141414",
                    }}
                  >
                    Color
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontFamily: "Raleway",
                      fontWeight: "700",
                    }}
                  >
                    Orange
                  </Typography>
                </div>
                <div>
                  <Typography
                    sx={{
                      fontSize: "10px",
                      fontFamily: "Raleway",
                      fontColor: "#141414",
                    }}
                  >
                    Condtion
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontFamily: "Raleway",
                      fontWeight: "700",
                    }}
                  >
                    Damaged
                  </Typography>
                </div>
                <div>
                  <Typography
                    sx={{
                      fontSize: "10px",
                      fontFamily: "Raleway",
                      fontColor: "#141414",
                    }}
                  >
                    Shipping Option
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontFamily: "Raleway",
                      fontWeight: "700",
                    }}
                  >
                    Pick-up
                  </Typography>
                </div>
              </div>
              <div className="mt-[10px] flex justify-between ">
                <div>
                  <Typography
                    sx={{
                      fontSize: "10px",
                      fontFamily: "Raleway",
                      fontColor: "#141414",
                    }}
                  >
                    Items Category
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontFamily: "Raleway",
                      fontWeight: "700",
                    }}
                  >
                    Phones and gadgets
                  </Typography>
                </div>
                <div>
                  <Typography
                    sx={{
                      fontSize: "10px",
                      fontFamily: "Raleway",
                      fontColor: "#141414",
                    }}
                  >
                    Location
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontFamily: "Raleway",
                      fontWeight: "700",
                    }}
                  >
                    Lagos/Ogudu
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductItem;
