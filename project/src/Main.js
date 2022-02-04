import React from "react";
import NavBar from "./components/navbar/NavBar";
import Header from "./components/header/Header";
import CCFeatures from "./components/credit-c-features/CCFeatures";
import "./css/Main.css";
import "./css/Mobile.css";
import "@fontsource/plus-jakarta-sans";
import "@fontsource/plus-jakarta-sans/700.css";
import Menu from "./components/menu/Menu";
import CCDisplay from "./components/credit-c-display/CCDisplay";

export default function Main() {
  return (
    <div>
      <div className="main-header-container">
        <div className="main-left-content-container">
          <NavBar />
          <Menu />
          <Header />
        </div>
        <CCDisplay />
      </div>
      <CCFeatures />
    </div>
  );
}
