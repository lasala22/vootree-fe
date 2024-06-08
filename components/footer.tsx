import { Col, Row } from "antd";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <>
      <div className="bg-gray-800 px-10 py-10" style={{ height: 400 }}>
        <Row gutter={24}>
          <Col span={12}>
            <Image
              src="/logo_preview_rev_2.png"
              alt=""
              width={250}
              height={100}
            />
            <div className="mt-5">
              <p className="text-3xl text-white">About us</p>
              <p></p>
            </div>
          </Col>
          <Col span={12}>
            <div className="mt-5 text-end text-white ">
              <p className="text-3xl ">Contact us</p>
              <p className="text-lg mt-3">For more information</p>
              <p className="items-end flex justify-end gap-4 mt-2">
                <Image src="/icon/facebook.png" width={40} height={64} alt="" />
                <Image src="/icon/google.png" width={40} height={64} alt="" />
                <Image src="/icon/call.png" width={40} height={64} alt="" />
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
