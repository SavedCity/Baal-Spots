import React, { useState, useEffect } from "react";
import axios from "axios";
import { GridColumn, GridRow } from "emotion-flex-grid";

import "../../css/CCFeaturesMobile.css";
import "../../css/CCFeaturesDesktop.css";

export default function CCFeatures() {
  const [CCData, setCCData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchCCData();
  }, []);

  const fetchCCData = async () => {
    const data = await axios
      .get("https://mocki.io/v1/b9c63035-97c5-40a0-b45c-2abdf5261bdf")
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
        setError(true);
      });

    setCCData(data);
    setLoading(false);
  };

  const pageReload = () => {
    window.location.reload();
  };

  return (
    <GridRow
      direction="column"
      justify="center"
      // align="center"
      className="cc-features-container"
    >
      <h1>Experience The Cardo</h1>
      <div className="cc-feature-content-container">
        {error ? (
          <div>
            <p className="data-error">There was an error aquiring the data</p>
            <button onClick={pageReload}>Reload page</button>
          </div>
        ) : loading ? (
          <div className="loading-container">
            {/* loaders */}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          CCData.slice(0, 6).map((feature, index) => {
            const { title, description, button } = feature;
            return (
              <GridColumn m={["l"]} key={index} className="cc-feature-card">
                <h3 className="cc-feature-title">{title}</h3>
                <p className="cc-feature-description">{description}</p>
                <a
                  className="cc-feature-btn"
                  href={button.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {button.text}
                </a>
              </GridColumn>
            );
          })
        )}
      </div>
    </GridRow>
  );
}
