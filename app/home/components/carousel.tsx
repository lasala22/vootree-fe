import React from "react";
import { Carousel } from "antd";
import Image from "next/image";

const contentStyle: React.CSSProperties = {
  height: "500px",
  lineHeight: "600px",
  width: "1000px",
};

export default function Carousell() {
  return (
    <Carousel
      autoplay
      style={{ width: 1000, height: 500 }}
      className="rounded-lg"
    >
      <div>
        <h3 style={contentStyle}>
          <Image
            className="rounded-lg"
            src="/halongbay-3501.jpg.webp"
            width={1000}
            height={300}
            alt=""
            objectFit="cover"
          ></Image>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <Image
            className="rounded-lg"
            src="/cauvang-1654247842-9403-1654247849.jpg"
            width={1000}
            height={300}
            alt=""
          ></Image>
        </h3>
      </div>
    </Carousel>
  );
}
