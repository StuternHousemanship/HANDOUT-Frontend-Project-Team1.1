/* eslint-disable react/function-component-definition */
import React, { useState, useMemo } from "react";
import countryList from "react-select-country-list";
import { Select } from "antd";

const Country = ({ setCountry }) => {
  const [value, setValue] = useState("Select Country");
  const options = useMemo(() => countryList().getData(), []);
  // eslint-disable-next-line no-shadow
  const onSearch = (value) => {
    setCountry(value);
    // console.log(`selected ${value}`);
  };
  // eslint-disable-next-line no-shadow
  const changeHandler = (value) => {
    setCountry(value);
    setValue(value);
  };
  return (
    <Select
      size="large"
      showSearch
      bordered={false}
      placeholder="Select Country"
      className="w-[46%] border-[1px] border-[#717171] mr-[14px] rounded-[5px] text-[127%] font-Raleway outline-0 "
      options={options}
      value={value}
      optionFilterProp="children"
      onChange={changeHandler}
      onSearch={onSearch}
      filterOption={(input, option) =>
        (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
      }
    />
  );
};

export default Country;
