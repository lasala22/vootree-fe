import { Col, Row } from "antd";
import React from "react";

export default function CustomerInfo() {
  return (
    <>
      <strong className="text-lg">
        Chi tiết liên hệ (cho Vé điện tử/Phiếu xác nhận)
      </strong>
      <div className="rounded-sm shadow-sm border h-36 w-full p-5 mt-2">
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
    </>
  );
}
