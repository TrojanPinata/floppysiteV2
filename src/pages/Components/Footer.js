import React, { Component } from "react";
import Fade from "react-reveal";

class Footer extends Component {
   render() {
      return (
         <footer>
            <div className="row">
               <Fade bottom>
                  <div className="link-cols">
                     <ul className="social-links">
                        <li>
                           <a href="mailto:hillbr20@gmail.com">
                              <i className="fa fa-envelope"></i>
                           </a>
                        </li>
                        <li>
                           <a href="https://github.com/TrojanPinata">
                              <i className="fa fa-github"></i>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.linkedin.com/in/brian-hill-0082161a3/">
                              <i className="fa fa-linkedin"></i>
                           </a>
                        </li>

                     </ul>

                     <ul className="bottom-cr">
                        <li>This site it mine please don't steal it</li>
                        <li>Made with floppy disks</li>
                     </ul>
                  </div>
               </Fade>
            </div>
         </footer>
      );
   }
}

export default Footer;