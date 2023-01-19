import React, { Component } from "react";
import "./App.css";

class NoPage extends Component {
   render() {
      return (
         <div className="nopagecont">
            <div className="nopage">
               <h3></h3>
               <img src="images/taiho.gif" />
               <p>Uh Oh. This page isn't available.</p>
            </div>
         </div>
      );
   }
}

export default NoPage;