import { Col, Row, Tag } from "antd";
import Image from "next/legacy/image";
import React from "react";

export default function RateInfo({ data }) {
  return (
    <div className="mt-10 rounded-lg shadow-lg h-full mx-52 p-5 ">
      <strong className="text-lg ">
        Những review khác của du khách về khách sạn
      </strong>
      <div className="mt-4">
        <strong>Xếp hạng & Điểm đánh giá chung</strong>
        <div className="flex items-center">
          <Tag color="#0384c6" className="w-12 h-8 text-lg text-center">
            {data.ratings?.length > 0
              ? data.ratings.reduce((sum, rate) => sum + rate.rate, 0) /
                data.ratings?.length
              : undefined}
          </Tag>
          <p className="text-sm text-gray-500">
            Từ {data?.ratings?.length} đánh giá của khách đã ở
          </p>
        </div>
      </div>
      {data.ratings?.length > 0
        ? data.ratings.slice(0, 5).map((item) => (
            <div className="mt-5 rounded-sm h-36 shadow-md" key={item.id}>
              <Row className="h-full">
                <Col
                  span={6}
                  className=" items-center justify-center text-center flex "
                >
                  <div className="items-center justify-center ">
                    <strong className="text-lg">
                      {item.user.lastName !== null
                        ? item.user?.lastName
                        : "Anonymous"}{" "}
                      {item.user.firstName !== null ? item.user?.firstName : ""}
                    </strong>
                    <div className="mt-2 items-center justify-center flex ">
                      <Image
                        src="/icon/paper-plane.png"
                        width={25}
                        height={20}
                        alt=""
                      />
                      <p className="ms-2">9</p>
                    </div>
                    <div className="mt-2">
                      <p className="">Ngày 20/02/2024</p>
                    </div>
                  </div>
                </Col>
                <Col span={18} className="text-start items-center flex">
                  {item.comment}
                </Col>
              </Row>
            </div>
          ))
        : "no data"}
    </div>
  );
}
