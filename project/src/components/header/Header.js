import React from "react";
import { GridColumn, GridRow } from "emotion-flex-grid";
import "./HeaderMobile.css";
import "./HeaderDesktop.css";

export default function Header() {
  return (
    <div className="main-header">
      <GridRow justify="between">
        <img src="./images/shuriken.svg" alt="Header stars" />
        <div className="header-star-container">
          <img src="./images/star.svg" alt="Header star" />
          <img src="./images/star.svg" alt="Header star" />
        </div>
      </GridRow>

      <h1 className="header-title">
        All the <span style={{ fontWeight: "700" }}>experience</span> in the new
        credit card
      </h1>

      <div className="header-arrow-container">
        {/* arrow */}
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
        <GridColumn mx={["s", "m"]} className="analytics-users">
          <h5>Active users</h5>
          <h3>5000+</h3>
        </GridColumn>

        <GridColumn mx={["s", "m"]} className="analytics-downloads">
          <h5>Download</h5>
          <h3>30.3k</h3>
        </GridColumn>

        <GridColumn mx={["s", "m"]} className="analytics-reviews">
          <h5>Reviews</h5>
          <h3>1200+</h3>
        </GridColumn>
      </GridRow>

      <GridRow justify="center">
        <div className="credit-card-gradient">
          <GridRow
            justify="between"
            align="center"
            className="cc-gradient-header"
          >
            <GridRow align="center" className="cc-gradient-logo-container">
              <div>
                <img src="./images/star.svg" alt="Credit card logo" />
                <img src="./images/star.svg" alt="Credit card logo" />
              </div>
              <h1 className="cc-gradient-logo-text">Cardo</h1>
            </GridRow>
            <GridRow>
              <GridColumn className="cc-gradient-signal-container">
                <div></div>
              </GridColumn>
              <GridColumn className="cc-gradient-diagram">
                {/* venn diagram */}
                <div></div>
              </GridColumn>
            </GridRow>
          </GridRow>
          <div className="cc-gradient-chip">
            {/* chip inner design */}
            <div></div>
            <div></div>
          </div>
          <GridRow justify="between" className="cc-gradient-footer">
            <GridColumn>
              <h3 className="cc-gradient-amount">$12,445.00</h3>
              <h3 className="cc-gradient-number">**5678</h3>
            </GridColumn>
            <img src="./images/shurikens-white.svg" alt="credit card stars" />
          </GridRow>
        </div>
      </GridRow>
    </div>
  );
}
