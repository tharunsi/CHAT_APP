import React from "react";
import "./GenderCheckbox.css";

const GenderCheckbox = () => {
  return (
    <div className="gender-checkbox-container">
      <div className="gender-option">
        <label className="gender-label">
          <span className="gender-text">Male</span>
          <input type="checkbox" className="gender-input" />
        </label>
      </div>

      <div className="gender-option">
        <label className="gender-label">
          <span className="gender-text">Female</span>
          <input type="checkbox" className="gender-input" />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;