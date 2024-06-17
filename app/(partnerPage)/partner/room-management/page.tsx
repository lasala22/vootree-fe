"use client";
import React, { useState } from "react";
import Forms_Room from "./components/form";
import Tables_Room from "./components/table";
import { Row } from "antd";

export default function Page() {
  const [selectedRow, setSelectedRow] = useState<any | null>(null);

  const handleRowSelect = (row: any) => {
    setSelectedRow(row);
  };
  return (
    <div className="p-20">
      <div>
        <Row className="font-bold text-2xl">Trang quản lý phòng</Row>
      </div>
      <div className="mt-10">
        <Tables_Room onRowSelect={handleRowSelect} />
      </div>
      <div className="mt-10 px-36">
        <Forms_Room selectedRow={selectedRow} />
      </div>
    </div>
  );
}
