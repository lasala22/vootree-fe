"use client";
import Navbar from "@/components/nav";
import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import SearchBar from "./components/searchBarHomePage";
import { Layout, Spin } from "antd";
export default function Layouts({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Giả lập loading trong 2 giây
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // Xóa timer khi component bị unmount
  }, []);

  return (
    <>
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
            <Spin size="large" />
          </div>
        ) : (
          <>
            <header>
              <Navbar bg={styles.header} logo="/logo_preview_rev_2.png" />
              <div className="w-full">
                <SearchBar />
              </div>
            </header>
            <div className="mt-36">{children}</div>
          </>
        )}
      </Layout>
    </>
  );
}
