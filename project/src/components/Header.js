import React from "react";
import { GridRow } from "emotion-flex-grid";
import "@fontsource/plus-jakarta-sans";
import "@fontsource/plus-jakarta-sans/700.css";

export default function Header() {
  return (
    <div className="main-header">
      <GridRow justify="between">
        <img src="./images/shuriken.svg" alt="Header star1" />
        <div className="header-star-container">
          <img src="./images/star.svg" alt="Header star1" />
          <img src="./images/star.svg" alt="Header star1" />
        </div>
      </GridRow>

      <h1 className="header-title">
        All the <span style={{ fontWeight: "700" }}>experience</span> in the new
        credit card
      </h1>

      <div className="header-arrow-container">
        <div></div>
      </div>

      <p className="header-about">
        Simple transfers, payments for utilities, functional statemement, card
        settings, for which you used to have to go too the brach oonline-banking
      </p>

      <GridRow align="center" className="header-card-btn-container">
        <button>Order a card</button>
        <button>How it works</button>
      </GridRow>

      <GridRow justify="between" className="analytics-container">
        <div className="analytics-users">
          <h5>Active users</h5>
          <h3>5000+</h3>
        </div>

        <div className="analytics-downloads">
          <h5>Download</h5>
          <h3>30.3k</h3>
        </div>

        <div className="analytics-reviews">
          <h5>Reviews</h5>
          <h3>1200+</h3>
        </div>
      </GridRow>

      <div className="credit-card">
        <GridRow align="center" className="credit-card-header">
          <div>
            <img src="./images/star.svg" alt="Credit card logo" />
            <img src="./images/star.svg" alt="Credit card logo" />
          </div>
          <h1 className="credit-card-logo-text">Cardo</h1>
          <div>
            <div className="credit-card-diagram">
              <div></div>
            </div>
          </div>
        </GridRow>
      </div>
    </div>
  );
}
