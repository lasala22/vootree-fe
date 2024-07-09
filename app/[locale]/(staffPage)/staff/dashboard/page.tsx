"use client";
import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  HomeOutlined,
  CheckSquareOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Bookings from "../components/Bookings";
import Dashboard from "../components/Dashboard";
import Profile from "../components/Profile";
import Customer from "../components/Customer";
import Partner from "../components/Partner";
import Hotels from "../components/Hotels";
import Hotelcensorship from "../components/Hotelcensorship";
import Roomcensorship from "../components/Roomcensorship";
import StatisticsHotel from "../components/StatisticsHotel";
import StatisticsRoom from "../components/StatisticsRoom";
import StatisticsRevenue from "../components/StatisticsRevenue";

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Dashboard", "dashboard1", <AppstoreOutlined />),
  getItem("Profile", "profile1", <UserOutlined />),
  getItem("User management", "user1", <TeamOutlined />, [
    getItem("Customer", "customer1"),
    getItem("Partner", "partner1"),
  ]),
  getItem("Hotel management", "hotelmanagement1", <HomeOutlined />, [
    getItem("Hotels", "hotel1"),
    getItem("Bookings", "booking1"),
  ]),
  getItem("Censorship", "censorship1", <CheckSquareOutlined />, [
    getItem("Hotels censorship", "hotelcensorship1"),
    getItem("Rooms censorship", "roomcensorship1"),
  ]),
  // getItem("Hotel censorship", "hotelcensorship1", <CheckSquareOutlined />),
  getItem("Statistics", "statistics1", <PieChartOutlined />, [
    getItem("Hotels", "hotelstatistics"),
    getItem("Rooms", "roomstatistics"),
    getItem("Revenue", "revenuetatistics"),
  ]),
];

const Sidebar2 = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [selectedKeys, setSelectedKeys] = useState(["dashboard1"]);
  const [breadcrumbItems, setBreadcrumbItems] = useState([
    { title: "Dashboard" },
  ]);

  // keyPath: Một mảng chứa các key của các mục menu từ mục con đến mục cha.
  // keyPath.reverse() đảo ngược mảng keyPath để có thứ tự từ mục cha đến mục con.

  const handleMenuClick = ({ key, keyPath }) => {
    const itemPath = keyPath.reverse();
    const breadcrumbPath = itemPath.map((key) => {
      const item = findMenuItem(items, key);
      return { title: item.label };
    });
    setSelectedKeys(itemPath);

    setBreadcrumbItems(breadcrumbPath);
  };

  const findMenuItem = (menuItems, key) => {
    for (const item of menuItems) {
      if (item.key === key) {
        return item;
      }
      if (item.children) {
        const found = findMenuItem(item.children, key);
        if (found) {
          return found;
        }
      }
    }
    return null;
  };

  const renderContent = () => {
    switch (selectedKeys[selectedKeys.length - 1]) {
      case "dashboard1":
        return <Dashboard />;
      case "profile1":
        return <Profile />;
      case "customer1":
        return <Customer />;
      case "partner1":
        return <Partner />;
      case "hotel1":
        return <Hotels />;
      case "booking1":
        return <Bookings />;
      case "hotelcensorship1":
        return <Hotelcensorship />;
      case "roomcensorship1":
        return <Roomcensorship />;
      case "hotelstatistics":
        return <StatisticsHotel />;
      case "roomstatistics":
        return <StatisticsRoom />;
      case "revenuetatistics":
        return <StatisticsRevenue />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          onClick={handleMenuClick}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />

        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb style={{ margin: "16px 0" }} items={breadcrumbItems} />

          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {renderContent()}
          </div>
        </Content>

        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Vootreeveevuu Design ©{new Date().getFullYear()} Created by Vootree
          Team
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Sidebar2;
