/* eslint-disable react/function-component-definition */
import React from "react";
import { Select } from "antd";

const onChange = (value) => {
  console.log(`selected ${value}`);
};

const ShippingOptions = () => (
  <Select
    className="w-[95%] border-[1px] border-[#717171]  rounded-[5px] text-[127%] font-Raleway "
    bordered={false}
    size="large"
    placeholder="Select shipping options"
    optionFilterProp="children"
    onChange={onChange}
    options={[
      {
        value: "Pickup",
        label: "Pickup",
      },
      {
        value: "Delivery",
        label: "Delivery",
      },
      {
        value: "Pickup and Delivery",
        label: "Both",
      },
    ]}
  />
);
export default ShippingOptions;
