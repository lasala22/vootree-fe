"use client";
import React, { useEffect, useState } from "react";
import NavbarHome from "./nav";
import SearchBarHome from "@/app/[locale]/(homepage)/home/components/searchBarHomePage";
import Navbar from "@/app/[locale]/(homepage)/hotels/components/nav";
import style from "./style.module.css";
export default function HeaderLayout() {
  const [isHome, setIsHome] = useState(false);
  useEffect(() => {
    setIsHome(window.location.pathname === "/home");
  }, []);
  return (
    <header>
      {isHome ? (
        <>
          <NavbarHome bg={style.homeHeader} logo="/logo_preview_rev_2.png" />
          <div className="w-full">
            <SearchBarHome />
          </div>
        </>
      ) : (
        <Navbar bg={style.header} searchbar="" logo="/logo_preview_rev_1.png" />
      )}
    </header>
  );
}
