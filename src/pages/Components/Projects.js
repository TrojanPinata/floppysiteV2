import React, { Component } from "react";
import Fade from "react-reveal";
import { Link } from "react-router-dom";

class Projects extends Component {
   render() {
      return (
         <section id="projects">
            <Fade duration={1000}>
               <div className="projectList">
                  <h3></h3>
                  <ul>
                     <Link to="/SchoolProjects">School Projects</Link>
                  </ul>
                  <ul>
                     <a href="https://github.com/TrojanPinata/DIY-Mic">DIY Microphone</a>
                  </ul>
                  <ul>
                     <Link to="/Hardware">FloppySite</Link>
                  </ul>
                  <ul>
                     <Link to="/Juliette">Vintage Headphones</Link>
                  </ul>
                  <ul>
                     <Link to="/Deej">Deej Mixers</Link>
                  </ul>
                  <ul>
                     <Link to="/Homelab">Homelab</Link>
                  </ul>
                  <ul>
                     <Link to="/Oled">Very Small OLED Screens</Link>
                  </ul>
                  <ul>
                     <Link to="/Zipf">Zipfian Distributions</Link>
                  </ul>
                  <ul>
                     <Link to="/Keyboard">Keyboarding</Link>
                  </ul>
                  <ul>
                     <Link to="/LineFollower">Line Following Robot</Link>
                  </ul>
                  <ul>
                     <Link to="/PicoHdmi">Pico HDMI</Link>
                  </ul>
                  <ul>
                     <Link to="/FloppySiteV2">Floppy Site V2</Link>
                  </ul>
                  <ul>
                     <Link to="/Mipsvga">MIPS VGA Controller</Link>
                  </ul>
                  <ul>
                     <Link to="/PiDraw">PiDraw</Link>
                  </ul>
                  <ul>
                     <Link to="/DIYMicRedux">DIY Microphone: Revisited</Link>
                  </ul>
                  <ul>
                     <Link to="/MOS">mOS</Link>
                  </ul>
                  <ul>
                     <Link to="/Planar">Planar Magnetic Headphones</Link>
                  </ul>
                  <ul>
                     <Link to="/Nintoaster">Nintoaster</Link>
                  </ul>
                  <ul>
                     <Link to="/AmenBreak">Amen Break Machine</Link>
                  </ul>
                  <ul>
                     <Link to="/Wii">Making My Wii into a Raspberry Pi</Link>
                  </ul>
                  <ul>
                     <Link to="/Steganography">Quick Steganography</Link>
                  </ul>
                  <ul>
                     <Link to="/Macropad">Pico-based Macropad</Link>
                  </ul>
                  <ul>
                     <Link to="/ModelB">Model B: My Next Keyboard</Link>
                  </ul>
                  <ul>
                     <Link to="/Dispolens">Dispolens</Link>
                  </ul>
                  <ul>
                     <Link to="/TinyKeeb">Tiny Keyboard</Link>
                  </ul>
                  <ul>
                     <Link to="/Blimp">Blimp Capstone</Link>
                  </ul>
                  
               </div>
            </Fade>
         </section>
      );
   }
}

export default Projects;
