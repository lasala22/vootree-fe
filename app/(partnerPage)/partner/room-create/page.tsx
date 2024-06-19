"use client";
import {
  Checkbox,
  Col,
  Empty,
  Form,
  InputNumber,
  Radio,
  Row,
  Select,
  Table,
  Tag,
} from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";
const { Option } = Select;

const columns = [
  {
    title: "Loại phòng",
    dataIndex: "roomType",
    key: "roomType",
    render: (text, record) => <span>{record.roomType.typeName}</span>,
  },
  {
    title: "Sức chứa",
    dataIndex: "capacity",
    key: "capacity",
  },
  {
    title: "Giá",
    dataIndex: "price",
    key: "price",
    render: (text) => <span>{text.toLocaleString()} VNĐ</span>,
  },
  {
    title: "Dịch vụ ăn sáng",
    dataIndex: "serveBreakfast",
    key: "serveBreakfast",
    render: (serveBreakfast) => (
      <Tag color={serveBreakfast ? "green" : "red"}>
        {serveBreakfast ? "Có" : "Không"}
      </Tag>
    ),
  },
];
export default function RoomCreate() {
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [roomFacilities, setRoomFacilities] = useState([]);
  const [hotelNames, setHotelNames] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8080/api/hotels");
      const allData = await response.json();
      setData(allData);

      const uniqueHotelNames = [
        ...new Set(allData.map((item) => item.hotelName)),
      ];
      setHotelNames(uniqueHotelNames);
    };
    const getFacilities = async () => {
      const response = await fetch("http://localhost:8080/api/facilities");
      const facData = await response.json();
      setRoomFacilities(facData.filter((item: any) => item.facType === "ROOM"));
    };
    getFacilities();
    fetchData();
  }, []);

  useEffect(() => {
    if (!selectedHotel) {
      setFilteredData([]);
      return;
    }

    const selectedHotelData = data.find(
      (hotel) => hotel.hotelName === selectedHotel
    );
    if (selectedHotelData) {
      setFilteredData(selectedHotelData.rooms);
    } else {
      setFilteredData([]);
    }
  }, [selectedHotel, data]);

  const onChange = (value) => {
    setSelectedHotel(value);
  };

  const columns = [
    {
      title: "Loại phòng",
      dataIndex: "roomType",
      key: "roomType",
      render: (text, record) => <span>{record.roomType.typeName}</span>,
    },
    {
      title: "Sức chứa",
      dataIndex: "capacity",
      key: "capacity",
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      render: (text) => <span>{text.toLocaleString()} VNĐ</span>,
    },
    {
      title: "Dịch vụ ăn sáng",
      dataIndex: "serveBreakfast",
      key: "serveBreakfast",
      render: (serveBreakfast) => (
        <Tag color={serveBreakfast ? "green" : "red"}>
          {serveBreakfast ? "Có" : "Không"}
        </Tag>
      ),
    },
  ];

  const onFinish = () => {};

  return (
    <>
      <div className="p-20 px-40">
        <div className="w-9/12">
          <div>
            <span className="text-lg font-bold">Thông tin phòng</span>
          </div>
          <div className="mt-5">
            <Row className="border-4 rounded-md p-3">
              <Col span={20}>
                <span className="font-semibold text-lg">
                  Thiết lập phòng của bạn
                </span>
                <p>
                  Liệt kê khách sạn của bạn trên VooTreeVeeVuu bằng cách thiết
                  lập giá cả và chi tiết phòng cho một loại phòng{" "}
                  <span className="text-sky-600 font-semibold">
                    {" "}
                    (Bạn có thể thêm nhiều loại phòng khác sau!)
                  </span>
                </p>
              </Col>
              <Col span={4} className="text-end justify-end flex">
                <Image
                  src="/icon/partner/beds.png"
                  width={50}
                  height={50}
                  alt=""
                />
              </Col>
            </Row>
          </div>
          <div className="mt-10">
            <span className="text-lg font-bold">
              Chọn nơi ở muốn thêm phòng
            </span>
            <div className="mt-5 border rounded-md p-5">
              <Select
                className="w-80"
                size="large"
                showSearch
                placeholder="Chọn nơi nghỉ của bạn"
                optionFilterProp="label"
                value={selectedHotel}
                onChange={onChange}
              >
                {hotelNames.map((hotelName) => (
                  <Option key={hotelName} value={hotelName}>
                    {hotelName}
                  </Option>
                ))}
              </Select>
              <Table dataSource={filteredData} columns={columns} />
            </div>
          </div>
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <div className="mt-10">
              <span className="text-lg font-bold">
                Thông tin phòng và giá cả
              </span>
              <div className="border rounded-md p-5 mt-2">
                <strong>Thông tin cơ bản</strong>
                <Form.Item
                  className="mt-4 w-6/12"
                  name="roomType"
                  label="Tên phòng"
                  rules={[
                    { required: true, message: "Vui lòng chọn thông tin!" },
                  ]}
                >
                  <Select
                    showSearch
                    placeholder="Chọn tên lọa phòng"
                    optionFilterProp="children"
                    //     filterOption={filterOption}
                    size="large"
                    options={[
                      {
                        value: "1",
                        label: "Phòng Delux",
                      },
                      {
                        value: "2",
                        label: "Phòng thường",
                      },
                      {
                        value: "3",
                        label: "Phòng VIP",
                      },
                    ]}
                  />
                </Form.Item>
                <Form.Item
                  className="mt-4 "
                  name="roomSize"
                  label="Kích thước phòng"
                  rules={[
                    { required: true, message: "Vui lòng nhập thông tin!" },
                  ]}
                >
                  <InputNumber
                    className="w-52"
                    addonAfter="m²"
                    size="large"
                    min={1}
                  />
                </Form.Item>
                <Form.Item
                  className="mt-4 "
                  name="roomCapacity"
                  label="Sức chứa"
                  rules={[
                    { required: true, message: "Vui lòng nhập thông tin!" },
                  ]}
                >
                  <InputNumber
                    className="w-52"
                    size="large"
                    addonAfter="Người"
                    min={1}
                  />
                </Form.Item>
                <Form.Item
                  className="mt-4 "
                  name="roomPrice"
                  label="Giá mỗi đêm"
                  rules={[
                    {
                      required: true,
                      message: "Giá mỗi đêm ít nhất phải là 80,000 Vnđ!",
                    },
                  ]}
                >
                  <InputNumber
                    className="w-52"
                    size="large"
                    addonAfter="Vnđ"
                    min={80000}
                  />
                </Form.Item>
                <div>
                  <strong>Số lượng phòng</strong>
                  <p>
                    Bạn có bao nhiêu phòng loại này trong khuôn viên của mình?
                  </p>
                </div>
                <Form.Item
                  className="mt-2"
                  name="roomQuantity"
                  rules={[
                    { required: true, message: "Vui lòng nhập thông tin!" },
                  ]}
                >
                  <InputNumber
                    className="w-52"
                    size="large"
                    addonAfter="Phòng"
                    min={1}
                  />
                </Form.Item>
                <div>
                  <strong>Có bao gồm bữa sáng không?</strong>
                </div>
                <Form.Item className="mt-2" name="breakfast">
                  <Radio.Group size="large">
                    <Radio.Button value={true}>Bao gồm bữa sáng</Radio.Button>
                    <Radio.Button value={false}>
                      Không bao gồm bữa sáng
                    </Radio.Button>
                  </Radio.Group>
                </Form.Item>
              </div>
            </div>
            <div className="mt-10">
              <span className="text-lg font-bold">
                Dịch vụ & tiện ích phòng
              </span>
              <p>
                Những dịch vụ này được tìm thấy ở hầu hết các tài sản thành công
                của chúng tôi
              </p>
              <div className="border rounded-md p-2 mt-2">
                <Form.Item
                  name="roomFacilities"
                  rules={[
                    { required: true, message: "Vui lòng chọn thông tin!" },
                  ]}
                >
                  <Checkbox.Group className="font-semibold">
                    <Row gutter={[16, 16]}>
                      {roomFacilities.map((fac, index) => (
                        <Col span={8} key={index}>
                          <Checkbox value={fac.facId}>{fac.facName}</Checkbox>
                        </Col>
                      ))}
                    </Row>
                  </Checkbox.Group>
                </Form.Item>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
