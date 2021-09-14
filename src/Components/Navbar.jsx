import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <Link to="/Container/Portfolio">Portfolio</Link>
      <Link to="/Container/Services">Services</Link>
      <Link to="/Container/Contact">Contact</Link>
    </div>
  );
};

export default Navbar;
