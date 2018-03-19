import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-main">
        <h2 className="navbar-title">Recipe App</h2>
        <div className="navbar-spacer" />
        <div className="navbar-routes">
          <h5>New Recipe</h5>
          <h5>Home</h5>
          <h5>About</h5>
          <h5>Contact Us</h5>
        </div>
      </div>
    );
  }
}

export default Navbar;
