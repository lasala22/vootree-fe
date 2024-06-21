"use client";

import { useEffect, useState } from "react";
import BookingInfo from "../components/booking-info";
import CustomerInfo from "../components/customer-info";
import PriceInfo from "../components/price-info";
import SelectedInfo from "../components/selected-info";

export default function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [daysCount, setDaysCount] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [guests, setGuests] = useState(2);
  const [roomData, setRoomData] = useState([]);
  const [dayPicker, setDayPicker] = useState();
  const [formattedStartDate, setFormattedStartDate] = useState("");
  const [formattedEndDate, setFormattedEndDate] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8080/api/rooms/${id}`); // API backend trả về toàn bộ giá trị
      const allData = await response.json();
      setRoomData(allData); // Lưu trữ toàn bộ dữ liệu
    };
    fetchData();
  }, [id]);

  return (
    <>
      <div className="mx-32 flex gap-5" style={{ height: "1000px" }}>
        <div
          style={{ width: "65%" }}
          className="border p-5 rounded-lg shadow-lg"
        >
          <CustomerInfo />
          <p className="font-bold mt-5">Chọn thông tin nhận phòng</p>
          <div className="rounded-sm shadow-sm border  w-full p-5 mt-2">
            <SelectedInfo
              setDaysCount={setDaysCount}
              setRooms={setRooms}
              setGuests={setGuests}
              setDayPicker={setDayPicker}
              setFormattedStartDate={setFormattedStartDate}
              setFormattedEndDate={setFormattedEndDate}
              setCheckInDate={setCheckInDate}
              setCheckOutDate={setCheckOutDate}
            />
          </div>
          <div className="rounded-sm shadow-sm border w-full p-5 mt-5">
            <PriceInfo
              roomData={roomData}
              daysCount={daysCount}
              rooms={rooms}
              guests={guests}
              checkInDate={checkInDate}
              checkOutDate={checkOutDate}
            />
          </div>
        </div>
        <div style={{ width: "35%" }} className="">
          <div className="border p-5 rounded-lg shadow-lg">
            <BookingInfo
              daysCount={daysCount}
              rooms={rooms}
              guests={guests}
              roomData={roomData}
              formattedStartDate={formattedStartDate}
              formattedEndDate={formattedEndDate}
            />
          </div>
          <div className="border p-5 rounded-lg shadow-lg mt-5">
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
