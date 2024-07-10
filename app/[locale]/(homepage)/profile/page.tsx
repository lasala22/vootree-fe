"use client";
import React, { useState } from "react";
import {
  UserOutlined,
  AppstoreOutlined,
  FormOutlined,
  UnorderedListOutlined,
  BookOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import MyProfile from "./components/MyProfile";
import NewPass from "./components/NewPass";
import HistoryBooking from "./components/HistoryBooking";
import MyBooking from "./components/MyBooking";
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
  getItem("Profile", "profile1", <UserOutlined />),
  getItem("Change Password", "newpass1", <FormOutlined />),

  getItem("Purchase List", "historybooking1", <UnorderedListOutlined />),
  getItem("My Booking", "myBooking", <BookOutlined />),
];

const SidebarProfile = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [selectedKeys, setSelectedKeys] = useState(["profile1"]);
  const [breadcrumbItems, setBreadcrumbItems] = useState([
    { title: "Profile" },
  ]);

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
      case "newpass1":
        return <NewPass />;
      case "profile1":
        return <MyProfile />;
      case "historybooking1":
        return <HistoryBooking />;
      case "myBooking":
        return <MyBooking />;
      default:
        return <MyProfile />;
    }
  };
  return (
    <Layout>
      <Content
        style={{
          padding: "0 300px",
        }}
      >
        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Sider
            style={{
              background: colorBgContainer,
            }}
            width={200}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{
                height: "100%",
              }}
              items={items}
              onClick={handleMenuClick}
            />
          </Sider>
          <Content
            style={{
              padding: "0 24px",
              minHeight: 280,
            }}
          >
            {renderContent()}
          </Content>
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      ></Footer>
    </Layout>
  );
};
export default SidebarProfile;
