import React, { Component } from "react";
import "./App.css";
import Fade from "react-reveal";
import Footer from "./Components/Footer";

class Planar extends Component{
   render() {
      return (
         <div className="App">
            <div className="proj">
               <Fade bottom><h3>Making Planar Magnetic Headphones</h3></Fade>
               <Fade bottom duration={1200}>
                  <p>It’s no secret I like headphones. My first pair were Audiotechnica ATH-M50x and ever since then I have been collecting and modding them myself. Typically, headphones drivers and speakers are what are called <a href="https://en.wikipedia.org/wiki/Electrodynamic_speaker_driver">dynamic drivers</a> – a magnet which changes the force applied to a membrane when electrical signals are applied. This technology is not something I could reasonably make myself. When I made the <a href="https://brianchill.us/#/Juliette">Julliette SH-7502-701s</a> I used off the shelf AKG 701 drivers to get the sound signature I wanted. I never really thought it was possible to manufacture myself.</p>
                  <p>A couple of years back, I received a pair of Verum 1s. Verum, much like <a href="https://www.audeze.com/products/lcd-x">Audeze LCDs</a> or <a href="https://mezeaudio.com/products/meze-empyrean">Meze Empyreans</a> have what are called <a href="https://en.wikipedia.org/wiki/Loudspeaker#Ribbon_and_planar_magnetic_loudspeakers">planar magnetic drivers</a>. This is an entirely different technology which uses opposite polarity magnets and traced membrane sandwiched between to create sound. This whole concept is relatively simple in principle, but in practice it is very difficult to get right.</p>
                  <img src="https://www.rtings.com/images/dynamic.jpeg" alt="dynamic driver" />
                  <img src="https://www.rtings.com/images/planar-magnetic.jpg" alt="planar magnetic driver" />
                  <p>I had the idea to start this project during finals week one December (the best time to start projects is when you’re stressed and should be studying), and my idea was to simplify this design process by using the thinnest possible flex PCBs to act as that membrane and some ultra-thin magnets to pull on it. This ended up being possible to <a href="https://jlcpcb.com/">JLCPCB</a> and I cannot thank them enough for how clean the final product came out.</p>
                  <p>The traces were drawn to have a total impedance of 32 ohms, same as the 701 drivers, and I tried to incorporate some of the design from the Meze Empyreans by adding a spiral to help the higher end of the sound. While designing the PCB, I chose to use O rings to isolate the membrane from the housing and evenly put pressure on the edges. Preventing weird vibrations or resonant frequencies was a big deal and this was specifically for that.</p>
                  <img src="https://i.imgur.com/nliHS5E.png" alt="layout of traces on PCB" />
                  <p>I knew these were headphones before I started working, so I started to design the housing each would be in to be mirrorable and account for the PCB. I wanted the circuit to work, so I focused on playing around that rather than trying to make the PCB fit my bad 3d printed housings. I ended up going with a 90 mm membrane and 100 mm housing. The magnets I chose to use were 50mmx4mmx2mm – a very thin and light magnet which I would come to regret choosing later. </p>
                  <p>The whole design was based around screws holding the two sides together with a 3d printed frame holding the two sies together with lock collars and aluminum bar stock. I chose to do this design because I don’t have the tools to manufacture a custom aluminum frame and I have no way of bending metal into the shapes I need without a CNC mill or laser cutter. </p>
                  <img src="https://i.imgur.com/KOXF75Z.jpeg" alt="PCBs" />
                  <p>In the time it took for me to get the PCBs, I made a leather head strap and started printing some of the prototype housings. Then I waited for two months to get my magnets. The only place I could get these magnets was one Chinese ebay seller and even when I wanted to change magnets, they were all way too big for my design, so I was locked in. If I messed up, I would have to wait another two months to get more magnets.</p>
                  <img src="https://i.imgur.com/cwpOeKk.jpeg" alt="dead prototypes" />
                  <p>So, as you can see, I messed up. In more ways than one actually. First things first, these housing plates were way too weak. Like the second the magnets got near each other they ripped right out of the housing. Remember, these are opposing magnets and they do not want to attract, but if the structure is weak enough, the magnets will try and jump to ones that are the correct polarity. And that’s where the second problem started. Even after making significantly stronger frames, when I put the two halves together they would not go the way I wanted to and permanently fuse together. This combined with my inability to put magnets down the right way meant that I lost a lot of magnets and had to reorder.</p>
                  <p>Btw, the solution to this problem is to screw one bolt in and use it like a hinge, slide the PCB in, solder it, and then pivot it in place and screw it down. Do not ask me how long it took for me to figure this out.</p>
                  <p>But finally, they are done.</p>
                  <img src="https://i.imgur.com/Lu5fbIC.jpeg" alt="finished cans" />
                  <p>I think they look really good when they are not on a head but look crazy ugly when they are. They are unbelievably uncomfortable, somewhat fragile, and will certainly mess up your hair, but I still love them because I made them.</p>
                  <p>Now I am not an engineer who does ergonomics exactly, I am an electrical engineer (kind of), so how do they sound. Well. They are very bass heavy, and that’s not a good thing because they are bad at playing bass. The high end is a bit muffled and even the mids could use some work. The two sides have similar but different audio textures which is mostly because I built them by hand. The left ear has a bit of vibration at lower frequencies which sucks because I am not taking them apart ever again, but overall everything can be EQed away.</p>
                  <img src="https://i.imgur.com/3dqfCIP.jpeg" alt="side profile" />
                  <img src="https://i.imgur.com/2MKPnxO.jpeg" alt="strap" />
                  <p>Overall, this project was insane to work on. It actually made me mad enough to almost quit. The wait between magnets was infuriating, especially when followed by accidentally breaking them.</p>
                  <p><a href="https://i.imgur.com/ueEnats.jpeg">Until next time.</a></p> {/* see i told you they look goofy lmao */}

                  {/*I do want to address that while I was waiting on my magnets to arrive, a friend sent me a video by Elecronoobs <https://www.youtube.com/watch?v=Wrizk-TqsGY&t=434s> which is scarily similar to this project. Down to similar housing design, the same magnets, even PCB traces (I think he even used the same calculator I used to calculate the track widths). This is obviously frustrating because I found out about this over a month and a half into the project when everything was solidified. I think it’s kind of lame to end a cool project off by showing someone else do what I did, but I feel like it kind of takes away from what I made if I don’t mention it. I’m leaving this commented out for the three people who ever read this, but yes, this is a bummer to find out and yes I am aware it exists.*/}
               </Fade>
            </div>
            <Footer />
         </div>
      );
   }
}

export default Planar;