/* eslint-disable react/function-component-definition */
import React from "react";
import { Select } from "antd";

const Categories = ({ setCategory }) => {
  const onChange = (value) => {
    setCategory(value);
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };
  return (
    <Select
      className="w-[80%] border-[1px] border-[#717171]  rounded-[5px] text-[127%] font-Raleway "
      showSearch
      bordered={false}
      size="Default"
      placeholder="Select a category"
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={(input, option) =>
        (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
      }
      options={[
        {
          value: "Film, Tv & Music",
          label: "Film, Tv & Music",
        },
        {
          value: "Games",
          label: "Games",
        },
        {
          value: "Electronics & Computers",
          label: "Electronics & Computers",
        },
        {
          value: "Home, Garden, Pets, DIY",
          label: "Home, Garden, Pets, DIY",
        },
        {
          value: "Toys, Children & Baby",
          label: "Toys, Children & Baby",
        },
        {
          value: "Books",
          label: "Books",
        },
        {
          value: "Clothing and Shoes",
          label: "Clothing and Shoes",
        },
        {
          value: "Accessories & jewelry",
          label: "Accessories & jewelry",
        },
        {
          value: "Household Items",
          label: "Household Items",
        },
        {
          value: "Food Items",
          label: "Food Items",
        },
        {
          value: "Automobile & Parts",
          label: "Automobile & Parts",
        },
        {
          value: "Others",
          label: "Others",
        },
      ]}
    />
  );
};
export default Categories;
