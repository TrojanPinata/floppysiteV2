import React, { Component } from "react";
import "./App.css";
import Fade from "react-reveal";
import Footer from "./Components/Footer";

class Steganography extends Component{
   render() {
      return (
         <div className="App">
            <div className="proj">
               <Fade bottom><h3>Quick Steganography</h3></Fade>
               <Fade bottom duration={1200}>
                  <p>I wasn't planning on making a dedicated page for this so let me give you the quick of it: I made a simple tool for encoding messages into images and generating basic encryption. It works by turning a message into a series of bits and changing out the least important bit of each color in a pixel to effectively encode the message with minimal loss (and change of a third party noticing). </p>
                  <p>I made this mostly to prove a point of how easy it is to make something like this and create an external form of a covert channel. The tool could be better, but overall, I think that it demonstrates the point of how simple yet effective something like this can be.</p>
                  <p>See my <a href="https://github.com/TrojanPinata/steganopy">Github</a> for more info if you are interested.</p>
                  <img src="media/stegpic.png" alt="you are missing out" />
               </Fade>
            </div>
            <Footer />
         </div>
      );
   }
}

export default Steganography;