"use client";

import { Button, Col, DatePicker, Divider, Form, GetProps, Row } from "antd";

import React from "react";
type RangePickerProps = GetProps<typeof DatePicker.RangePicker>;
const { RangePicker } = DatePicker;
import dayjs from "dayjs";
import Image from "next/image";

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
        <div
          style={{ width: "35%" }}
          className="border p-5 rounded-lg shadow-lg"
        >
          <Row className="h-24 ">
            <Col span={8}>
              <Image
                src="/static_images/cauvang-1654247842-9403-1654247849.jpg"
                alt=""
                layout="fill"
              />
            </Col>
            <Col span={16} className="px-4">
              <strong>Khach san A</strong>
              <p>Deluxe sea view room</p>
            </Col>
          </Row>
          <Divider />
          <Row>
            <Col span={12} className="flex justify-start items-center">
              <Image src="/icon/check-in.png" width={30} height={30} alt="" />
              <span className="font-bold ms-2">Ngày nhận phòng</span>
            </Col>
            <Col span={12} className="flex justify-end items-center">
              <span className="font-bold">20/02/2024</span>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col span={12} className="flex justify-start items-center">
              <Image src="/icon/check-out.png" width={30} height={30} alt="" />
              <span className="font-bold ms-2">Ngày trả phòng</span>
            </Col>
            <Col span={12} className="flex justify-end items-center">
              <span className="font-bold">21/02/2024</span>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col span={12} className="flex justify-start items-center">
              <Image src="/icon/user.png" width={30} height={30} alt="" />
              <span className="font-bold ms-2">Số lượng khách</span>
            </Col>
            <Col span={12} className="flex justify-end items-center">
              <span className="font-bold">2 khách, 1 phòng</span>
            </Col>
          </Row>
          <Divider />
        </div>
      </div>
    </>
  );
}
