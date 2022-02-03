import React from "react";
import NavBar from "./components/navbar/NavBar";
import Header from "./components/header/Header";
import CcFeatures from "./components/cc-features/CcFeatures";
import "./css/Main.css";
import "./css/Mobile.css";

export default function Main() {
  return (
    <div>
      <NavBar />
      <Header />
      <CcFeatures />
    </div>
  );
}
