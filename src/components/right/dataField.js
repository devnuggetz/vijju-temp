import React from "react";
import "./data-field.css";

function DataField({ title, subtitle }) {
  return (
    <div className="data-field">
      <div className="title">{title}</div>
      <div className="subtitle">{subtitle}</div>
    </div>
  );
}

export default DataField;
