import { Col, Pagination, Row, Tag } from "antd";
import Image from "next/legacy/image";
import React, { useState } from "react";

export default function RateInfo({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentData = data.ratings?.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="mt-10 rounded-lg shadow-lg h-full mx-52 p-5 ">
      <strong className="text-lg ">
        Những review khác của du khách về khách sạn
      </strong>
      <div className="mt-4">
        <strong>Xếp hạng & Điểm đánh giá chung</strong>
        <div className="flex items-center">
          <Tag color="#0384c6" className="w-20 h-8 text-lg text-center">
            {data.ratings?.length > 0
              ? data.ratings.reduce((sum, rate) => sum + rate.rate, 0) /
                data.ratings?.length
              : undefined}
            {"/10"}
          </Tag>
          <p className="text-sm text-gray-500">
            Từ {data?.ratings?.length} đánh giá của khách đã ở
          </p>
        </div>
      </div>
      {currentData?.length > 0
        ? currentData.map((item) => (
            <div className="mt-5 rounded-sm h-36 shadow-md" key={item.id}>
              <Row className="h-full">
                <Col
                  span={6}
                  className="items-center justify-center text-center flex"
                >
                  <div className="items-center justify-center">
                    <strong className="text-lg">
                      {item.user.lastName !== null
                        ? item.user?.lastName
                        : "Anonymous"}{" "}
                      {item.user.firstName !== null ? item.user?.firstName : ""}
                    </strong>
                    <div className="mt-2 items-center justify-center flex">
                      <Image
                        src="/icon/paper-plane.png"
                        width={25}
                        height={20}
                        alt=""
                      />
                      <p className="ms-2 text-sky-600 font-semibold">
                        {item.rate}
                      </p>
                    </div>
                    <div className="mt-2">
                      <p className="">{item?.date}</p>
                    </div>
                  </div>
                </Col>
                <Col span={18} className="text-start items-center flex p-5">
                  {item.comment}
                </Col>
              </Row>
            </div>
          ))
        : "no data"}
      <div className="mt-5 flex justify-center">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={data.ratings?.length || 0}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
}
