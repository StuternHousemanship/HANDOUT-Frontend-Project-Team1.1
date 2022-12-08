/* eslint-disable react/function-component-definition */
import React from "react";
import { Select } from "antd";

const Condition = ({ setCondition }) => {
  const onChange = (value) => {
    setCondition(value);
    console.log(`selected ${value}`);
  };
  return (
    <Select
      className="w-[80%] border-[1px] border-[#717171]  rounded-[5px] text-[127%] font-Raleway "
      // showSearch
      bordered={false}
      size="Default"
      placeholder="Select item condition"
      optionFilterProp="children"
      onChange={onChange}
      options={[
        {
          value: "Brand New",
          label: "Brand New",
        },
        {
          value: "Used less than 5 times",
          label: "Used less than 5 times",
        },
        {
          value: "Used more than 5 times",
          label: "Used more than 5 times",
        },
        {
          value: "Old",
          label: "Old",
        },
        {
          value: "Slightly Damaged",
          label: "Slightly Damaged",
        },
      ]}
    />
  );
};
export default Condition;
