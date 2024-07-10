"use client";
import React, { useEffect, useState } from "react";
import { Spin, Layout } from "antd";
import Navbar from "./components/nav";

export default function Layouts({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 1 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // Clear the timer when the component unmounts
  }, []);

  return (
    <Layout>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Spin tip="Loading" size="large" />
        </div>
      ) : (
        <>
          <header>
            <Navbar searchbar="" logo="/logo-partner.png" />
          </header>
          <div className="">{children}</div>
        </>
      )}
    </Layout>
  );
}
