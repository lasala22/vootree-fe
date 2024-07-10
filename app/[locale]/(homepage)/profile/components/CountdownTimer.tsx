import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Tag } from "antd";

const CountdownTimer = ({ expiration }) => {
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = Date.now();
      const remaining = expiration - currentTime;

      if (remaining <= 0) {
        clearInterval(interval);
        setRemainingTime(0);
      } else {
        setRemainingTime(remaining);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [expiration]);

  const formatTime = (milliseconds) => {
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);

    return `${minutes} : ${seconds}`;
  };

  return (
    <div>
      {remainingTime > 0 ? (
        <Tag color="#007ce8" className="text-semibold">
          <p className="text-lg">
            Đang đợi chọn phương thức thanh toán • {formatTime(remainingTime)}
          </p>
        </Tag>
      ) : (
        <p>Hết hạn</p>
      )}
    </div>
  );
};

export default CountdownTimer;
