/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { CardMedia } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { ReactComponent as LoadingIcon } from "../assets/svg/loading-light-icon.svg";
import product1 from "../assets/img/Products/product1.png";
import product2 from "../assets/img/Products/product2.png";
import product3 from "../assets/img/Products/product3.png";
import product4 from "../assets/img/Products/product4.png";
import product5 from "../assets/img/Products/product5.png";
import product6 from "../assets/img/Products/product6.png";
import product7 from "../assets/img/Products/product7.png";
import product8 from "../assets/img/Products/product8.png";
import product9 from "../assets/img/Products/product9.png";
import product10 from "../assets/img/Products/product10.png";
import product11 from "../assets/img/Products/product11.png";
import product12 from "../assets/img/Products/product12.png";

function ProductItem() {
  const [allItems, setAllItems] = useState([]);
  const [visible, setVisible] = useState(8);
  const [buttonIsLoading, setButtonIsLoading] = useState(false);
  const [textTooLong, setTextTooLong] = useState(true);
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
      <div className="shadow-sm flex justify-between font-[500] font-Raleway sm:text-[12px] xs:text-[10px] text-[#141414] align-center w-[100%] h-auto py-[12px] ">
        <div className=" pl-[20px] ">
          <button
            type="button"
            className="lg:mr-[110px] md:mr-[60px] sm:mr-[20px] xs:mr-[10px] "
          >
            All Products
          </button>
          <button
            type="button"
            className="lg:mr-[110px] md:mr-[60px] sm:mr-[20px] xs:mr-[10px]"
          >
            Free
          </button>
          <button
            type="button"
            className="lg:mr-[110px] md:mr-[60px] sm:mr-[20px] xs:mr-[10px]"
          >
            New In
          </button>
          <button type="button" className="">
            Sales
          </button>
        </div>
        <div className="flex font-Raleway sm:text-[12px] xs:text-[10px]">
          <div className={allItems ? "flex" : "hidden"}>
            <p>
              {allItems.length > visible
                ? `Showing 1-${visible} of ${allItems.length}
              results`
                : `Showing 1-${allItems.length} of ${allItems.length}
              results`}
            </p>
          </div>
          <div className={!allItems ? "flex" : "hidden"}>
            <p>No items to display</p>
          </div>
          <select className="bg-[#EAEDF2] cursor-pointer rounded-[12px] text-[#141414] sm:ml-[30px] xs:ml-[15px] ">
            <option className="bg-[#EAEDF2] cursor-pointer rounded-[12px] text-[#141414] sm:ml-[30px] xs:ml-[15px] ">
              Date Added
            </option>
            <option className="bg-[#EAEDF2] cursor-pointer rounded-[12px] text-[#141414] sm:ml-[30px] xs:ml-[15px] ">
              Date Added
            </option>
            <option className="">Date Added</option>
          </select>
        </div>
      </div>
      <div className="mt-[20px]">
        <Grid container justify="center" rowSpacing={5} columnSpacing={3}>
          {allItems.slice(0, visible).map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Card className="relative">
                <CardMedia
                  component="img"
                  image={product.imageSrc}
                  title={product.name}
                  sx={{
                    position: "relative",
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
          ;
        </Grid>
      </div>
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
        <p className="mt-[24px] font-Raleway text-[14px] font-[500]  rounded-[4px] text-center bg-[#F1F7F7]  flex items-center justify-center ">
          No more items...
        </p>
      )}
    </div>
  );
}

export default ProductItem;
