import { Col, Row } from "antd";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";

export default function CustomerInfo({ phoneNum, email, fullName, role }) {
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
            <p>Bạn chưa đang nhập</p>
          </div>
        )}
      </div>
    </>
  );
}
