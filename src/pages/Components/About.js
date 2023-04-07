import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
   render() {  
      return (
         <section id="about">
            <Fade duration={1000}>
               <div className="row">
                  <div className="three columns">
                     <img className="profile-pic" src="./images/BH.jpg"alt="me lmao" />
                  </div>
                  <div className="nine columns main-col">
                     <h2></h2>
                     <p>Hi, I'm Brian Hill, a Computer Engineering student at George Mason University. I'm currently working on certifications and internships as well as all the many projects I have listed here. A lot of the projects and topics I post about are related to things I find interesting which can be expanded upon using hardware and software.<br /><br /></p>
                  </div>
                  <div className="columns download">
                     <div className="links">
                        <p>Resume Downloads</p>
                     </div>
                     <p>
                        <a href="./media/bhill_resume.pdf" className="button">PDF Download</a>
                        <br />
                        <a href="./media/bhill_resume.tex" className="button">LaTeX Download</a>
                     </p>
                  </div>
               </div>
            </Fade>
         </section>
      )
   }
}

export default About;