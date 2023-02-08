import React, { Component } from "react";
import Fade from "react-reveal";

class Header extends Component {
   render() {
      return (
         <header id="home">
            <div className="row banner">
               <div className="banner-text">
                  <Fade bottom>
                     <h1 className="responsive-headline">Hi, I'm Brian Hill.</h1>
                  </Fade>
                  <Fade bottom duration={1200}>
                     <h3>This is my personal website written in react.js. This is the second iteration of my FloppySite project, a website which was made to run off a floppy disk and old Raspberry Pi. The name is a remnant of its original purpose, as everything is now hosted in a virtual machine and very much not run on a floppy disk. All of my recent projects are listed below and are updated as they are done.</h3>
                  </Fade>
               </div>
            </div>
         </header>
      )
   }
}

export default Header;