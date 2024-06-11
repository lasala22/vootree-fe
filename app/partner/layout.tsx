import React from "react";
import styles from "./style.module.css";
import Navbar from "./components/nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <Navbar searchbar="" logo="/logo-partner.png" />
      </header>
      <div className="">{children}</div>
    </>
  );
}
