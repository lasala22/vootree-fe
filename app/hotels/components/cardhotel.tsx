import { MapPinIcon } from "@heroicons/react/24/outline";
import { Button, Col, Rate, Row, Typography } from "antd";
import Image from "next/legacy/image";
import Link from "next/link";
import React, { useState } from "react";

export default function CardHotel({
  image,
  title,
  address,
  stars,
  description,
  rate,
  price,
}) {
  const [ellipsis, setEllipsis] = useState(true);
  return (
    <>
      <Link href="/detail">
        <Row gutter={24} className="p-3 border h-56 hover:shadow-md rounded-md">
          <Col span={6} className="">
            <Image src={image} layout="fill" alt="" className="rounded-l-sm" />
          </Col>
          <Col span={13} className=" pt-2">
            <Typography.Title level={4}>{title}</Typography.Title>
            <Typography.Paragraph className="flex">
              <MapPinIcon className="h-6 w-6 text-sky-600 flex" />
              {address}
            </Typography.Paragraph>
            <Rate disabled defaultValue={stars} />
            <Typography.Paragraph
              className="mt-2"
              //   ellipsis={
              //     ellipsis ? { rows: 3, expandable: true, symbol: "more" } : false
              //   }
            >
              {description}
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
              {rate}
            </Typography.Paragraph>
            <div className="justify-end items-end block mt-16 text-end">
              <Typography.Paragraph type="danger" className="font-bold text-lg">
                {price}VNĐ
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
    </>
  );
}
