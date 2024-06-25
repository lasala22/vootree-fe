import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { Button, Carousel, Col, Form, Input, Row } from "antd";
import FormItem from "antd/es/form/FormItem";
import Image from "next/legacy/image";
import Link from "next/link";
import Carousell from "./components/carousel";
import Card from "./components/city";
import CardHotel from "./components/card";
import { useEffect, useState } from "react";
import TweenOne, { TweenOneGroup } from "rc-tween-one";

export default function Page() {
  return (
    <>
      <div>
        <p className="font-bold text-3xl text-center text-blue-900">
          VooTreeVeeVuu - Khám phá thế giới qua những cửa sổ của bạn
        </p>
      </div>
      <br />
      <div className="justify-center flex">
        <div style={{ width: 1000, height: 400 }} className="rounded-lg">
          <Carousell />
        </div>
      </div>
      <br />
      <hr className="w-9/12 h-0.5 m-auto bg-black" />
      <div>
        <p className="font-bold text-xl mx-40 mt-3">
          Cảm giác như ở nhà dù bạn đi đến đâu
        </p>
      </div>
      <div className=" justify-center flex mx-3 ">
        <Card />
      </div>
      <br />
      <hr className="w-9/12 h-0.5 m-auto bg-black" />
      <div className="mt-5 justify-center items-center ">
        <h1 className="font-bold text-xl mx-40">
          Khám phá những chỗ nghỉ tuyệt vời dưới đây
        </h1>
        <CardHotel />
      </div>
      <br />
      <hr className="w-9/12 h-0.5 m-auto bg-black" />
      <h1 className="font-bold text-xl mt-5 mx-44">
        Lý do nên đặt chỗ với VooTreeVeeVuu?
      </h1>
      <div className="justify-center items-center flex mx-40">
        <div className="w-11/12 h-32 bg-sky-500 gap-5 mt-7 rounded-lg justify-between items-center flex px-10 ">
          <div className="w-4/12 h-24 bg-white rounded-md inline-flex py-2 px-1 border-gray-950">
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
              <p className="text-xs font-semibold">
                Bạn có thể tin chọn sản phẩm hoàn chỉnh và hướng dẫn du lịch của
                chúng tôi.
              </p>
            </div>
          </div>
          <div className="w-4/12 h-24 bg-white rounded-md inline-flex py-2 px-1  border-gray-950">
            <div className="me-2">
              <Image src="/icon/search.png" width={100} height={100} alt="" />
            </div>
            <div>
              <h3 className="text-sm font-bold">Tùy chọn đặt chỗ linh hoạt</h3>
              <p className="text-xs font-semibold">
                Bạn có thể chọn những nơi phù hợp với bạn, và gia đình của mình
                nhất chỉ cần vài cú click.
              </p>
            </div>
          </div>
          <div className="w-4/12 h-24 bg-white rounded-md inline-flex py-2 px-1 border-gray-950">
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
                Thanh toán an toàn và thuận tiện nhất
              </h3>
              <p className="text-xs font-semibold">
                Tận hưởng nhiều cách thanh toán an toàn, bằng loại tiền thuận
                tiện nhất.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <hr className="w-9/12 h-0.5 m-auto bg-black" />
      <div className=" mt-5">
        <Row>
          <Col span={13}>
            <p className="font-bold text-xl mx-44">Đăng kí nơi nghỉ của bạn</p>
            <br />
            <p className="font-semibold text-lg mx-44">
              Tiếp cận hàng triệu khách hàng tiềm năng và nâng tầm doanh nghiệp
              của bạn với chúng tôi.
            </p>
          </Col>
          <Col span={11}>
            <img
              src="https://ik.imagekit.io/tvlk/image/imageResource/2020/01/24/1579840685837-76cf8c0f1f54757df1c8a7a5ec3d0811.jpeg?tr=h-180,q-75,w-448"
              alt=""
            />
          </Col>
        </Row>
      </div>
      <br />
      <hr className="w-9/12 h-0.5 m-auto bg-black" />
      <br />
      <div>
        <p className="font-bold text-xl mx-44">
          Top 10 Hidden Beach Resorts in Vietnam
        </p>
        <br />
        <iframe
          className="mx-auto"
          width="1000"
          height="500"
          src="https://www.youtube.com/embed/fOSjc9AFME4"
          title="Top 10 Hidden Beach Resorts in Vietnam | Exotic Voyages"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
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
