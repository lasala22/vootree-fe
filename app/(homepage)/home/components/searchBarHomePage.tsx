"use client";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { Form, InputNumber, Select, DatePicker, Button } from "antd";
import FormItem from "antd/es/form/FormItem";
import React from "react";
import dayjs from "dayjs";
import type { GetProps } from "antd";
import customParseFormat from "dayjs/plugin/customParseFormat";
type RangePickerProps = GetProps<typeof DatePicker.RangePicker>;

dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;

const range = (start: number, end: number) => {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
};

// eslint-disable-next-line arrow-body-style
const disabledDate: RangePickerProps["disabledDate"] = (current) => {
  // Can not select days before today and today
  return current && current < dayjs().endOf("day");
};

const filterOption = (
  input: string,
  option?: { label: string; value: string }
) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

export default function SearchBar() {
  const onSearch = (value: string) => {
    console.log("search:", value);
  };
  return (
    <>
      <div className="text-3xl items-center justify-center flex mt-6 font-bold text-white">
        <h1 className="items-center">
          From Southeast Asia to the World, All Yours.
        </h1>
      </div>
      <hr className="max-w-4xl mx-auto justify-center mt-4 border" />
      <div className="max-w-3xl h-56 bg-white mx-auto mt-6 border border-gray-400 rounded-lg ">
        <div className="relative">
          <Form className="mx-4 mt-3" layout="vertical">
            <FormItem label="Thành phố, địa điểm hoặc tên khách sạn:">
              <Select
                size="large"
                className=" font-normal"
                suffixIcon={<MapPinIcon className="h-6 w-6 text-gray-500" />}
                showSearch
                placeholder="VD: Đà Lạt..., Khách sạn..."
                optionFilterProp="children"
                onSearch={onSearch}
                filterOption={filterOption}
                options={[
                  {
                    value: "jack",
                    label: "Jack",
                  },
                  {
                    value: "lucy",
                    label: "Lucy",
                  },
                  {
                    value: "tom",
                    label: "Tom",
                  },
                ]}
              />
            </FormItem>
            <div className="justify-between flex">
              <FormItem
                label="Ngày nhận phòng, ngày trả phòng"
                name="RangePicker"
              >
                <RangePicker
                  size="large"
                  className=" w-80"
                  disabledDate={disabledDate}
                />
              </FormItem>

              <FormItem label="Số lượng khách" name="guestNumber">
                <InputNumber
                  size="large"
                  className=" w-40"
                  //defaultValue={2}
                  min={1}
                  max={10}
                />
              </FormItem>
              <FormItem label="Số lượng phòng" name="roomNumber">
                <InputNumber
                  size="large"
                  className=" w-40 "
                  // defaultValue={1}
                  min={1}
                  max={10}
                />
              </FormItem>
            </div>
            <div className="items-center justify-center flex">
              <FormItem>
                <Button
                  size="large"
                  className="w-56"
                  type="primary"
                  htmlType="submit"
                >
                  Search
                </Button>
              </FormItem>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
