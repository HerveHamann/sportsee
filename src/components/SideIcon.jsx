import React from "react";
import calories from "../assets/img/calories.svg";
import glucides from "../assets/img/glucides.svg";
import lipides from "../assets/img/lipides.svg";
import protein from "../assets/img/protein.svg";
import propTypes from "prop-types";

/**
 * SideIcon component
 * @param {string} type
 * @param {number} amount
 * @returns {JSX}
 */

const SideIcon = ({ type, amount }) => {
  let imageContent = {
    Calories: calories,
    Proteines: protein,
    Glucides: glucides,
    Lipides: lipides,
  };
  const ImageRender = (item) => imageContent[item];
  let renderedImage = ImageRender(type);
  let units = type === "Calories" ? "kCal" : "g";

  return (
    <div className="side-icon">
      <img src={renderedImage} alt={type} />
      <div className="text-content">
        <span className="amount">
          {amount}
          {units}
        </span>
        <br />
        <span className="type">{type}</span>
      </div>
    </div>
  );
};

SideIcon.propTypes = {
  type: propTypes.string.isRequired,
  amount: propTypes.number.isRequired,
};

export default SideIcon;
