"use client";
import { MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Col,
  DatePicker,
  Form,
  FormProps,
  GetProps,
  Input,
  InputNumber,
  Row,
  Select,
} from "antd";
import dayjs from "dayjs";
import Image from "next/legacy/image";
import React from "react";
type RangePickerProps = GetProps<typeof DatePicker.RangePicker>;
const { RangePicker } = DatePicker;

const disabledDate: RangePickerProps["disabledDate"] = (current) => {
  // Can not select days before today and today
  return current && current < dayjs().endOf("day");
};

const filterOption = (
  input: string,
  option?: { label: string; value: string }
) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

type FieldType = {
  search?: string;
  date?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

export default function SearchBar() {
  const onSearch = (value: string) => {
    console.log("search:", value);
  };
  return (
    <>
      <div className="w-full p-4 h-20 bg-sky-600 flex justify-center sticky top-0 z-10 shadow-lg">
        <Row gutter={24} className="flex justify-center w-10/12">
          <Form className="flex justify-center w-full" onFinish={onFinish}>
            <Col span={8}>
              <Form.Item<FieldType> name="search">
                <Select
                  className="h-12 text-xl font-bold"
                  suffixIcon={<MapPinIcon className="h-6 w-6 text-gray-500" />}
                  showSearch
                  placeholder="Thành phố, khách sạn, điểm đến"
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
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item<FieldType> name="date">
                <RangePicker
                  className="font-bold h-12 text-xl"
                  disabledDate={disabledDate}
                />
              </Form.Item>
            </Col>
            <Col span={3}>
              <Form.Item>
                <Input
                  suffix={
                    <Image src="/icon/man.png" width={24} height={24} alt="" />
                  }
                  className="font-bold h-12 text-xl w-full flex"
                  // defaultValue={1}
                  min={1}
                  max={10}
                />
              </Form.Item>
            </Col>
            <Col span={3}>
              <Form.Item>
                <Input
                  suffix={
                    <Image src="/icon/door.png" width={24} height={24} alt="" />
                  }
                  className="font-bold h-12 text-xl w-full flex"
                  // defaultValue={1}
                  min={1}
                  max={10}
                />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item>
                <Button
                  htmlType="submit"
                  size="large"
                  className="flex font-bold h-12 text-xl"
                >
                  <MagnifyingGlassIcon className="h-8 w-8 " /> Tìm kiếm
                </Button>
              </Form.Item>
            </Col>
          </Form>
        </Row>
      </div>
    </>
  );
}
