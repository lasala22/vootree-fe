import React, { useState, useEffect, useRef } from "react";
import { List, Button, Card } from "antd";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { Col, Rate, Row, Typography } from "antd";
import Link from "next/link";
import Image from "next/legacy/image";
const gridStyle: React.CSSProperties = {
  width: "17%",
  textAlign: "center",
  fontSize: "19px",
};

interface Room {
  roomId: string;
  capacity: number;
  price: number;
  quantity: number;
  roomSize: number;
  description: string;
  roomType: {
    typeId: string;
    typeName: string;
  };
  room_images: {
    id: number;
    path: string;
  }[];
}

interface HotelData {
  id: string;
  address: string;
  hotelName: string;
  city: string;
  hotelPhoneNum: string;
  hotelStars: number;
  hotelDescription: string;
  status: string;
  checkInTime: string;
  checkOutTime: string;
  accommodationType: {
    typeId: string;
    typeName: string;
  };
  hotelImages: {
    id: number;
    path: string;
  }[];
  rooms: Room[];
  hotelFacilities: any[]; // Placeholder for any type
  listRating: any[]; // Placeholder for any type
}

const Index = () => {
  const [data, setData] = useState<HotelData | null>(null); // Lưu trữ dữ liệu bài đăng
  const [visibleData, setVisibleData] = useState([]); // Lưu trữ dữ liệu hiển thị
  const [loading, setLoading] = useState(false);
  const [hasMoreData, setHasMoreData] = useState(true); // Flag kiểm tra còn dữ liệu
  const pageSize = 10; // Số lượng dữ liệu hiển thị mỗi trang
  const [sortType, setSortType] = useState("");
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch("http://localhost:8080/api/hotels"); // API backend trả về toàn bộ giá trị
      const allData = await response.json();
      setData(allData); // Lưu trữ toàn bộ dữ liệu
      setRooms(allData.rooms);
      setVisibleData(allData.slice(0, pageSize)); // Hiển thị 10 giá trị đầu tiên
      setHasMoreData(allData.length > pageSize); // Kiểm tra còn dữ liệu
      setLoading(false);
    };

    fetchData();
  }, []);

  // Sort data
  const handleSort = (sortBy, order) => {
    if (sortBy === "hotelStars") {
      const sorted = [...visibleData].sort((a, b) => {
        if (a[sortBy] < b[sortBy]) {
          return order === "asc" ? -1 : 1;
        } else if (a[sortBy] > b[sortBy]) {
          return order === "asc" ? 1 : -1;
        } else {
          return 0;
        }
      });

      setVisibleData(sorted);
      setSortType(order);
    } else if (sortBy === "price") {
      const sorted = [...visibleData].sort((a, b) => {
        if (a[sortBy] < b[sortBy]) {
          return order === "asc" ? -1 : 1;
        } else if (a[sortBy] > b[sortBy]) {
          return order === "asc" ? 1 : -1;
        } else {
          return 0;
        }
      });

      setVisibleData(sorted);
      setSortType(order);
    } else if (sortBy === "rate") {
      const sorted = [...visibleData].sort((a, b) => {
        if (a[sortBy] < b[sortBy]) {
          return order === "asc" ? -1 : 1;
        } else if (a[sortBy] > b[sortBy]) {
          return order === "asc" ? 1 : -1;
        } else {
          return 0;
        }
      });

      setVisibleData(sorted);
      setSortType(order);
    }
  };
  //Load more data
  const handleLoadMore = async () => {
    if (hasMoreData) {
      const newData = data.slice(
        visibleData.length,
        visibleData.length + pageSize
      );
      setVisibleData([...visibleData, ...newData]);
      setHasMoreData(newData.length === pageSize); // Kiểm tra còn dữ liệu sau khi load more
    }
  };
  console.log(rooms);
  const minPrice: number | undefined =
    data?.rooms?.length > 0
      ? data.rooms.reduce((min, room) => Math.min(min, room.price), Infinity)
      : undefined;
  const formatNumber = (number) => {
    return number.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };

  return (
    <div>
      <div>
        <Card className="h-30">
          <Card className="w-32 justify-center items-center flex">
            <strong className="text-sky-600 text-lg">Sắp xếp</strong>
          </Card>
          <Card.Grid style={gridStyle}>Tất cả</Card.Grid>
          <Card.Grid
            style={gridStyle}
            onClick={() => handleSort("price", "asc")}
          >
            Giá tăng dần
          </Card.Grid>
          <Card.Grid
            style={gridStyle}
            onClick={() => handleSort("price", "desc")}
          >
            Giá giảm dần
          </Card.Grid>
          <Card.Grid
            style={gridStyle}
            onClick={() => handleSort("hotelStars", "desc")}
          >
            Xếp hạng sao
          </Card.Grid>
          <Card.Grid
            style={gridStyle}
            onClick={() => handleSort("rate", "desc")}
          >
            Đánh giá
          </Card.Grid>
        </Card>
      </div>
      <div className="mt-3 p-3 justify-between ">
        <List
          dataSource={visibleData}
          renderItem={(item) => (
            <List.Item key={item.id}>
              <Link href={`/detail/${item.id}`} className="w-full">
                <Row
                  gutter={24}
                  className="p-3 border h-56 hover:shadow-md rounded-md"
                >
                  <Col span={6} className="">
                    <Image
                      src={`/hotelImg/${item.hotelImages
                        .map((img) => img.path)
                        .slice(0, 1)}`}
                      layout="fill"
                      alt=""
                      className="rounded-l-sm"
                    />
                  </Col>
                  <Col span={13} className=" pt-2">
                    <Typography.Title level={4}>
                      {item.hotelName}
                    </Typography.Title>
                    <Typography.Paragraph className="flex">
                      <MapPinIcon className="h-6 w-6 text-sky-600 flex" />
                      {item.address}
                    </Typography.Paragraph>
                    <Rate disabled defaultValue={item.hotelStars} />
                    <Typography.Paragraph
                      className="mt-2"
                      //   ellipsis={
                      //     ellipsis ? { rows: 3, expandable: true, symbol: "more" } : false
                      //   }
                    >
                      {item.hotelDescription}
                    </Typography.Paragraph>
                  </Col>
                  <Col span={5} className=" justify-end pt-2">
                    <Typography.Paragraph className="text-sky-700 font-bold flex gap-1 text-lg justify-end">
                      <div>
                        <Image
                          src="/icon/paper-plane.png"
                          width={25}
                          height={20}
                          alt=""
                        />
                      </div>
                      {item.ratings.reduce((sum, rate) => sum + rate.rate, 0) /
                        item.ratings.length}
                    </Typography.Paragraph>
                    <div className="justify-end items-end block mt-16 text-end">
                      <Typography.Paragraph
                        type="danger"
                        className="font-bold text-xl"
                      >
                        {formatNumber(
                          item.rooms.reduce(
                            (min, room) => Math.min(min, room.price),
                            Infinity
                          )
                        )}
                      </Typography.Paragraph>
                      <Typography.Paragraph className="-mt-5 text-xs">
                        Chưa bao gồm thuế và phí
                      </Typography.Paragraph>
                    </div>
                    <div className="justify-end items-end flex">
                      <Button type="primary" danger>
                        Chọn phòng
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Link>
            </List.Item>
          )}
          loading={loading}
        />
        {hasMoreData && (
          <Button type="primary" onClick={handleLoadMore} loading={loading}>
            Load More
          </Button>
        )}
      </div>
    </div>
  );
};

export default Index;
