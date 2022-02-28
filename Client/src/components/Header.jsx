import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/twitch.png";
import GoogleAuth from "./GoogleAuth";

export default function Header() {
  return (
    <div style={{ backgroundColor: "#6441a5" }} className="ui secondary  menu">
      <Link to="/" className="item">
        <img src={logo} alt="logo" style={{ width: "38px", height: "35px" }} />
      </Link>
      <div className="right menu">
        <Link
          to="/"
          style={{ color: "#D1D1D1", fontWeight: "600" }}
          className="item"
        >
          Twitch Clone
        </Link>
        <div className="item" style={{ color: "#D1D1D1", fontWeight: "600" }}>
          <GoogleAuth />
        </div>
      </div>
    </div>
  );
}
