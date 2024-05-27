"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  MapPinIcon,
  UserIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { useRouter } from "next/router";
import { Form, DatePicker, Select, Row, Col, InputNumber } from "antd";
import dayjs from "dayjs";
import type { GetProps } from "antd";
import customParseFormat from "dayjs/plugin/customParseFormat";
import FormItem from "antd/es/form/FormItem";

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

export default function Navbar() {
  const onSearch = (value: string) => {
    console.log("search:", value);
  };
  return (
    <header className={styles.header}>
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:bg-opacity-85 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <a href="/home">
                      <Image
                        src="/logo_preview_rev_2.png"
                        width={150}
                        height={0}
                        alt="logo"
                      />
                    </a>
                  </div>
                  <div className="hidden sm:ml-6 sm:block pt-2 ">
                    <div className="flex space-x-4">
                      <a
                        href="/home"
                        className="text-white hover:bg-gray-700 hover:bg-opacity-55 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                      >
                        Trang chủ
                      </a>
                      <a
                        href="/hotels"
                        className="text-white hover:bg-gray-700 hover:bg-opacity-55 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                      >
                        Danh sách khách sạn
                      </a>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
                  <div className="flex justify-center gap-1">
                    <div className="hidden sm:ml-6 sm:block ">
                      <div className="flex space-x-1">
                        <a
                          href="/home"
                          className="text-white hover:bg-gray-700 hover:bg-opacity-55 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                        >
                          Hợp tác với chúng tôi
                        </a>
                        <a
                          href="/hotels"
                          className="text-white hover:bg-gray-700 hover:bg-opacity-55 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                        >
                          Khách sạn đang đặt
                        </a>
                      </div>
                    </div>
                    <button
                      type="button"
                      className=" hover:bg-purple-950 hover:bg-opacity-40 text-white py-2 px-2 rounded border flex text-sm"
                    >
                      <UserIcon className="h-5 w-5 text-white mr-1" />
                      Đăng nhập
                    </button>
                    <button
                      type="button"
                      className="bg-sky-600 hover:bg-blue-700 hover:bg-opacity-40 font-bold text-white py-2 px-2 ps-4 pe-4 rounded flex text-sm"
                    >
                      Đăng ký
                    </button>
                  </div>
                  {/* Profile dropdown */}
                </div>
              </div>
            </div>

            <DisclosurePanel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 text-left">
                <DisclosureButton className="text-left">
                  <a
                    href="/home"
                    className="text-white hover:bg-gray-700 hover:bg-opacity-55 hover:text-white rounded-md px-3 py-2 text-sm font-medium block"
                  >
                    Trang chủ
                  </a>
                  <a
                    href="/hotels"
                    className="text-white hover:bg-gray-700 hover:bg-opacity-55 hover:text-white rounded-md px-3 py-2 text-sm font-medium block"
                  >
                    Danh sách khách sạn
                  </a>
                  <a
                    href="/home"
                    className="text-white hover:bg-gray-700 hover:bg-opacity-55 hover:text-white rounded-md px-3 py-2 text-sm font-medium block"
                  >
                    Hợp tác với chúng tôi
                  </a>
                  <a
                    href="/hotels"
                    className="text-white hover:bg-gray-700 hover:bg-opacity-55 hover:text-white rounded-md px-3 py-2 text-sm font-medium block"
                  >
                    Khách sạn đang đặt
                  </a>
                </DisclosureButton>
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
      <div className="text-3xl items-center justify-center flex mt-6 font-bold text-white">
        <h1 className="items-center">
          From Southeast Asia to the World, All Yours.
        </h1>
      </div>
      <hr className="max-w-4xl mx-auto justify-center mt-4 border" />
      <div className="max-w-3xl h-44 bg-white mx-auto mt-6 border border-gray-400 rounded-lg ">
        <Form className="px-4 pt-3" layout="vertical">
          <FormItem>
            <Select
              className="h-12 font-normal"
              suffixIcon={<MapPinIcon className="h-6 w-6 text-gray-500" />}
              showSearch
              placeholder="Chọn điểm đến, khách sạn, thành phố"
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
              name="RangePicker"
              rules={[{ required: true, message: "Please input!" }]}
            >
              <RangePicker className="h-12 w-80" disabledDate={disabledDate} />
            </FormItem>

            <FormItem name="InputNumber">
              <InputNumber
                className="h-12 w-80 text-"
                defaultValue={2}
                min={1}
                max={10}
              />
            </FormItem>
          </div>
        </Form>
      </div>
    </header>
  );
}
