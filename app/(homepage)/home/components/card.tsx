"use client";
import React, { useEffect, useState } from "react";
import { Card, Carousel, Col, Rate, Row, Skeleton, Spin, message } from "antd";
import Image from "next/legacy/image";
import Link from "next/link";

const formatNumber = (number) => {
  return number.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
};

export default function CardHotel() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/hotels`); // API backend trả về toàn bộ giá trị
        const allData = await response.json();
        setData(allData); // Lưu trữ toàn bộ dữ liệu
      } catch (error) {
        message.error("Lỗi");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="justify-center flex mx-3 my-3">
        <Row gutter={24}>
          <Carousel
            autoplay
            arrows
            slidesToShow={4}
            slidesToScroll={1}
            style={{ width: 1000, height: 400 }}
          >
            {loading
              ? Array.from({ length: 5 }).map((_, index) => (
                  <Col md={12} lg={6} xs={24} key={index} className="mt-3">
                    <Card hoverable style={{ width: 240 }}>
                      <Skeleton.Image style={{ width: 240, height: 150 }} />
                      <Skeleton active paragraph={{ rows: 3 }} />
                    </Card>
                  </Col>
                ))
              : data.slice(0, 5).map((item) => (
                  <Col md={12} lg={6} xs={24} key={item.id} className="mt-3">
                    <Link href={`/detail/${item.id}`}>
                      <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={
                          <Image
                            src={`/hotelImg/${item.hotelImages
                              .map((img) => img.path)
                              .slice(0, 1)}`}
                            width={240}
                            height={150}
                            alt="title"
                          />
                        }
                      >
                        <Rate disabled defaultValue={item.hotelStars} />
                        <div>
                          <h1 className="font-bold text-lg">
                            {item.hotelName}
                          </h1>
                          <p>{item.city}</p>
                        </div>
                        <strong>
                          {formatNumber(
                            item.rooms.reduce(
                              (min, room) => Math.min(min, room.price),
                              Infinity
                            )
                          )}
                          /đêm
                        </strong>
                      </Card>
                    </Link>
                  </Col>
                ))}
          </Carousel>
        </Row>
      </div>
    </>
  );
}
