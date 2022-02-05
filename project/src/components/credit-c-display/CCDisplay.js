import { GridColumn, GridRow } from "emotion-flex-grid";
import React from "react";
import "./CCDisplay.css";

export default function CCDisplay() {
  return (
    <GridRow
      align="center"
      justify="center"
      direction="column"
      className="main-right-content-container"
    >
      <img className="cc-design-hand" src="./images/hand.png" alt="hand" />
      <img src="./images/wave-lines.svg" alt="wavy lines design" />

      <div className="cc-display-star-container">
        <img src="./images/stars/single-black-star.svg" alt="Black star" />
        <img src="./images/stars/single-black-star.svg" alt="Black star" />
      </div>
      <div className="credit-card-white">
        <GridRow justify="between" align="center" className="cc-white-header">
          <GridRow align="center" className="cc-white-logo-container">
            <div>
              <img
                src="./images/stars/lavender-double-stars.png"
                alt="Credit card logo"
              />
            </div>
            <h1 className="cc-white-logo-text">Cardo</h1>
          </GridRow>
          <GridRow>
            <GridColumn className="cc-white-signal-container">
              <img src="./images/signal-icon.png" alt="signal icon" />
            </GridColumn>
            <GridColumn className="cc-white-diagram">
              {/* venn diagram */}
              <div></div>
            </GridColumn>
          </GridRow>
        </GridRow>
        <div className="cc-white-chip">
          {/* chip inner design */}
          <img src="./images/credit-card-chip.png" alt="signal icon" />
        </div>
        <GridRow justify="between" className="cc-white-footer">
          <GridColumn>
            <h3 className="cc-white-name">MAURICIO LÓPEZ</h3>
            <h3 className="cc-white-number">5678</h3>
          </GridColumn>
          <img
            src="./images/stars/shurikens-light-lavender.svg"
            alt="credit card stars"
          />
        </GridRow>
      </div>
    </GridRow>
  );
}
