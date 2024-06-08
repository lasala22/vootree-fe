"use client";

import { Button, Col, DatePicker, Divider, Form, GetProps, Row } from "antd";

import React from "react";
type RangePickerProps = GetProps<typeof DatePicker.RangePicker>;
const { RangePicker } = DatePicker;
import dayjs from "dayjs";
import Image from "next/legacy/image";

const disabledDate: RangePickerProps["disabledDate"] = (current) => {
  // Can not select days before today and today
  return current && current < dayjs().endOf("day");
};

type FieldType = {};

export default function Page() {
  return (
    <>
      <div className="mx-32 flex gap-5" style={{ height: "1000px" }}>
        <div
          style={{ width: "65%" }}
          className="border p-5 rounded-lg shadow-lg"
        >
          <strong className="text-lg">
            Chi tiết liên hệ (cho Vé điện tử/Phiếu xác nhận)
          </strong>
          <div className="rounded-sm shadow-sm border h-36 w-full p-2 mt-2">
            <div>
              <Row className="text-lg">
                <Col span={5} className="text-lg">
                  Họ và tên:
                </Col>
                <Col className="text-lg">
                  <strong> Nguyễn Văn A</strong>
                </Col>
              </Row>
            </div>
            <div className=" mt-4">
              <Row>
                <Col span={5} className="text-lg">
                  Số điện thoại:
                </Col>
                <Col className="text-lg">
                  <strong> 0909090909</strong>
                </Col>
              </Row>
            </div>
            <div className="   mt-4">
              <Row>
                <Col span={5} className="text-lg">
                  Email:
                </Col>
                <Col className="text-lg">
                  <strong> vananguyen@gmail.com</strong>
                </Col>
              </Row>
            </div>
          </div>
          <div className="rounded-sm shadow-sm border h-36 w-full p-2 mt-2">
            <strong>
              Chọn ngày nhận phòng, ngày trả phòng, số lượng phòng
            </strong>
            <Form>
              <Form.Item<FieldType> name="date">
                <RangePicker
                  className="font-bold h-12 text-xl"
                  disabledDate={disabledDate}
                />
              </Form.Item>
            </Form>
          </div>
          <div className="rounded-sm shadow-sm border h-80 w-full p-2 mt-2">
            <div className="text-start items-center flex">
              <strong className="text-lg">Chi tiết giá</strong>
            </div>
            <Divider />
            <Row className="w-full">
              <Col span={12}>
                <p className="text-lg">Giá phòng</p>
                <p>(1x) Double or Twin Superior (1 night)</p>
              </Col>
              <Col
                span={12}
                className="text-end justify-end items-center flex "
              >
                <p className="text-lg">140.000.000 VND</p>
              </Col>
            </Row>
            <Row className="w-full mt-3">
              <Col
                span={12}
                className="text-start justify-start items-center flex"
              >
                <p className="text-lg">Thuế & Phí</p>
              </Col>
              <Col
                span={12}
                className="text-end justify-end items-center flex "
              >
                <p className="text-lg">14.000 VND</p>
              </Col>
            </Row>
            <Divider />
            <Row className="w-full mt-3">
              <Col
                span={12}
                className="text-start justify-start items-center flex"
              >
                <strong className="text-xl">Tổng tiền</strong>
              </Col>
              <Col
                span={12}
                className="text-end justify-end items-center flex "
              >
                <strong className="text-xl text-orange-600">
                  154.0000 VND
                </strong>
              </Col>
            </Row>
            <Row className="justify-center mt-6">
              <Button
                style={{ width: "75%", height: "40px" }}
                type="primary"
                danger
              >
                <strong className="text-xl">Tiếp tục thanh toán</strong>
              </Button>
            </Row>
          </div>
        </div>
        <div style={{ width: "35%" }} className="">
          <div className="border p-5 rounded-lg shadow-lg">
            <Row className="h-24 ">
              <Col span={8}>
                <Image
                  src="/static_images/cauvang-1654247842-9403-1654247849.jpg"
                  alt=""
                  layout="fill"
                />
              </Col>
              <Col span={16} className="px-4">
                <strong className="text-lg text-sky-600">
                  Khach san A Khach san A Khach san A Khach san A
                </strong>
                <p className="font-semibold">Deluxe sea view room</p>
              </Col>
            </Row>
            <Divider />
            <Row>
              <Col span={12} className="flex justify-start items-center">
                <Image
                  src="/icon/check-in (1).png"
                  width={30}
                  height={30}
                  alt=""
                />
                <span className="font-semibold ms-2  text-stone-500">
                  Ngày nhận phòng
                </span>
              </Col>
              <Col span={12} className="flex justify-end items-center">
                <span className="font-semibold  ">20/02/2024</span>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col span={12} className="flex justify-start items-center">
                <Image
                  src="/icon/check-out (1).png"
                  width={30}
                  height={30}
                  alt=""
                />
                <span className="font-semibold ms-2 text-stone-500">
                  Ngày trả phòng
                </span>
              </Col>
              <Col span={12} className="flex justify-end items-center">
                <span className="font-semibold  0">21/02/2024</span>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col span={12} className="flex justify-start items-center">
                <Image src="/icon/user (2).png" width={30} height={30} alt="" />
                <span className="font-semibold ms-2  text-stone-500">
                  Số lượng khách
                </span>
              </Col>
              <Col span={12} className="flex justify-end items-center">
                <span className="font-semibold 0">2 khách, 1 phòng</span>
              </Col>
            </Row>
            <Divider />
            <Row>
              <Col span={12} className="text-start">
                <span className="font-semibold text-stone-500 ms-2">
                  <span className="underline text-black font-bold">1</span>{" "}
                  room(s) x{" "}
                  <span className="underline text-black font-bold">1</span>{" "}
                  night(s)
                </span>
              </Col>
              <Col span={12} className="text-end">
                <span className="font-bold">2.931.000 đ</span>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col span={12} className="text-start">
                <span className="font-semibold text-stone-500 ms-2">
                  Tax & fee
                </span>
              </Col>
              <Col span={12} className="text-end">
                <span className="font-bold">120.000 đ</span>
              </Col>
            </Row>
            <Divider />
            <Row className="mt-4">
              <Col span={12} className="text-start">
                <span className="font-bold   ms-2">Tổng tiền</span>
              </Col>
              <Col span={12} className="text-end">
                <span className="font-bold text-orange-600 ">1.200.000 đ</span>
              </Col>
            </Row>
            <div className="w-full h-12 bg-neutral-200 mt-4 rounded-md flex items-center justify-center">
              <Image src="/icon/call (1).png" width={30} height={30} alt="" />
              <span className="text-sm font-semibold ms-2">
                Gọi 1900 1234 để được hỗ trợ 24/7
              </span>
            </div>
          </div>
          <div className="border p-5 rounded-lg shadow-lg mt-5">
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
