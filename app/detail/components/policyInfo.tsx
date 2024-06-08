import {
  ClipboardDocumentListIcon,
  ClockIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import { Avatar, Col, Divider, Row } from "antd";
import React from "react";

export default function PolicyInfo({ data }) {
  return (
    <div className="mx-52 border mt-10 ">
      <Row>
        <Col span={8} className="border h-72 p-5 bg-sky-400 rounded-l-lg">
          <strong className="text-xl">
            Chính sách và những thông tin liên quan của khách sạn
          </strong>
        </Col>
        <Col span={16} className="border h-72 p-5">
          <div className="flex">
            <Avatar src={<ClockIcon className="h-8 w-8 text-black" />} />
            <div className="ms-2">
              <strong>Thời gian nhận phòng/trả phòng</strong>
              <p>
                Giờ nhận phòng: <strong>Từ {data.checkInTime}</strong> Giờ trả
                phòng: <strong>Trước {data.checkOutTime}</strong>
              </p>
            </div>
          </div>
          <Divider />
          <div className="flex">
            <ClipboardDocumentListIcon className="h-8 w-8 text-black" />
            <div className="ms-2">
              <strong>Giấy tờ bắt buộc</strong>
              <p>
                Khi nhận phòng, bạn cần cung cấp CMND/CCCD, other. Các giấy tờ
                cần thiết có thể ở dạng bản mềm.
              </p>
            </div>
          </div>
          <Divider />
          <div className="flex">
            <DocumentTextIcon className="h-8 w-8 text-black" />
            <div className="ms-2">
              <strong>Hướng Dẫn Nhận Phòng Chung</strong>
              <p>
                Children Policy;Free of charge for children under 05 years
                old.Surcharge may apply on children from 05 to 12 years old
                according to Hotel Policy.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
