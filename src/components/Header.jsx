import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div className="nav">
      <a className="navstart">
        <Link to="/" className="push">
          <h2 className="push lsans" style={{ fontSize: "2rem" }}>
            native.
          </h2>
        </Link>
      </a>
      <div className="navlinks">
        <NavLink to="/science">
          <button className="clear">
            <i className="fa-solid fa-joystick"></i> &nbsp; Games
          </button>
        </NavLink>
        <NavLink to="/math">
          <button className="clear">
            <i className="fa-solid fa-grid-2"></i>
            &nbsp;Apps
          </button>
        </NavLink>
        <NavLink to="/settings">
          <button className="clear">
            <i className="fa-solid fa-sliders"></i>
            &nbsp; Settings
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
