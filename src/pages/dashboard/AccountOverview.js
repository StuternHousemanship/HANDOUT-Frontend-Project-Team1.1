/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../../components/DeleteModal";
import UserHeader from "../../components/header/UserHeader";
import avatar from "../../assets/svg/Avatar.svg";
import { ReactComponent as Icon } from "../../assets/svg/deleteIcon.svg";
import { ReactComponent as Addbtn } from "../../assets/svg/Union.svg";
import { ReactComponent as BackArrow } from "../../assets/svg/backArrow.svg";
import { ReactComponent as NextArrow } from "../../assets/svg/nextArrow.svg";
import { NonAuthRoutes, AuthRoutes } from "../../url";
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

// eslint-disable-next-line react/function-component-definition
const AccountOverview = () => {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const Profile = {
    name: "Jane Doe",
    email: "Janedoe@gmail.com",
    phone: "+234 812 345 6789",
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

  return (
    <div>
      <UserHeader />

      <div className=" flex md:inline-flex lg:inline-flex justify-center items-center w-[100%] h-auto">
        <div className="flex flex-col align-center justify-center mt-[100px] w-[full] h-auto mx-[15px]  ">
          <h3 className="w-[220px] h-[32px] mt-[6px] text-[18px] md:text-[24px]  font-[700] font-Raleway leading-20 text-[#191919]">
            Account Overview
          </h3>
          <p className=" mt-[2px] text-[14px] md:text-[14px] font-[400] font-Raleway text-[#191919]">
            This account was created on date and time{" "}
          </p>
          <div className="sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[1030px] h-[300px] rounded-[10px] bg-[#FAFBFB]">
            <div className="flex justify-end my-[20px] mr-[20px] text-center">
              <button
                type="button"
                className="flex items-center justify-center w-[100px] h-[30px] leading-[15px]  px-[10px] bg-transparent hover:bg-[#077369] text-[#077369] font-Raleway font-[600] text-[10px] hover:text-white py-2 border-[1.5px] border-[#5da39c]  rounded"
                onClick={() => navigate(AuthRoutes.EditProfile)}
              >
                Edit Profile
              </button>
            </div>

            <div className="flex flex-col ">
              <img
                alt="avatar"
                src={avatar}
                className=" ml-[24px] md:ml-[72px] w-[100px] h-[100px] my-[6px]"
              />
              <p className="font-Raleway font-[600] text-[20px] md:text-[32px] leading-[22px] text-[#09120D] my[2px] md:my-[6px] ml-[24px]  md:ml-[72px] ">
                {Profile.name}
              </p>
              <p className=" text-[12px] md:text-[14px] my-[0.5px] md:my-[2px] font-Raleway font-[500]  leading-[22px] text-[#09120D] ml-[24px]  md:ml-[72px]  ">
                {Profile.email}
              </p>
              <div className="flex justify-between">
                <p className=" text-[12px] md:text-[14px] my-[0.5px] md:my-[2px] font-Raleway font-[500]  leading-[22px] text-[#09120D] ml-[24px] md:ml-[72px]">
                  {Profile.phone}
                </p>
                <button
                  type="button"
                  className="flex flex-row mx-[10px] md:mx-[20px]   "
                  onClick={() => setShowModal(true)}
                >
                  <Icon className="mx-[2px]md:mx-[10px]" />
                  <span className="text-[11px] font-[500] text-[#A40D0D] md:text-[16px] font-Raleway md:font-[700]  ml-[2px] md:ml-[10px]  leading-[22px] md:uppercase">
                    {" "}
                    Delete Account{" "}
                  </span>
                </button>
                {showModal ? <DeleteModal closeModal={setShowModal} /> : null}
              </div>
            </div>
          </div>

          <div className="sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[1030px] h-[360px]  my-[64px] ">
            <div className=" flex justify-between">
              <h2 className="text-[30px] font-[600] font-Raleway tracking-tight text-gray-900">
                My Items
              </h2>
              <div>
                <button
                  type="button"
                  onClick={() => navigate(AuthRoutes.AddItem)}
                  className="flex flex-row items-center justify-center w-[120px] h-[45px] leading-[15px]  px-[10px] bg-transparent text-[#333333] font-Raleway font-[600] text-[12px]  py-2 border-[1.5px] border-[#333333]  rounded"
                >
                  <Addbtn className="w-[15px] h-[15px]" />{" "}
                  <span className="mx-[10px]">ADD ITEM</span>
                </button>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-y-[30px] gap-x-[24px] xs:grid-cols-2 md:grid-cols-3 xl:gap-x-8 mx-[15px] ">
              {products.map((product) => (
                <div key={product.id} className="group relative ">
                  <div className="h-[200px] w-full overflow-hidden rounded-t-lg bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="md:h-[150px] w-full object-cover object-center xs:h-full lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="flex justify-between min-h-[87px]  w-full rounded-b-lg bg-[#F1F6F6] ">
                    <div>
                      <button
                        type="button"
                        onClick={() => navigate(AuthRoutes.ItemDetails)}
                      >
                        <h3 className="mt-[5px]  mx-[10px] text-[14px] font-[500] font-Raleway text-[#141414]">
                          <a href={product.href}>
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {product.name}
                          </a>
                        </h3>
                      </button>
                      <p className=" mt-[5px] text-left ml-[10px] text-[10px] font-[500] font-Raleway text-[#141414]">
                        {product.text}{" "}
                        <a
                          href="#"
                          className="text-[10px] font-[600] font-Raleway text-[#077369] underline"
                        >
                          View more ...
                        </a>
                      </p>
                    </div>
                    <p className=" mt-[5px] mx-[10px] text-[14px] font-[700] font-Raleway text-[#141414]">
                      {product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex  items-center justify-center my-[20px] text-center text-[20px]">
              <button
                type="button"
                className="flex items-center justify-center w-[200px] h-[30px] leading-[15px] mx-[20px] px-[10px] bg-transparent hover:bg-[#077369] text-[#077369] uppercase font-Raleway font-[600] text-[10px] hover:text-white py-2 border-[1.5px] border-[#5da39c]  rounded"
              >
                <BackArrow className="w-[10px] h-[10px] mx-[5px]" /> Previous
                Page
              </button>
              <button
                type="button"
                className="flex items-center justify-center w-[200px] h-[30px] leading-[15px] mx-[20px]   px-[10px] bg-[#077369] hover:bg-[#077369] text-[#FFFFFF] font-Raleway uppercase font-[600] text-[10px] hover:text-white py-2 border-[1.5px] border-[#5da39c]  rounded"
              >
                Next Page <NextArrow className="w-[10px] h-[10px] mx-[5px] " />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountOverview;
