"use client";
import { Card, Layout, Slider } from "antd";
import CardHotel from "./components/cardhotel";
import { useEffect, useState } from "react";
import PriceSlider from "./priceslider";
import HotelListSider from "./components/sider";
import Index from "./components/cardHotelTest";

const gridStyle: React.CSSProperties = {
  width: "17%",
  textAlign: "center",
  fontSize: "19px",
};

const hotelInfo = [
  {
    title: "Khách sạn A",
    image: "/cauvang-1654247842-9403-1654247849.jpg",
    address: "Đà Nẵng",
    rate: 8.3,
    price: 340000,
    stars: 4,
    description:
      "Đây là khách sạn Đây là khách sạ Đây là khách sạ Đây là khách sạ Đây là khách sạ Đây là khách sạ Đây là khách sạ Đây là khách sạ",
  },
  {
    title: "Khách sạn b",
    image: "/cauvang-1654247842-9403-1654247849.jpg",
    address: "Đà Nẵng",
    rate: 8.3,
    price: 340000,
    stars: 4,
    description:
      "Đây là khách sạn Đây là khách sạ Đây là khách sạ Đây là khách sạ Đây là khách sạ Đây là khách sạ Đây là khách sạ Đây là khách sạ",
  },
  {
    title: "Khách sạn c",
    image: "/cauvang-1654247842-9403-1654247849.jpg",
    address: "Đà Nẵng",
    rate: 8.3,
    price: 340000,
    stars: 4,
    description:
      "Đây là khách sạn Đây là khách sạ Đây là khách sạ Đây là khách sạ Đây là khách sạ Đây là khách sạ Đây là khách sạ Đây là khách sạ",
  },
  {
    title: "Khách sạn d",
    image: "/cauvang-1654247842-9403-1654247849.jpg",
    address: "Đà Nẵng",
    rate: 8.3,
    price: 340000,
    stars: 4,
    description:
      "Đây là khách sạn Đây là khách sạ Đây là khách sạ Đây là khách sạ Đây là khách sạ Đây là khách sạ Đây là khách sạ Đây là khách sạ",
  },
  {
    title: "Khách sạn e",
    image: "/cauvang-1654247842-9403-1654247849.jpg",
    address: "Đà Nẵng",
    rate: 8.3,
    price: 340000,
    stars: 4,
    description:
      "Đây là khách sạn Đây là khách sạ Đây là khách sạ Đây là khách sạ Đây là khách sạ Đây là khách sạ Đây là khách sạ Đây là khách sạ",
  },
];

export default function Page() {
  const [data, setData] = useState([]);

  return (
    <div className="flex">
      <div className="w-1/4 px-10" style={{ height: 1000 }}>
        <HotelListSider />
      </div>
      <div className=" pe-10 w-3/4">
        <Index />
      </div>
    </div>
  );
}
