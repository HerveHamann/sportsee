import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
/**
 * Home page
 * @returns {JSX}
 */
const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="main">
        <Navbar />
        <div className="link">
          <NavLink to="/user/12">
            {" "}
            <button> Karl </button>
          </NavLink>
          <NavLink to="/user/18">
            {" "}
            <button> Cecillia </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
