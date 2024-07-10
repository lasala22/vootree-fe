"use client";
import React, { useEffect, useState } from "react";
import { Spin } from "antd";
import Homepage from "./components/homepage";

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 1 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // Clear the timer when the component unmounts
  }, []);

  return (
    <div style={{ padding: "20px" }}>
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
        <Homepage />
      )}
    </div>
  );
}
