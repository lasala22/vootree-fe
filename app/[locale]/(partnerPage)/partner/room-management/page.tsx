"use client";
import React, { useState, useEffect, useCallback } from "react";
import Forms_Room from "./components/form";
import Tables_Room from "./components/table";
import { Button, Col, Row, Spin } from "antd";
import Link from "next/link";
import { PlusOutlined } from "@ant-design/icons";
import withAuth from "@/components/withAuth";

const Page = () => {
  const [selectedRow, setSelectedRow] = useState<any | null>(null);
  const [reloadTable, setReloadTable] = useState(false);
  const [isFormDisabled, setIsFormDisabled] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // Clear the timer when the component unmounts
  }, []);

  const handleRowSelect = (row: any) => {
    setSelectedRow(row);
    setIsFormDisabled(false);
  };

  const handleFormSubmit = useCallback(() => {
    setReloadTable((prev) => !prev); // Toggle the reloadTable state to trigger re-fetch in the Tables component
    setIsFormDisabled(true);
  }, []);

  return (
    <div className="p-20">
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Spin size="large" />
        </div>
      ) : (
        <>
          <Row>
            <Col span={12}>
              <span className="font-bold  text-2xl ml-32">
                Trang quản lý phòng
              </span>
            </Col>
            <Col span={12} className="text-end">
              <Link href="/partner/room-create">
                <Button
                  type="primary"
                  size="large"
                  className="w-52 h-12 text-lg font-bold shadow-lg mr-28"
                  icon={
                    <PlusOutlined
                      style={{ fontSize: "20px", fontWeight: "bold" }}
                    />
                  }
                >
                  Thêm phòng
                </Button>
              </Link>
            </Col>
          </Row>
          <div className="mt-10">
            <Tables_Room
              onRowSelect={handleRowSelect}
              reloadTable={reloadTable}
            />
          </div>
          <div className="mt-10 px-36">
            <Forms_Room
              selectedRow={selectedRow}
              onFormSubmit={handleFormSubmit}
              isFormDisabled={isFormDisabled}
            />
          </div>
        </>
      )}
    </div>
  );
};
export default withAuth(Page, "PARTNER");
