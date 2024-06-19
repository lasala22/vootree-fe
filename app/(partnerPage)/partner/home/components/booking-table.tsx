import { Table } from "antd";
import React from "react";
import type { TableColumnsType } from "antd";

const columns: TableColumnsType<any> = [
  {
    title: "STT",
    dataIndex: "index",
    key: "index",
    render: (text, record, index) => index + 1,
    fixed: "left",
    width: 70,
  },
  {
    title: "Khách sạn",
    dataIndex: "hotelName",
    key: "hotelName",
    fixed: "left",
    width: 200,
  },
  {
    title: "Loại phòng",
    dataIndex: "roomType",
    key: "roomType",
    fixed: "left",
    width: 200,
  },
  {
    title: "Địa chỉ",
    dataIndex: "address",
    key: "address",
    width: 300,
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Giờ nhận phòng",
    dataIndex: "checkInDate",
    key: "checkInDate",
  },
  {
    title: "Giờ trả phòng",
    dataIndex: "checkOutDate",
    key: "checkOutDate",
  },
  {
    title: "Số lượng khách",
    dataIndex: "numOfGuest",
    key: "numOfGuest",
  },
  {
    title: "Số lượng phòng",
    dataIndex: "numOfRoom",
    key: "numOfRoom",
  },
  {
    title: "Ngày đặt",
    dataIndex: "bookingDate",
    key: "bookingDate",
  },
  {
    title: "Người đặt",
    dataIndex: "userName",
    key: "userName",
    fixed: "right",
  },
  {
    title: "Giá tiền",
    dataIndex: "totalPrice",
    key: "totalPrice",
    fixed: "right",
    width: 200,
    render: (text) => formatCurrency(text),
  },
];
const formatCurrency = (value) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(value);
};
export default function BookingTable({ filteredData, loading }) {
  return (
    <>
      <div>
        <Table
          className="border"
          dataSource={filteredData}
          columns={columns}
          scroll={{ x: 2500 }}
          pagination={{ pageSize: 5 }}
          loading={loading}
        />
      </div>
    </>
  );
}
