import React from "react";
import "../css/loading.css";

export default function Loading() {
  return (
    <div className="loading">
      <h4>Loading...</h4>
      <div className="loaderWrapper">
        <div className="loader">
            <div className="loader loaderInner"></div>
        </div>
      </div>
    </div>
  );
}
