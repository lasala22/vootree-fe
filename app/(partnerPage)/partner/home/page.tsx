"use client";

import withAuth from "@/components/withAuth";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import Link from "next/link";
import PendingTable from "./components/pending-table";
import ActiveTable from "./components/active-table";

const Homepage = () => {
  return (
    <>
      <div className="p-20">
        <div>
          <Row>
            <Col span={12}>
              <span className="font-bold text-2xl">
                Trang quản lý khách sạn
              </span>
            </Col>
            <Col span={12} className="text-end">
              <Link href="/partner/hotel-create">
                <Button
                  type="primary"
                  size="large"
                  className="w-56 h-12 text-lg font-bold shadow-lg"
                  icon={
                    <PlusOutlined
                      style={{ fontSize: "25px", fontWeight: "bold" }}
                    />
                  }
                  iconPosition="end"
                >
                  Đăng ký khách sạn
                </Button>
              </Link>
            </Col>
          </Row>
          <div className="mt-10">
            <p className="font-semibold text-lg">
              Danh sách các đăng ký đang chờ duyệt
            </p>
            <Row>
              <PendingTable />
            </Row>
          </div>
          <div className="mt-10">
            <div>
              <p className="font-semibold text-lg">
                Danh sách các khách sạn đang hoạt động
              </p>
            </div>
            <div className="mt-5">
              <ActiveTable />
            </div>
          </div>
          <div className="mt-10">
            <div>
              <p className="font-semibold text-lg">Thông tin booking</p>
            </div>
            <div className="mt-5"></div>
          </div>
        </div>
      </div>
    </>
  );
};

Homepage.displayName = "PartnerPage";

export default withAuth(Homepage, "PARTNER");
