import { useState } from "react";

import { InputNumber, InputNumberProps, Slider } from "antd";

export default function PriceSlider() {
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
  return (
    <>
      <div style={{ marginTop: 16 }}>
        <InputNumber
          prefix="VND"
          size="small"
          min={80000}
          max={5000000}
          value={minValue}
          onChange={handleChangeMinValue}
          style={{ width: 120 }}
        />
        <span style={{ margin: "0 8px" }}>-</span>
        <InputNumber
          prefix="VND"
          size="small"
          min={minValue}
          max={5000000}
          value={maxValue}
          onChange={handleChangeMaxValue}
          style={{ width: 120 }}
        />
        <Slider
          tooltip={{ formatter: null }}
          range
          min={80000}
          max={5000000}
          step={50000}
          value={[minValue, maxValue]}
          onChange={handleChangeSlider}
          onChangeComplete={onChangeComplete}
        />
      </div>
    </>
  );
}
