import React from "react";
import { GridColumn, GridRow } from "emotion-flex-grid";
import "./NavBarMobile.css";

export default function NavBar() {
  return (
    <GridRow className="main-nav" justify="between" align="center">
      <GridRow className="nav-logo-container" align="center">
        <GridColumn mr={["m"]}>
          <img src="./images/star.svg" alt="Main Logo" />
          <img src="./images/star.svg" alt="Main Logo" />
        </GridColumn>
        <h1 className="nav-logo-text">Cardo</h1>
      </GridRow>
      <div className="hamburger-menu">
        {/* hamburger menu */}
        <div></div>
        <div></div>
        <div></div>
      </div>
    </GridRow>
  );
}
