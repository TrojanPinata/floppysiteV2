import React, { Component } from "react";
import "./App.css";
import Fade from "react-reveal";
import Footer from "./Components/Footer";

class FloppySiteV2 extends Component {
   render() {
      return (
         <div className="App">
            <div className="proj">
               <Fade bottom><h3>My Portfolio is now in React.js</h3></Fade>
               <Fade bottom duration={1200}><p>i mean finally</p></Fade>
            </div>
            <Footer />
         </div>
      );
   }
}

export default FloppySiteV2;