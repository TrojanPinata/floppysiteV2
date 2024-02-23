import React, { Component } from "react";
import "./App.css";
import Fade from "react-reveal";
import Footer from "./Components/Footer";
import Youtube, { Youtubeprops } from "react-youtube";

class Nintoaster extends Component{
   render() {
      const opts = {
         height: '480', // I cant really do auto with this api so I am going to use these for the 4:3 aspect ratio and hope it works for most people
         width: '640'
       };
      return (
         <div className="App">
            <div className="proj">
               <Fade bottom><h3>Nintoaster: A Top-Loading NES in the form of a Toaster</h3></Fade>
               <Fade bottom duration={1200}>
                  <p>A few months ago, a friend of mine asked me if I could make a <a href="https://avgn.fandom.com/wiki/Nintoaster">Nintoaster</a> for them. If you are not aware, a nintoaster is a NES in the body of a toaster. It's pretty self explanitory...</p>
                  <p>Regardless, I followed the <a href="https://www.youtube.com/watch?v=YDGR2MiCyYs">official nintoaster instructional video</a>, which I ended up modifying heavily while attempting to preserve the core function of the device.</p>
                  <p>Below is the usage guide I made for the owner of the nintoaster for your viewing pleasure.</p>
                  <div className="Youtube">
                     <Youtube videoId="ncmCrHBWucw" opts={opts} />   
                  </div>
               </Fade>
            </div>
            <Footer />
         </div>
      );
   }
}

export default Nintoaster;