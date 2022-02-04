import { GridColumn, GridRow } from "emotion-flex-grid";
import React from "react";
import "./CCDisplay.css";

export default function CCDisplay() {
  return (
    <div className="cc-display-container">
      <img src="./images/hand.png" alt="hand" />
      <div className="credit-card-white">
        <GridRow justify="between" align="center" className="cc-white-header">
          <GridRow align="center" className="cc-white-logo-container">
            <div>
              <img src="./images/star.svg" alt="Credit card logo" />
              <img src="./images/star.svg" alt="Credit card logo" />
            </div>
            <h1 className="cc-white-logo-text">Cardo</h1>
          </GridRow>
          <GridRow>
            <GridColumn className="cc-white-signal-container">
              <div></div>
            </GridColumn>
            <GridColumn className="cc-white-diagram">
              {/* venn diagram */}
              <div></div>
            </GridColumn>
          </GridRow>
        </GridRow>
        <div className="cc-white-chip">
          {/* chip inner design */}
          <div></div>
          <div></div>
        </div>
        <GridRow justify="between" className="cc-white-footer">
          <GridColumn>
            <h3 className="cc-white-name">MAURICIO LÓPEZ</h3>
            <h3 className="cc-white-number">5678</h3>
          </GridColumn>
          <img
            src="./images/shurikens-light-lavender.svg"
            alt="credit card stars"
          />
        </GridRow>
      </div>
    </div>
  );
}
