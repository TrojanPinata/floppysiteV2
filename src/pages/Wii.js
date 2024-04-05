import React, { Component } from "react";
import "./App.css";
import Fade from "react-reveal";
import Footer from "./Components/Footer";

class Wii extends Component{
   render() {
      return (
         <div className="App">
            <div className="proj">
               <Fade bottom><h3>Making My Raspberry Pi into the Shape of a Wii</h3></Fade>
               <Fade bottom duration={1200}>
                  <p>I have a couple of Raspberry Pis. This website was even started on a Raspberry Pi 3B+. If you read/watched my video on my Nintoaster project then you might be able to see where this is going.</p>
                  <p>After I finished that project, I spent about three weeks with the Nintoaster, using it and playing mario over and over again. And I started to really like how easy it was to simply turn on and play a game. No home screen or anything. It's very elegant and reminded me of what I loved so much about the Gameboy. I really wanted to make something for myself which would do the same thing while preserving the ease of maintaining a large game library.</p>
                  <p>When I ended up giving away the Nintoaster I felt a bit conflicted, and that's what spurred me to do this. The idea was to take a Raspberry Pi with <a href="https://retropie.org.uk/">RetroPie</a> and put it in the body of a Wii with a game selector. This would allow a similar press on and play attitude while giving it the versatility and customizabillity of a emulation system - and in the body of a Wii for looks.</p>
                  <img src="https://i.imgur.com/yTD1N7v.jpeg" alt="Wiiman" />
                  <p>So that's what I did. Most of this project was figuring out how to mount all of the I/O of a Pi onto the boy of a Wii with all of it's proprietary ports, but as you can see it all worked out. The main additions I made were the game selector switch in the memory card port and the addition of dedicated composite jacks. The whole system was able to be powered on five volts via a USB-C port and I even managed to get ethernet.</p>
                  <img src="https://i.imgur.com/QURvRnk.jpeg" alt="top and rear" />
                  <p>But the part I am proud of the most is actually none of that. I did write a short shell program to launch games via a some basic unix system commands, but even that was mid at best. The thing I am most proud of was designing a system to emulate the actual function and ports on the front of the Wii. There are four buttons, a SD card slot, and a LED on the front that I got to work with a microcontroller and some relays. I wanted the LED to light and work without the Pi being on, so the LED on the front will glow red until pressed, at which point it will close the relays and start the Pi and video subsystem.</p>
                  <img src="https://i.imgur.com/IL1z4Yv.jpeg" alt="front" />
                  <p>I should note that inside there is a HDMI splitter and AV converter to allow a user to display on both a CRT and LCD at the same time.</p>
                  <p>Overall, I am proud of how this came out. I think this was very interesting and fun to build, but I will never use this sadly. I realized after living with this for a week or two that it wasn't what I got with the Nintoaster. I really wanted a different feeling from it. I think a better solution for me personally will be to buy and mod a Famicom, but as that sounds expensive I think I will wait until I have more time in the summer or something to do that.</p>
                  <p>Until next time.</p>
                  <img src="https://i.imgur.com/IrxfGe3.jpeg" alt="yikes" />
               </Fade>
            </div>
            <Footer />
         </div>
      );
   }
}

export default Wii;