import React from "react";
import { Carousel } from "antd";
import Image from "next/legacy/image";

const contentStyle: React.CSSProperties = {
  height: "500px",
  lineHeight: "600px",
  width: "1000px",
};

export default function Carousell() {
  return (
    <Carousel
      autoplay
      style={{ width: 1000, height: 400 }}
      className="rounded-lg"
    >
      <div>
        <h3 style={contentStyle}>
          <Image
            className="rounded-lg"
            src="/static_images/cauvang-1654247842-9403-1654247849.jpg"
            width={1000}
            height={400}
            alt=""
          ></Image>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <Image
            className="rounded-lg"
            src="/static_images/gioi-thieu-ve-ha-noi-banner.jpg"
            width={1000}
            height={400}
            alt=""
            objectFit="cover"
          ></Image>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <Image
            className="rounded-lg"
            src="/static_images/du-lich-Da-Lat-ivivu.jpg"
            width={1000}
            height={400}
            alt=""
          ></Image>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <Image
            className="rounded-lg"
            src="/static_images/dulichPhuQuoc-1649392573-9234-1649405369.jpg"
            width={1000}
            height={400}
            alt=""
          ></Image>
        </h3>
      </div>
    </Carousel>
  );
}
