"use client";
import React, { useEffect, useState } from "react";
import { Layout, Menu, Spin } from "antd";
import { LineChartOutlined, BarChartOutlined } from "@ant-design/icons";
import StatisticsHotel from "./components/StatisticsHotel";
import StatisticsRoom from "./components/StatisticsRoom";

const { Sider, Content } = Layout;

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState("1");

  useEffect(() => {
    // Simulate loading for 1 second
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // Clear the timer when the component unmounts
  }, []);

  const handleMenuClick = (e) => {
    setSelectedMenu(e.key);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
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
        <Layout>
          <Sider>
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              onClick={handleMenuClick}
            >
              <Menu.Item key="1" icon={<LineChartOutlined />}>
                Hotel Statistics
              </Menu.Item>
              <Menu.Item key="2" icon={<BarChartOutlined />}>
                Room Statistics
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ padding: "20px" }}>
              {selectedMenu === "1" && (
                <div style={{ marginBottom: "20px" }}>
                  <StatisticsHotel />
                </div>
              )}
              {selectedMenu === "2" && (
                <div>
                  <StatisticsRoom />
                </div>
              )}
            </Content>
          </Layout>
        </Layout>
      )}
    </Layout>
  );
}
