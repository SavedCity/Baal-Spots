import React from "react";
import NavBar from "./components/navbar/NavBar";
import Header from "./components/header/Header";
import CCFeatures from "./components/credit-c-features/CCFeatures";
import Menu from "./components/menu/Menu";
import HeaderDisplay from "./components/header/HeaderDisplay";

import "./css/Main.css";
import "@fontsource/plus-jakarta-sans";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/plus-jakarta-sans/500.css";

export default function Main() {
  return (
    <div>
      <div className="main-header-container">
        <div className="main-left-content-container">
          <NavBar />
          <Menu />
          <Header />
        </div>
        <HeaderDisplay />
      </div>
      <CCFeatures />
    </div>
  );
}
