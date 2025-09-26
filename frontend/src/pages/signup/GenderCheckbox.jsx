import React from "react";
import "./GenderCheckbox.css";

const GenderCheckbox = ({onCheckboxChange,selectedGender}) => {
  return (
    <div className="gender-checkbox-container">
      <div className="gender-option">
        <label className={`gender-label ${selectedGender === "male" ? "selected" : ""} `}>
          <span className="gender-text">Male</span>
          <input type="checkbox" className="gender-input" 
          checked={selectedGender === "male"} onChange={() => onCheckboxChange("male")} />
        </label>
      </div>

      <div className="gender-option">
        <label className={`gender-label ${selectedGender === "female" ? "selected" : ""} `}>
          <span className="gender-text">Female</span>
          <input type="checkbox" className="gender-input"
          checked={selectedGender === "female"} onChange={() => onCheckboxChange("female")} />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;