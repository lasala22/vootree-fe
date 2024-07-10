import React, { useEffect, useState } from "react";
import { Button, Card, Col, Collapse, Row } from "antd";
import dayjs from "dayjs";
import CountdownTimer from "./CountdownTimer";

const MyBooking = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const loadBookings = () => {
      const bookingsArray = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith("bookingData_")) {
          const bookingData = JSON.parse(localStorage.getItem(key));
          bookingsArray.push({
            key: key,
            data: bookingData.data,
            expiration: bookingData.expiration,
          });
        }
      }
      setBookings(bookingsArray);
    };

    loadBookings();
  }, []);

  useEffect(() => {
    clearExpiredBookings(); // Xóa dữ liệu hết hạn khi component được render
  }, []);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  const clearExpiredBookings = () => {
    const now = Date.now();
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("bookingData_")) {
        const item = JSON.parse(localStorage.getItem(key));
        if (item && item.expiration < now) {
          localStorage.removeItem(key); // Xóa dữ liệu đã hết hạn
        }
      }
    }
  };

  const handlePayment = async (bookingId) => {};

  return (
    <div className="p-10">
      <div>
        <p className="text-2xl font-semibold">Đang mua hàng</p>
      </div>
      <div className="mt-5">
        {bookings.map((booking) => (
          <Collapse
            key={booking.key}
            items={[
              {
                showArrow: false,
                key: `${booking.key}`,
                label: (
                  <div className="p-2 flex">
                    <div className="w-6/12">
                      <span className="text-lg text-sky-600 font-semibold">
                        {booking.data.hotelName}
                      </span>
                      <p className="text-sky-500 font-semibold">
                        Phòng: {booking.data.roomType}
                      </p>
                      <p className="text-stone-500 font-semibold">
                        Mã đặt chỗ VooTreeVeeVuu:{" "}
                        <span className="font-bold">
                          {" "}
                          {booking.data.bookingId}
                        </span>
                      </p>
                      <div className="mt-2">
                        <CountdownTimer expiration={booking.expiration} />
                      </div>
                    </div>
                    <div className="w-6/12 text-end items-center pt-5">
                      <p className="text-red-500 text-lg font-bold">
                        {formatPrice(booking.data.total_price)}
                      </p>
                      <Button
                        type="text"
                        className="text-sky-600 font-bold hover:underline"
                        onClick={() => handlePayment(booking.data.bookingId)}
                      >
                        Tiếp tục thanh toán
                      </Button>
                    </div>
                  </div>
                ),
                children: (
                  <div className="font-semibold">
                    <div>
                      <div>
                        <span>Ngày nhận/trả phòng:</span>{" "}
                        <span className="text-sky-500">
                          {dayjs(booking.data.check_in_date).format(
                            "DD-MM-YYYY"
                          )}{" "}
                          /{" "}
                          {dayjs(booking.data.check_out_date).format(
                            "DD-MM-YYYY"
                          )}
                        </span>
                      </div>
                    </div>
                    <div className="mt-2">
                      <span>Số người/phòng:</span>{" "}
                      <span className="text-sky-500">
                        {booking.data.num_of_guests} Người /{" "}
                        {booking.data.num_of_rooms} Phòng
                      </span>
                    </div>
                  </div>
                ),
              },
            ]}
          />
        ))}
      </div>
    </div>
  );
};

export default MyBooking;
