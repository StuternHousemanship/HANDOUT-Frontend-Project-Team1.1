import React from "react";
import bags from "../assets/svg/bags.svg";
import shirts from "../assets/svg/shirts.svg";
import pants from "../assets/svg/pants.svg";
import scarves from "../assets/svg/scarves.svg";
import shoes from "../assets/svg/shoes.svg";
import shorts from "../assets/svg/shorts.svg";
import socks from "../assets/svg/socks.svg";
import swim from "../assets/svg/swim.svg";
import tshirts from "../assets/svg/t-shirts.svg";
import jewel from "../assets/svg/jewellery.svg";
import heels from "../assets/svg/heels.svg";
import headphone from "../assets/svg/headphone.svg";
import hats from "../assets/svg/hats.svg";
import gloves from "../assets/svg/gloves.svg";
import dresses from "../assets/svg/dresses.svg";
import computers from "../assets/svg/computers.svg";
import coats from "../assets/svg/coats.svg";
import books from "../assets/svg/books.svg";

function ItemCategories() {
  const categories = [
    {
      name: "Shirts",
      image: shirts,
    },
    {
      name: "T-Shirts",
      image: tshirts,
    },
    {
      name: "Coats",
      image: coats,
    },
    {
      name: "Pants",
      image: pants,
    },
    {
      name: "Dresses",
      image: dresses,
    },
    {
      name: "Jewelleries",
      image: jewel,
    },
    {
      name: "Shorts",
      image: shorts,
    },
    {
      name: "SwimWears",
      image: swim,
    },
    {
      name: "Shoes",
      image: shoes,
    },
    {
      name: "Heels",
      image: heels,
    },
    {
      name: "Socks",
      image: socks,
    },
    {
      name: "Hats",
      image: hats,
    },
    {
      name: "Gloves",
      image: gloves,
    },
    {
      name: "Scarves",
      image: scarves,
    },
    {
      name: "Bags",
      image: bags,
    },
    {
      name: "Computers",
      image: computers,
    },
    {
      name: "Books",
      image: books,
    },
    {
      name: "Headphones",
      image: headphone,
    },
  ];
  return (
    <div className=" overflow-x-scroll scroll-smooth scrollbar-hide shadow-md whitespace-nowrap">
      <ul className="">
        {categories.map((items) => (
          <div className="inline-block bg-[#EAEDF2] rounded-[12px] px-[8px] py-[6px] ml-[12px] my-[12px]">
            <button
              type="button"
              className="font-Raleway text-[10px] font-[500] text-[#141414] "
            >
              <div className="flex">
                <div>
                  <img
                    alt={items.name}
                    src={items.image}
                    className="mr-[6px] "
                  />
                </div>
                <div>{items.name} </div>
              </div>
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ItemCategories;
