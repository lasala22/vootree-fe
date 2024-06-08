import React, { useState } from "react";

import { Checkbox, GetProp, InputNumber, Rate, Slider } from "antd";
import PriceSlider from "./priceslider";

const options = [
  { label: "Apple", value: "Apple" },
  { label: "Pear", value: "Pear" },
  { label: "Orange", value: "Orange" },
];

export default function HotelListSider() {
  const [minValue, setMinValue] = useState(80000);
  const [maxValue, setMaxValue] = useState(5000000);

  const handleChangeSlider = (value) => {
    setMinValue(value[0]);
    setMaxValue(value[1]);
  };

  const onChangeComplete = (value) => {
    console.log(value);
  };

  const handleChangeMinValue = (value) => {
    if (value > maxValue) {
      setMinValue(maxValue);
      return;
    }
    setMinValue(value);
  };

  const handleChangeMaxValue = (value) => {
    if (value < minValue) {
      setMaxValue(minValue);
      return;
    }
    setMaxValue(value);
  };

  const onChange: GetProp<typeof Checkbox.Group, "onChange"> = (
    checkedValues
  ) => {
    console.log("checked = ", checkedValues);
  };

  return (
    <>
      <div className="border h-40 p-4 rounded-md shadow-md">
        <strong>Phạm vi giá</strong>
        <p className="text-xs text-gray-700">1 phòng, 1 đêm</p>
        <PriceSlider />
      </div>
      <div className="border h-44 p-4 rounded-md shadow-md mt-4">
        <div className="mb-2">
          <strong>Hạng sao</strong>
        </div>
        <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
          <Checkbox value={1}>
            <Rate disabled defaultValue={1} />
          </Checkbox>
          <Checkbox value={2}>
            <Rate disabled defaultValue={2} />
          </Checkbox>
          <Checkbox value={3}>
            <Rate disabled defaultValue={3} />
          </Checkbox>
          <Checkbox value={4}>
            <Rate disabled defaultValue={4} />
          </Checkbox>
          <Checkbox value={5}>
            <Rate disabled defaultValue={5} />
          </Checkbox>
        </Checkbox.Group>
      </div>
      {/* <div className="border h-44 p-4 rounded-md shadow-md mt-4">
        <div className="mb-2">
          <strong>Dịch vụ và tiện ích</strong>
          <div className="block">
            <Checkbox.Group
              options={options}
              defaultValue={["Pear"]}
              onChange={onChange}
            />
          </div>
        </div>
      </div> */}
    </>
  );
}
