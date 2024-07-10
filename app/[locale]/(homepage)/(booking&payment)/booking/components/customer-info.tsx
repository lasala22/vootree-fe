import { UserIcon } from "@heroicons/react/24/outline";
import { Button, Col, Row } from "antd";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function CustomerInfo({ phoneNum, email, fullName, role }) {
  const handleLoginClick = () => {
    localStorage.setItem("bookingHref", window.location.href);
  };
  return (
    <>
      <strong className="text-lg">
        Chi tiết liên hệ (cho Vé điện tử/Phiếu xác nhận)
      </strong>
      <div className="rounded-sm shadow-sm border h-36 w-full p-5 mt-2">
        {role === "CUSTOMER" ? (
          <>
            <div>
              <Row className="text-lg">
                <Col span={5} className="text-lg">
                  Họ và tên:
                </Col>
                <Col className="text-lg">
                  <span className="font-semibold">{fullName}</span>
                </Col>
              </Row>
            </div>
            <div className=" mt-4">
              <Row>
                <Col span={5} className="text-lg">
                  Số điện thoại:
                </Col>
                <Col className="text-lg">
                  <span className="font-semibold">{phoneNum}</span>
                </Col>
              </Row>
            </div>
            <div className="   mt-4">
              <Row>
                <Col span={5} className="text-lg">
                  Email:
                </Col>
                <Col className="text-lg">
                  <span className="font-semibold">{email}</span>
                </Col>
              </Row>
            </div>
          </>
        ) : (
          <div className="justify-center items-center text-center flex h-full">
            <div>
              <p className="font-semibold">
                Bạn chưa đang nhập! Vui lòng đăng nhập để có thể tiếp tục
              </p>
              <div className="flex mt-5 justify-center">
                <Link href="/login" onClick={handleLoginClick}>
                  <button
                    type="button"
                    className=" hover:bg-purple-950 hover:bg-opacity-40 me-4 py-2 px-2 bg-red-500 text-white rounded border flex text-sm"
                  >
                    <UserIcon className="h-5 w-5 mr-1 text-white" />
                    Đăng nhập
                  </button>
                </Link>
                <Link href="/signup" onClick={handleLoginClick}>
                  <button
                    type="button"
                    className="bg-sky-600 hover:bg-blue-700 hover:bg-opacity-40 font-bold text-white  py-2 px-2 ps-4 pe-4 rounded flex text-sm"
                  >
                    Đăng ký
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
