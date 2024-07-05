import { Checkbox } from "antd";
import React, { useEffect, useState } from "react";
import axios from "axios";

type FacilityCheckBoxProps = {
  setCheckedValues: (checkedValues: any[]) => void;
};

export default function FacilityCheckBox({
  setCheckedValues,
}: FacilityCheckBoxProps) {
  const [data, setData] = useState<{ key: string; name: string }[]>([]);

  const CheckboxGroup = Checkbox.Group;

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/facilities")
      .then((response) => {
        const fetchedData = response.data.map((item: any) => ({
          key: item.facId,
          label: item.facName, // sử dụng 'label' thay vì 'name' cho Checkbox options
          value: item.facId, // thêm 'value' cho Checkbox options
        }));
        setData(fetchedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const onChange = (checkedValues: any[]) => {
    setCheckedValues(checkedValues);
  };

  return (
    <div className="border p-4 rounded-md shadow-md mt-4">
      <div className="mb-2">
        <strong>Loại tiện ích</strong>
      </div>
      <CheckboxGroup
        options={data}
        onChange={onChange}
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          marginBottom: "10px",
        }}
      />
    </div>
  );
}
