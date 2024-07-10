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
import { useTranslations } from "next-intl";
export default function Page() {
  const t = useTranslations();
  return (
    <>
      <div>
        <p className="font-bold text-3xl text-center text-blue-900">
          {t("home.title")}
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
        <p className="font-bold text-xl mx-40 mt-3">{t("home_1.title_1")}</p>
      </div>
      <div className=" justify-center flex mx-3 ">
        <Card />
      </div>
      <br />
      <hr className="w-9/12 h-0.5 m-auto bg-black" />
      <div className="mt-5 justify-center items-center ">
        <h1 className="font-bold text-xl mx-40">{t("home_2.title_2")}</h1>
        <CardHotel />
      </div>
      <br />
      <hr className="w-9/12 h-0.5 m-auto bg-black" />
      <h1 className="font-bold text-xl mt-5 mx-44">{t("home_3.title_3")}</h1>
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
              <h3 className="text-sm font-bold">{t("homepage1.text1")}</h3>
              <p className="text-xs font-semibold">{t("homepage2.text2")}</p>
            </div>
          </div>
          <div className="w-4/12 h-24 bg-white rounded-md inline-flex py-2 px-1  border-gray-950">
            <div className="me-2">
              <Image src="/icon/search.png" width={100} height={100} alt="" />
            </div>
            <div>
              <h3 className="text-sm font-bold">{t("homepage3.text3")}</h3>
              <p className="text-xs font-semibold">{t("homepage4.text4")}</p>
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
              <h3 className="text-sm font-bold">{t("homepage5.text5")}</h3>
              <p className="text-xs font-semibold">{t("homepage6.text6")}</p>
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
            <p className="font-bold text-xl mx-44">{t("home_4.text")}</p>
            <br />
            <p className="font-semibold text-lg mx-44">{t("home_5.text")}</p>
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
        <p className="font-bold text-xl mx-44">{t("home_6.text")}</p>
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
            <strong className="text-3xl text-white">{t("footer.text")}</strong>
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
