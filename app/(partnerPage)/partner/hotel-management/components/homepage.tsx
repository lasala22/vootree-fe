"use client";
import React, { useState } from "react";

import Forms from "./form";
import Tables from "./table";
import { Row } from "antd";

export default function Homepage() {
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
        <Tables onRowSelect={handleRowSelect} />
      </div>
      <div className="mt-10 px-36">
        <Forms selectedRow={selectedRow} />
      </div>
      <footer className=" mt-5 justify-center flex"> @Made by DaoHehe</footer>
    </div>
  );
}
