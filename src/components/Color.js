/* eslint-disable react/function-component-definition */
import React from "react";
import { Select } from "antd";

const onChange = (value) => {
  console.log(`selected ${value}`);
};

const Color = () => (
  <Select
    className="w-[80%] border-[1px] border-[#717171]  rounded-[5px] text-[127%] font-Raleway "
    bordered={false}
    size="Default"
    placeholder="Colour"
    optionFilterProp="children"
    onChange={onChange}
    options={[
      {
        value: "Red",
        label: "Red",
      },
      {
        value: "Orange",
        label: "Orange",
      },

      {
        value: "yellow",
        label: "Yellow",
      },
      {
        value: "Green",
        label: "Green",
      },
      {
        value: "Blue",
        label: "Blue",
      },
      {
        value: "Pink",
        label: "Pink",
      },
      {
        value: "Black",
        label: "Black",
      },
      {
        value: "Others",
        label: "Others",
      },
    ]}
  />
);
export default Color;
