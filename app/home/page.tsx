import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { Button, Carousel, Col, Form, Input, Row } from "antd";
import FormItem from "antd/es/form/FormItem";
import Image from "next/image";
import Link from "next/link";
import Carousell from "./components/carousel";
import Card from "./components/city";
import CardHotel from "./components/card";
import { useEffect, useState } from "react";

export default function Page() {
  return (
    <>
      <div
        className="justify-center items-center flex"
        style={{
          backgroundImage: `url('/static_images/1700215562769-2f362de4d3cf5253829ed5a07c10c17b.webp')`,
        }}
      >
        <div style={{ width: 1000, height: 500 }} className="rounded-lg">
          <Carousell />
        </div>
      </div>
      <div className="mt-10 justify-center flex mx-3 my-3">
        <Card />
      </div>
      <div className="mt-10 justify-center items-center ">
        <h1 className="font-bold text-xl mx-40">
          Khám phá những chỗ nghỉ tuyệt vời dưới đây
        </h1>
        <CardHotel />
      </div>
      <h1 className="font-bold text-xl mt-10 mx-40">
        Lý do nên đặt chỗ với VooTreeVeeVuu?
      </h1>
      <div className="justify-center items-center flex mx-40">
        <div className="w-11/12 h-28 bg-sky-500 gap-5 mt-7 rounded-lg justify-between items-center flex px-10 ">
          <div className="w-4/12 h-20 bg-white rounded-md inline-flex py-2 px-1 border-gray-950">
            <div className="me-2">
              <Image
                src="/icon/travel-bag.png"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <div>
              <h3 className="text-sm font-bold">Đáp ứng mọi nhu cầu của bạn</h3>
              <p className="text-xs">
                Bạn có thể tin chọn sản phẩm hoàn chỉnh và hướng dẫn du lịch của
                chúng tôi.
              </p>
            </div>
          </div>
          <div className="w-4/12 h-20 bg-white rounded-md inline-flex py-2 px-1  border-gray-950">
            <div className="me-2">
              <Image src="/icon/search.png" width={100} height={100} alt="" />
            </div>
            <div>
              <h3 className="text-sm font-bold">Tùy chọn đặt chỗ linh hoạt</h3>
              <p className="text-xs">
                Bạn có thể chọn những nơi phù hợp với bạn, và gia đình của mình
                nhất chỉ cần vài cú click.
              </p>
            </div>
          </div>
          <div className="w-4/12 h-20 bg-white rounded-md inline-flex py-2 px-1 border-gray-950">
            <div className="me-2">
              <Image
                src="/icon/protected-shield.png"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <div>
              <h3 className="text-sm font-bold">
                Thanh toán an toàn và thuận tiện
              </h3>
              <p className="text-xs">
                Tận hưởng nhiều cách thanh toán an toàn, bằng loại tiền thuận
                tiện nhất cho bạn.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full mt-7 justify-center items-center flex bg-center bg-cover bg-no-repeat "
        style={{
          height: 400,
          backgroundImage: `url(
            '/static_images/1686193661791-d09fe628fd8f9b6c377a91b30628d0b2.webp'
          )`,
        }}
      >
        <div className="w-6/12">
          <Row>
            <strong className="text-3xl text-white">
              Luôn được cập nhật về các lời khuyên du lịch, đề xuất và khuyến
              mãi mới nhất.
            </strong>
          </Row>
          <Form className="flex gap-4 mt-3">
            <FormItem className="w-5/6">
              <Input
                size="large"
                placeholder="Nhập Email của bạn"
                prefix={<EnvelopeIcon className="h-6 w-6 text-gray-500" />}
              />
            </FormItem>
            <FormItem>
              <Button size="large" type="primary" danger>
                Submit
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    </>
  );
}
