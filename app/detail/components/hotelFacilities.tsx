import { Col, Row } from "antd";
import Image from "next/legacy/image";
import React from "react";

export default function HotelFacilities({ data }) {
  return (
    <>
      <Row gutter={24} className="flex justify-between">
        {data?.length > 0
          ? data.map((item) => (
              <Col
                span={6}
                className="flex items-center mt-3"
                key={item.facility.facId}
              >
                <Image
                  src={`/icon/facility/${item.facility.facIcon}`}
                  width={32}
                  height={32}
                  alt=""
                />
                <span className="ms-2 font-semibold">
                  {item.facility.facName}
                </span>
              </Col>
            ))
          : "no data"}
      </Row>
    </>
  );
}
