"use client";
import React, { useState,useCallback } from "react";
import Forms_Room from "./components/form";
import Tables_Room from "./components/table";
import { Button, Col, Row } from "antd";
import Link from "next/link";
import { PlusOutlined } from "@ant-design/icons";

export default function Page() {
  const [selectedRow, setSelectedRow] = useState<any | null>(null);
  const [reloadTable, setReloadTable] = useState(false);
  const [isFormDisabled, setIsFormDisabled] = useState(true);

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
      <Row>
        <Col span={12}>
          <span className="font-bold text-2xl">Trang quản lý phòng</span>
        </Col>
        <Col span={12} className="text-end">
          <Link href="/partner/room-create">
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
              Thêm phòng
            </Button>
          </Link>
        </Col>
      </Row>
      <div className="mt-10">
        <Tables_Room onRowSelect={handleRowSelect}  reloadTable={reloadTable} />
      </div>
      <div className="mt-10 px-36">
        <Forms_Room selectedRow={selectedRow} onFormSubmit={handleFormSubmit} isFormDisabled={isFormDisabled}/>
      </div>
    </div>
  );
}
