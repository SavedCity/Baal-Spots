import React from "react";
import "../css/Mobile.css";
import { GridRow } from "emotion-flex-grid";

export default function NavBar() {
  return (
    <GridRow className="main-nav" justify="between" align="center">
      <GridRow className="nav-logo-container" align="center">
        <div>
          <img src="./images/star.svg" alt="Main Logo" />
          <img src="./images/star.svg" alt="Main Logo" />
        </div>
        <h1 className="nav-logo-text">Cardo</h1>
      </GridRow>
      <div className="hamburger-menu">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </GridRow>
  );
}
