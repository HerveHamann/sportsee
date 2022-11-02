import React from "react";
import cycleicon from "../../assets/img/cycleicon.svg";
import halticon from "../../assets/img/halticon.svg";
import swimicon from "../../assets/img/swimicon.svg";
import yogaicon from "../../assets/img/yogaicon.svg";

/**
 * Navbar componant
 * @returns {JSX}
 */

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navicon">
        <div className="yogaicon">
          <img src={yogaicon} alt="yoga" />
        </div>
        <div className="swimicon">
          <img src={swimicon} alt="swim" />
        </div>
        <div className="cycleicon">
          <img src={cycleicon} alt="cycle" />
        </div>
        <div className="halticon">
          <img src={halticon} alt="halt" />
        </div>
      </div>
      <p>Copiryght, SportSee 2020</p>
    </div>
  );
};

export default Navbar;
