"use client";
import React from "react";
import Image from "next/image";
import { Typography } from "antd";

const Card = ({ image, title }) => {
  return (
    <div className="relative w-full h-40 bg-cover bg-center rounded-lg shadow-md overflow-hidden hover:shadow-md hover:shadow-slate-500">
      <Image
        src={image}
        alt={title}
        layout="fill"
        className="absolute inset-0"
      />
      <div className="absolute top-3 left-0 p-4">
        <Typography.Title
          level={5}
          style={{ color: "white", fontWeight: "bold", fontSize: "large" }}
        >
          {title}
        </Typography.Title>
      </div>
    </div>
  );
};
export default Card;
