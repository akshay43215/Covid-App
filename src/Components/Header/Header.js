import React, { Component } from "react";
import "./Header.css";
import Axios from "axios";

 class Header extends Component {
    
  constructor() {
    super();
    this.State = {
      stateData: {}
    };  
  }

  render() {
    return (
      <div className="container">
        <header>
          <a href="">LOGO</a>

          <nav>
            <a path="#">Home</a>
            <a path="#">About</a>
            <a path="#">Contact</a>
          </nav>

        </header>
      </div>
    );
  }
}

export default Header;
