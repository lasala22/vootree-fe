import { Col, Row } from "antd";
import Image from "next/legacy/image";
import React from "react";

export default function RoomFacilities({ data, size }) {
  return (
    <>
      <div>
        <div className="flex items-center">
          <Image
            src="/icon/pencil-and-ruler.png"
            width={25}
            height={25}
            alt=""
          />
          <span className="ms-2 font-semibold">{size} m²</span>
        </div>

        <Row gutter={24} className="flex justify-between">
          {data?.length > 0
            ? data.map((item) => (
                <Col
                  span={12}
                  className="flex items-center mt-3"
                  key={item.facility.facId}
                >
                  <Image
                    src={`/icon/facility/${item.facility.facIcon}`}
                    width={20}
                    height={20}
                    alt=""
                  />
                  <span className="ms-2 font-semibold">
                    {item.facility.facName}
                  </span>
                </Col>
              ))
            : "no data"}
        </Row>
      </div>
    </>
  );
}
