import React, { Component } from "react";
import "./App.css";
import Fade from "react-reveal";
import Footer from "./Components/Footer";

class TinyKeeb extends Component {
   render() {
      return (
         <div className="App">
            <div className="proj">
               <Fade bottom><h3>Making a really tiny keyboard</h3></Fade>
               <Fade bottom duration={1200}>
                  <p>I have made a lot of QMK based keyboard projects in the past. I like microcontrollers, and I like keyboards, so fusing them together seems pretty ideal for short term projects that I do (that’s a lie, most of my projects take forever). However, sometimes when I want to make something weird, in a smililar fashion to what I currently make but more creatively driven, I think the things I make really shine. The <a href="https://github.com/TrojanPinata/Model-B">Model-B</a> is still my proudest project to date, but I would like to introduce the <a href="https://github.com/TrojanPinata/tiny-keeb">tiny keeb.</a></p>
                  <img src="https://i.imgur.com/Imawi3y.jpeg" alt="tiny keeb" />
                  <p>The tiny keeb is a 60% keyboard which has a footprint one quarter the area of a traditional 60% board. Since this keyboard is so small, it can’t use traditional keyboard switches or keycaps. I had to develop my own keycaps in conjunction with some Omron industrial switches in order to reduce the size and increase usability. It’s also small enough that my Prusa mini could print everything on its tiny 180mm x 180mm plate.</p>
                  <p>This keyboard does work, and it is powered by the same <a href="https://github.com/TrojanPinata/Pico">Raspberry Pi Pico clone I made in the past</a>. The usability is kind of rough, as it is so small, but everyone who has used it has developed new weird ways to type on it – ranging from using thumbs to forcing touch-typing style.</p>
                  <img src="https://i.imgur.com/lIwTasf.jpeg" alt="model-b reference" />
                  <p>The one thing I feel does not come across on camera is just how small the whole thing is. It is smaller than my phone, and each keycap is smaller than my fingernail. It is so small that I gave up sanding the keycaps because I was having trouble securing them to anything while I sanded. That’s not even to mention I could not put labels on them because the stickers had trouble sticking from both the size and material.</p>
                  <p>This project was a lot of fun. It was really difficult to consolidate the entire thing into such a small package. Hopefully its size comes across on camera.</p>
                  <img src="https://i.imgur.com/WvSqKAf.jpeg" alt="one of my favorite pcbs" />
                  <p>Until next time.</p>
               </Fade>
            </div>
            {/*12/22/24*/}
            <Footer />
         </div>
      );
   }
}

export default TinyKeeb;