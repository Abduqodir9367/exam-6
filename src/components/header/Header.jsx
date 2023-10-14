import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="nav-links">
          <div className="lft">
            <h2>Products</h2>
            <p>Home / Products</p>
          </div>
          <button className="exit">
            <img src="../Exit.png" alt="icon" />
            Exit
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
