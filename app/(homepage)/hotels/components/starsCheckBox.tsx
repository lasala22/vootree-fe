import { Checkbox, GetProp, Rate } from "antd";

export default function StarsCheckBox({ setCheckedValues }) {
  const onChange: GetProp<typeof Checkbox.Group, "onChange"> = (
    checkedValues
  ) => {
    setCheckedValues(checkedValues);
  };

  return (
    <>
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
    </>
  );
}
