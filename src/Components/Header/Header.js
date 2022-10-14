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
      <div id="container">
        <header>
          <a href="">INDIA COVID</a>

          <nav>
            <a path="#"></a>
           
          </nav>

        </header>
      </div>
    );
  }
}

export default Header;
