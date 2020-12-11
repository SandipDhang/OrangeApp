import React from "react";
import "../../style.css";

const Header = () => {
  return (
    <div className="Headercontainer">
      <select>
        <option defaultValue>Select Location</option>
      </select>
      <ul>
        <li>
          <img src="/d-logo.png" alt="BrandLogo" />
        </li>
        <li className="listItem">Order Now</li>
        <li className="listItem">About Us</li>
        <li className="listItem">Our Farms</li>
      </ul>
    </div>
  );
};

export default Header;
