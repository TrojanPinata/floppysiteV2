import React, { Component } from "react";
import "./App.css";
import Fade from "react-reveal";
import Footer from "./Components/Footer";

class Nintoaster extends Component{
   render() {
      return (
         <div className="App">
            <div className="proj">
               <Fade bottom><h3>Nintoaster: A Top-Loading NES in the form of a Toaster</h3></Fade>
               <Fade bottom duration={1200}>
                  <p>spoilers (=ↀωↀ=)</p>
               </Fade>
            </div>
            <Footer />
         </div>
      );
   }
}

export default Nintoaster;