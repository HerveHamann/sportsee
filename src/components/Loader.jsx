import React from "react";
/**
 * Loader componant
 * @returns {JSX}
 */

const Loader = () => {
  return (
    <div className="center">
      <div className="ring"></div>
      <span>Loading...</span>
    </div>
  );
};

export default Loader;
