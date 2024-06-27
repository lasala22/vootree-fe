import { Button, Col, Divider, Row, message } from "antd";
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import axios from "axios";
import { ConsoleSqlOutlined } from "@ant-design/icons";
export default function PriceInfo({
  roomData,
  rooms,
  daysCount,
  guests,
  checkInDate,
  checkOutDate,
  fullName,
  phoneNum,
  email,
}) {
  const roomType = roomData?.roomType?.typeName;
  const roomPrice = roomData?.price;
  const roomId = roomData?.id;
  const hotelName = roomData ? roomData?.hotel?.hotelName : "Không tồn tại";
  const hotelPhoneNum = roomData
    ? roomData?.hotel?.hotelPhoneNum
    : "Không tồn tại";
  const address = roomData ? roomData?.hotel?.address : "Không tồn tại";
  const checkInTime = roomData ? roomData?.hotel?.checkInTime : "không tồn tại";
  const checkOutTime = roomData
    ? roomData?.hotel?.checkOutTime
    : "không tồn tại";
  const ownerEmail = roomData?.ownerEmail;

  const [price, setPrice] = useState(0);
  const [tax, setTax] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const router = useRouter();

  const checkToken = () => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decode = jwtDecode(token);
        const userId = decode?.user_id;
        return userId; // Trả về id nếu cần
      } catch (error) {
        console.error("Lỗi giải mã token:", error);
        return null;
      }
    } else {
      return null;
    }
  };

  useEffect(() => {
    const price = roomPrice * rooms * daysCount;
    const tax = (price * 5) / 100;
    const total = price + tax;
    setTotalPrice(total);
    setTax(tax);
    setPrice(price);
  }, [rooms, daysCount, roomPrice]);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  };

  const handleBooking = async () => {
    const userId = checkToken();
    if (userId === null) {
      localStorage.setItem("bookingHref", window.location.href);
      message.error("Bạn cần đăng nhập để truy cập.");
      router.push("/login");
    } else {
      const bookingDate = dayjs().format("YYYY-MM-DD");
      const checkIn = checkInDate;
      const checkOut = checkOutDate;
      const values = {
        bookingDate: bookingDate,
        check_in_date: checkIn,
        check_out_date: checkOut,
        total_price: totalPrice,
        //  status: "PENDING",
        num_of_rooms: rooms,
        num_of_guest: guests,
        userId: userId,
        roomId: roomId,
      };
      console.log(values);
      try {
        const response = await axios.post(
          "http://localhost:8080/api/bookings",
          values
        );
        console.log(response.data.id);
        if (response.status === 201) {
          const paymentValues = {
            amount: totalPrice.toString(),
            bookingId: response.data.id,
            userId: userId,
          };
          const paymentObject = {
            amount: totalPrice.toString(),
            bookingId: response.data.id,
            userId: userId,
            bookingDate: bookingDate,
            check_in_date: checkIn,
            check_out_date: checkOut,
            total_price: totalPrice,
            num_of_rooms: rooms,
            num_of_guests: guests,
            email: email,
            fullName: fullName,
            phoneNum: phoneNum,
            hotelName: hotelName,
            roomType: roomType,
            address: address,
            checkInTime: checkInTime,
            checkOutTime: checkOutTime,
            hotelPhoneNum: hotelPhoneNum,
            ownerEmail: ownerEmail,
          };
          localStorage.setItem("bookingInfo", JSON.stringify(paymentObject));
          const queryString = new URLSearchParams(paymentValues).toString();
          const payment = await axios.post(
            `http://localhost:8080/api/payment/create?${queryString}`
          );

          console.log(payment.data.data);
          if (payment.status === 200) {
            const paymentUrl = payment.data.data;
            console.log(payment.data);
            window.location.href = paymentUrl;
          }
          message.success("Bạn đã đăng kí thành công!");
        }
      } catch (error) {
        console.error("Failed to submit data:", error);
        message.error("Failed to submit data");
      }
    }
  };

  return (
    <>
      <div className="text-start items-center ">
        <div>
          <strong className="text-lg">Chi tiết giá</strong>
        </div>
        <div>
          <span className="text-sm text-blue-500">
            Thuế và phí là các khoản được Traveloka chuyển trả cho khách sạn.
            Mọi thắc mắc về thuế và hóa đơn, vui lòng tham khảo Điều khoản và
            Điều kiện của Traveloka để được giải đáp
          </span>
        </div>
      </div>
      <Divider />
      <Row className="w-full">
        <Col span={12}>
          <p className="text-lg">Giá phòng</p>
          <p>
            ({rooms}x) {roomType} ({daysCount} night)
          </p>
        </Col>
        <Col span={12} className="text-end justify-end items-center flex ">
          <p className="text-lg">{formatCurrency(price)}</p>
        </Col>
      </Row>
      <Row className="w-full mt-3">
        <Col span={12} className="text-start justify-start items-center flex">
          <p className="text-lg">Thuế & Phí</p>
        </Col>
        <Col span={12} className="text-end justify-end items-center flex ">
          <p className="text-lg">{formatCurrency(tax)}</p>
        </Col>
      </Row>
      <Divider />
      <Row className="w-full mt-3">
        <Col span={12} className="text-start justify-start items-center flex">
          <strong className="text-xl">Tổng tiền</strong>
        </Col>
        <Col span={12} className="text-end justify-end items-center flex ">
          <strong className="text-xl text-orange-600">
            {formatCurrency(totalPrice)}
          </strong>
        </Col>
      </Row>
      <Row className="justify-center mt-6">
        <Button
          style={{ width: "75%", height: "40px" }}
          type="primary"
          danger
          onClick={handleBooking}
        >
          <strong className="text-xl">Tiếp tục thanh toán</strong>
        </Button>
      </Row>
    </>
  );
}
