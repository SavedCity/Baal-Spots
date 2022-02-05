import React from "react";
import { GridColumn, GridRow } from "emotion-flex-grid";
import "./NavBarMobile.css";
import "./NavBarDesktop.css";

export default function NavBar() {
  const toggleMenu = () => {
    let menu = document.getElementById("menu-container");
    let body = document.querySelector("body");
    let hamburger = document.getElementById("hamburger-menu");

    if (menu.classList.contains("show")) {
      hamburger.classList.remove("active");
      menu.classList.remove("show");
      body.style.overflow = "auto";
    } else {
      menu.classList.add("show");
      hamburger.classList.add("active");
      body.style.overflow = "hidden";
    }
  };

  return (
    <GridRow className="main-nav" justify="between" align="center">
      <GridRow className="nav-logo-container" align="center">
        <GridColumn mr={["m"]}>
          <img src="./images/stars/single-black-star.svg" alt="Main Logo" />
          <img src="./images/stars/single-black-star.svg" alt="Main Logo" />
        </GridColumn>
        <h1 className="nav-logo-text">Cardo</h1>
      </GridRow>
      <GridRow className="header-link-container">
        <ul>
          <li>
            <a href="https://baalspots.com/" target="_blank" rel="noreferrer">
              Deposit
            </a>
          </li>
          <li>
            <a href="https://baalspots.com/" target="_blank" rel="noreferrer">
              Dashboard
            </a>
          </li>
          <li>
            <a href="https://baalspots.com/" target="_blank" rel="noreferrer">
              Company
            </a>
          </li>
          <li>
            <a href="https://baalspots.com/" target="_blank" rel="noreferrer">
              Pricing
            </a>
          </li>
        </ul>
      </GridRow>
      <div onClick={toggleMenu} id="hamburger-menu">
        {/* hamburger menu */}
        <div></div>
        <div></div>
        <div></div>
      </div>
    </GridRow>
  );
}
