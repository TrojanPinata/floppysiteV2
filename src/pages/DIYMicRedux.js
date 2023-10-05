import React, { Component } from "react";
import "./App.css";
import Fade from "react-reveal";
import Footer from "./Components/Footer";

class DIYMicRedux extends Component{
   render() {
      return (
         <div className="App">
            <div className="proj">
               <Fade bottom><h3>DIY Microphone: Revisited</h3></Fade>
               <Fade bottom duration={1200}><p>A long time ago, I published my first project to my <a href="https://github.com/TrojanPinata">Github</a> - the <a href="https://github.com/TrojanPinata/DIY-Mic">DIY Microphone project</a> - out of spite for the <a href="https://www.youtube.com/watch?v=LoQu3XXIayc">DIYPerks YouTube video</a> which claimed a good microphone could be built for less than $30. I think it was incredibly petty, though it did help me get into making, publishing projects, and communicating what I do in a way I think is very productive (now especially). I never made a page for it because it was getting a lot of attention and I didn't have a website at the time (nor the bandwidth to handle the influx of people), so my Github was fine. I considered the project a success and while it was not especially useful in my life, it was a fantastic project to bring up in technical conversations.</p>
               <p>Now, nearly two years later, I was looking through some old projects to cannibalize and I remembered this project. I didn't want to completely waste the project specific components that were on board as they took a while to procure, so I decided I wanted to try and make it work. I decided to overhaul the design of the internals and housing in order to significantly improve performance. There were a lot of flaws in the original design, so I chose to make less compromises and make this actually usable.</p>
               <img src="https://i.imgur.com/Rz5yYzq.jpg" alt="microphone box" />
               <p>The biggest flaw with the original design was separating the mic module from the amplifier and ADC assembly by connecting the sensitive module wires with a long and fragile cable. This was a bad move - especially when combined with the accessory components not being perfectly grounded within the housing. My shoddy brass mesh faraday cage left a lot to be desired and my soldering was primitive at best as I was just getting used to my tools. There were a lot of changes that I think were necessary to make and the solution to all of these issues was to literally just <i>put it in a normal microphone body.</i></p>
               <p>Now, I had what I would consider the worst dedicated microphone on the market, a BM-800, so I gutted it and worked out what I wanted to make. I had all of the components already, but I needed to somehow fit the giant 3D printed box with all of its contents into a tiny microphone body and smash a USB-C connector on it. Now, if you are reading this, you may have seen my other projects, more specifically the keyboard project I did during the Summer of 2022. I feel like I've gotten pretty good with PCB design (or that is just my hubris), so I decided to make a custom PCB to fit the housing and make this project work.</p>
               <p>After a long wait for the PCBs and some soldering, heres the result: </p>
               <img src="https://i.imgur.com/Q5EVr53.jpg" alt="pcb next to housing" />
               <img src="https://i.imgur.com/JwMTfCq.jpg" alt="microphone open" />
               <img src="https://i.imgur.com/adiQimk.jpg" alt="completed microphone" />
               <p>This new generation of the microphone works significantly better and sounds way too good to be a USB microphone. The noise I used to get with the old version is gone and so is pretty much every issue. I’m really happy with this result. I was expecting there to be some crosstalk as I haven’t really designed audio equipment before, but that doesn’t seem to be the case.</p>
               <p>This is the last time I will work on this project. If this version of the microphone doesn’t work out, I’m just going to buy an audio interface and a nice XLR microphone. Sometimes you just need your equipment to work, and that is most of the reasons why I stopped using the original. I don’t want to have to fanagle with my microphone to talk to friends.</p>
               <p>I definitely still want to work on audio equipment – maybe even a guitar, pedal, or synth in the future, but this project is done.</p>
               <p>If you read my terrible write-up on the original project before and are now reading this, thank you for following my first project and its final iteration.</p>
               <p>And as always, until next time.</p></Fade>
            </div>
            <Footer />
         </div>
      );
   }
}

export default DIYMicRedux;