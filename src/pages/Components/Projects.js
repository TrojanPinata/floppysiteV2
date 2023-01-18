import React, { Component } from "react";
import Fade from "react-reveal";

class Projects extends Component {
   render() {
      return (
         <section id="projects">
            <Fade duration={1000}>
               <div className="projectList">

                     <h3></h3>

                  <ul>
                     <p><a href="https://github.com/TrojanPinata/DIY-Mic" className="projectButton">DIY Microphone</a></p>
                  </ul>
                  <ul>
                     <p><a href="/Hardware" className="projectButton">FloppySite</a></p>
                  </ul>
                  <ul>
                     <p><a href="/Juliette" className="projectButton">Vintage Headphones</a></p>
                  </ul>
                  <ul>
                     <p><a href="/Deej" className="projectButton">Deej Mixers</a></p>
                  </ul>
                  <ul>
                     <p><a href="/Homelab" className="projectButton">Homelab</a></p>
                  </ul>
                  <ul>
                     <p><a href="/Oled" className="projectButton">Very Small OLED Screens</a></p>
                  </ul>
                  <ul>
                     <p><a href="/Zipf" className="projectButton">Zipfian Distributions</a></p>
                  </ul>
                  <ul>
                     <p><a href="/Keyboard" className="projectButton">Keyboarding</a></p>
                  </ul>
                  <ul>
                     <p><a href="/SchoolProjects" className="projectButton">School Projects</a></p>
                  </ul>
                  <ul>
                     <p><a href="/LineFollower" className="projectButton">Line Following Robot</a></p>
                  </ul>
                  <ul>
                     <p><a href="/PicoHdmi" className="projectButton">Pico HDMI</a></p>
                  </ul>
               </div>
            </Fade>
         </section>
      );
   }
}

export default Projects;
