import React, { Component } from "react";
import "./App.css";

class NoPage extends Component {
   render() {
      return (
         <div className="nopage">
            <h3></h3>
            <a href="https://brianchill.us"><img src="images/taiho.gif" /></a>
            <p>Uh Oh. This page isn't available.</p>
         </div>
      );
   }
}

export default NoPage;