import React, { Component } from "react";
import "./App.css";
import Footer from "./Components/Footer";

class BTS extends Component {
   render() {
      return (
         <div className="App">
            <div className="proj">
               <Fade bottom><h3>Behind the Scenes</h3></Fade>
               <Fade bottom duration={1200}><p>Wait what? Behind the scenes? Why would anyone do that?</p></Fade>
            </div>
            <Footer />
         </div>
      );
   }
}

export default BTS;