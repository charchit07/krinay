import React from "react";

import { Link } from "react-router-dom";

import "../Styles/Navbar.modules.css"; // Import CSS modul

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={"/register"} className="register">Register</Link>

      <Link to={"/login"} className="register">Login</Link>

      <Link to={"/"} className="register" >Todo </Link>
    </div>
  );
};

export default Navbar;
