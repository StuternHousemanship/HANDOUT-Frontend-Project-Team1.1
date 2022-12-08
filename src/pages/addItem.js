import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import Api from "../apii/items";
import Categories from "../components/Categories";
import AddBigImage from "../components/AddBigImage";
import UserHeader from "../components/header/UserHeader";
import AddImage from "./AddImage";
import Condition from "../components/Condition";
// import Color from "../components/Color";
import ShippingOptions from "../components/ShippingOptions";
import Country from "../components/Country";
import { NonAuthRoutes } from "../url";
import Color from "../components/Color";

const addItem = () => {
  const navigate = useNavigate();
  // const { uuid } = require("uuidv4");
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [state, setState] = useState("");
  const [colour, setColour] = useState("");
  const [country, setCountry] = useState("");
  const [shippingOption, setShippingOption] = useState("");
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [addSmallImage, setAddSmallImage] = useState("");

  console.log(colour);
  console.log(addSmallImage);
  console.log(country);
  console.log(shippingOption);
  console.log(category);
  console.log(condition);
  // const [condition, setCondition] = useState("");
  // const [customerCountry, setCustomerCountry] = useState("");
  // const [shippingOption, setShippingOption] = useState("");

  const handleAddItem = async () => {
    const itemDetails = {
      id: uuid(),
      name: itemName,
      description: itemDescription,
      price: itemPrice,
      customerState: state,
      itemColour: colour,
      shipping: shippingOption,
      itemCondition: condition,
      itemCategory: category,
      region: country,
      image: addSmallImage,
    };
    const response = await Api.post("/items", itemDetails);
    console.log(response);
    setItemName("");
    setItemDescription("");
    setItemPrice("");
    setState("");
    setColour("");
    setShippingOption("");
    setCondition("");
    setCategory("");
    setCountry("");
    // setAddSmallImage("");
  };

  return (
    <div className=" flex flex-col w-full h-full  md:items-center md:bg-[#f5f5f5f5]  ">
      <UserHeader />
      <div className=" flex flex-col sm: w-[58%] md:w-[65%] md:h-[50px] xs:text-start md:border-b-[0.25px] xs:ml-[21px] mt-[85px] border-[#BDBDBD]">
        <p className="font-[700] font-Raleway md:text-[24px]  xs:text-[18px]  ">
          My Listings
        </p>
      </div>

      <form className="  flex flex-col py-[25px]  items-center xs:h-[200px]  md:h-[400px] rounded-lg sm:w-[58%]  md:w-[65%] xs:w-[100%] mt-[25px]  bg-white">
        <div className=" md:flex xs:hidden  text-start w-[100%] h-[20px]">
          <p className="  ml-6 mb-2  font-Raleway font-[500] text-[16px]">
            Add image
          </p>
        </div>

        <div className="flex flex-col items-center justify-center xs:h-[200px] md:h-[400px]  xs:w-[95%]  md:w-[100%] md:ml-[40px] xs:ml-[20px] xs:mb-[230px] md:mt-[15px] xs:mt-[20px]">
          <AddBigImage />
        </div>
      </form>

      <div
        className="
     md:flex sm:flex xs:hidden md:min-w-[80%] md:h-[80%] flex items-center justify-center px-[280px] mt-[20px] "
      >
        <AddImage setAddSmallImage={setAddSmallImage} />
        <AddImage setAddSmallImage={setAddSmallImage} />
        <AddImage setAddSmallImage={setAddSmallImage} />
        <AddImage setAddSmallImage={setAddSmallImage} />
        <AddImage setAddSmallImage={setAddSmallImage} />
        <AddImage setAddSmallImage={setAddSmallImage} />
      </div>
      <div className=" sm:flex sx:flex-col md:w-[65%] h-[700px] xs:mt-[100px] md:mt-[25px] ">
        {/* Left-side */}
        <div className=" flex-col md:w-[68%]">
          {/* Item Name */}
          <div className="h-[120px] md:w-[96%] bg-white rounded-lg flex-col pt-[20px] pl-[20px] justify-center items-center">
            <div className="h-[30px] w-[full] mb-[0px]">
              <p className="font-Raleway font-[500] mb-[20px]">Item Name</p>
            </div>

            <input
              type="text"
              placeholder="Input name of item"
              className="  p-3 w-[95%] h-[40px] font-Raleway text-[16px] rounded-[2px] border-[1px] border-[#717171] outline-0  "
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
          </div>
          {/* Item Description */}
          <div className="h-[240px] md:w-[96%] bg-white rounded-lg flex-col mt-[25px] pt-[20px] pl-[20px] justify-center items-center">
            <div className="h-[30px] w-[full] mb-[0px]">
              <p className="font-Raleway font-[500] mb-[20px]">
                Item Description
              </p>
            </div>

            <textarea
              type="text-area"
              rows="6"
              placeholder="More details about the item"
              className="  p-3 w-[95%]  font-Raleway text-[16px] rounded-[8px] border-[1px] border-[#717171] outline-0  "
              value={itemDescription}
              onChange={(e) => setItemDescription(e.target.value)}
            />
          </div>
          {/* Location */}
          <div className=" xs:hidden sm:block h-[120px] md:w-[96%] bg-white rounded-lg flex-col mt-[25px] pt-[20px] pl-[20px] justify-center items-center">
            <div className="h-[30px] w-[full] mb-[0px]">
              <p className="font-Raleway font-[500] mb-[20px]">Location</p>
            </div>

            <div className="text-start float right">
              <Country setCountry={setCountry} />

              <input
                type="text"
                placeholder="State/City"
                className=" p-3 w-[47%] h-[40px] font-Raleway text-[16px] rounded-[2px] border-[1px] border-[#717171] outline-0  "
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
          </div>
          {/* Shipping */}
          <div className=" xs:hidden sm:block h-[120px] md:w-[96%] bg-white rounded-lg flex-col mt-[25px] pt-[20px] pl-[20px] justify-center items-center">
            <div className="h-[30px] w-[full] mb-[0px]">
              <p className="font-Raleway font-[500] mb-[20px]">
                Shipping Option
              </p>
            </div>
            <ShippingOptions setShippingOption={setShippingOption} />
          </div>
        </div>
        {/* Right-side */}
        <div className=" md:w-[32%]">
          {/* price */}
          <div className="h-[100px] md:w-[100%] bg-white rounded-lg flex-col pt-[15px] pl-[20px]  justify-center items-center">
            <div className="h-[30px] md:w-[100%] ">
              <p className="font-Raleway font-[500]  text-[12px] mb-[20px]">
                Item Price
              </p>
            </div>
            <label className="flex  items-center justify-start" htmlFor="price">
              <p className="font-[700] text-[16px] font-Raleway text-[#077369]">
                NGN:
              </p>
              <input
                id="price"
                type="text"
                placeholder="200,000.00"
                className=" md:p-2  p-4 w-[60%] h-[36px] ml-[12px] font-Raleway text-[#077369] text-[127%] rounded-[2px] border-[1px] border-[#077369] outline-0  "
                value={itemPrice}
                onChange={(e) => setItemPrice(e.target.value)}
              />
            </label>
          </div>

          {/* Item Filters */}
          <div className="h-[310px] md:w-[100%] w-[100%] bg-white rounded-lg mt-[25px] flex flex-col justify-center    ">
            {/* color */}
            <p className="font-Raleway xs:hidden sm:block font-[500]  text-[12px] ml-[45px] ">
              Colour
            </p>
            <div className="mt-[10px] xs:hidden sm:block mb-[17px] ml-[45px]  h-[32px]">
              <Color setColour={setColour} />
            </div>
            <hr className="w-[64%] md:w-[64%] font-[700] text-[#BDBDBD] mb-[15px] ml-[49px]   " />
            {/* categories */}
            <p className="font-Raleway font-[500]  ml-[45px] text-[12px] ">
              Item category
            </p>
            <div className="mt-[10px] mb-[17px] ml-[45px] h-[32px]">
              <Categories setCategory={setCategory} />
            </div>
            <hr className=" w-[64%] md:w-[64%] font-[700] text-[#BDBDBD] mb-[15px] ml-[49px] " />
            <button
              className=" xs-block sm:hidden h-[45px] w-[65%] font-Raleway text-[15px] font-[700] leading-[20px] tracking-wide rounded text-white bg-[#077369]"
              type="button"
            >
              <p>Add item</p>
            </button>
            {/* condition */}
            <p className=" xs:hidden sm:block font-Raleway font-[500] ml-[45px] text-[12px]  ">
              Item condition
            </p>
            <div className=" xs:hidden sm:block mt-[10px]  mb-[10px] ml-[45px] h-[32px]">
              <Condition setCondition={setCondition} />
            </div>
          </div>
        </div>
      </div>

      <div className="xs:hidden sm:flex justify-center sm:p-5 h-[100px] xs:w-full sm:w-[65%]  xs:mt-[400px] sm:mt-[40px] ">
        <div className="flex flex-col items-start w-[90%] md:w-[90%] h-[45px]  ">
          <button
            className="h-[45px] w-[95%]   font-Raleway font-[700] leading-[20px] tracking-wide rounded text-[15px] text-[#077369] bg-white border-[1px] border-[#077369]"
            type="button"
            onClick={() => navigate(NonAuthRoutes.DashboardOnboarding)}
          >
            <p>Cancel</p>
          </button>
        </div>
        <div className="flex flex-col items-start md:w-[90%]  w-[90%] h-[45px] ml-[14px] ">
          <button
            className="h-[45px] w-[95%] font-Raleway text-[15px] font-[700] leading-[20px] tracking-wide rounded text-white bg-[#077369]"
            type="button"
            onClick={handleAddItem}
          >
            <p>Add item</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default addItem;
