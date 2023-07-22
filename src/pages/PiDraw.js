import React, { Component } from "react";
import "./App.css";
import Fade from "react-reveal";
import Footer from "./Components/Footer";

class PiDraw extends Component{
   render() {
      return (
         <div className="App">
            <div className="proj">
               <Fade bottom><h3>PiDraw</h3></Fade>
               <Fade bottom duration={1200}><p>Before I begin, I want to mention that I am not able to do the extent of this project justice on this page. This was completed over a long time and there are too many intricacies to talk about while making this sound interesting.</p>
               <p>PiDraw is a project based on an idea I had which was based on a video from <a href="http://tom7.org/harder/">Tom 7</a> called <a href="https://www.youtube.com/watch?v=JcJSW7Rprio">Harder Drive</a>. The original idea was that I wanted to custom fab a PCB with 256 switches (32 x 8 grid) which used a multiplexer ladder to interface with an onboard Arduino and store a uselessly small amount of information. The board would have a selector in the form of a 3D printer-esk actuator and would take commands over serial. </p>
               <p>It was, fundamentally, useless, but that was always the intent. I never wanted a useful machine, and the point was to store data permanently in a funny way with some of the worst write times possible. The only factors which prevented me from actually making the thing were time and cost, things I most certainly did not have mid semester.</p>
               <p>So, I ended up sitting on the idea and waited for the semester to end, but by that time the idea had warped. I saw this video by <a href="https://www.youtube.com/@StuffMadeHere">Stuff Made Here</a> about <a href="https://www.youtube.com/watch?v=cQO2XTP7QDw">designing a forgery robot</a>, and Youtube’s algorithm knew me so well, I switched thought processes and started designing some basic parts for a drawing robot.</p>
               <p>As I have mentioned somewhere on here before, I am the owner of a <a href="https://www.prusa3d.com/product/original-prusa-mini-semi-assembled-3d-printer-4/">Prusa Mini+</a>, a fantastic printer which I have used and abused for the past few years. I love this thing, and the only way I would get rid of it is if everything died on it at once. It follows the standard 3D printer format of the past few years: X-axis moves extruder while Y-axis moves the bedplate. After thinking about it long and hard, I made the decision of what I wanted to do. I was going to make a drawing robot in the style of a 3D printer.</p>
               <img src="https://i.imgur.com/Rl5YHX6.jpg" alt="Diy solenoid driver and underpowered motor drivers" />
               <p>And this is where the first line of this page comes into play. I went through so many iterations of this thing it’s not even funny. It would be literally impossible for me to mention every frame design or solenoid driver or motor driver config or software version (I think you get the point). Above is just one example of one of my designs. I had to buy more rubber belt because I ended up using it all on previous tests and made so many physical modifications, I stopped taking pictures for a bit because I would forget before the whole thing looked entirely different. The number of either under powered or straight up cooked motor drivers was insane.</p>
               <p>This project was surprisingly quick compared to most of my summer projects, but I suppose it was longer than average. I feel like I did a lot – so much that it’s hard to write about. So, I think I’ll just show some highlights. </p>
               <img src="https://i.imgur.com/04zMgVV.jpg" alt="Motor drivers being tested" />
               <p>Here is a picture of me testing some new L298N motor drivers which worked significantly better than my Adafruit stepper driver hat. I used two 1.2A stepper motors which pulled <i>a lot</i> of power. The drivers would get so hot from continuous use that in order to extend their useful lives I would spray them while running with a bottle of compressed air (which is actually refrigerant). Cooling was a major issue once I reached the matching point between the drivers and the motors. The Adafruit driver was consistantly hot and very close to popping, but it was largely uncoolable (and like, didn't work) which is why I ended up switching.</p>
               <img src="https://i.imgur.com/qz85ows.jpg" alt="Cooked L298N motor driver" />
               <p>I actually ended up blowing up a few of said motor drivers.</p>
               <img src="https://i.imgur.com/DOgLT2d.jpg" alt="Packaged motor drivers" />
               <p>The goal was to mount everything and have it be a solid package, but long prints melted the hot glue and thus mounting was a bit silly. Also, I was paranoid after blowing up a few drivers, so I wanted easier access to the heat sinks for a fan and a bottle of compressed air to assist.</p>
               <img src="https://i.imgur.com/l32Rj4b.jpg" alt="Final design" />
               <p>This was the final(ish) design before I started testing it thoroughly. I basically would stress test this thing until it broke, fix it, then repeat. I couldn’t leave it on my primary desk to run, as the motors had no dampening and would shake the entire thing so loud it was audible outside of the room.</p>
               <img src="https://i.imgur.com/Ef2MCmU.jpg" alt="Print result (witch from Bad Apple!" />
               <p><a href="https://youtu.be/LTuY1gQYgm8"> Here is a drawing style test pattern</a></p>
               <p><a href="https://youtu.be/3Vgg1YUDOpk"> And here is the final demo video, printing a frame from Bad Apple as a dot matrix printer</a></p>
               <p>And at the end of the day what did I get? A few cool pictures and some scribbles? Was this project even worth it?</p>
               <p>Overall, I’d say it was. I learned a lot about robot design and how to program for a very dynamic, iterative project. I took many drastically different paths that I didn’t even mention, and I think I learned a lot here. Recently, a lot of my projects have not worked even if I learned a bunch. This is one of those times where I could make it work and I did. It’s a success in every way and I am proud of the result. At the end of the day, I would 100% do this again. Hell, I even have ideas on how to make it better. </p>
               <p>I hope this was interesting even without 75% of the details. At this point I’ve been through so many iterations I don’t remember half of them.</p>
               <p>After my last test with this robot, I melted the Y-axis bracket due to the motor’s temperature, so it looks like I won’t be printing anytime soon. I have a newfound respect for 3D printer companies (and people who can properly match motors and motor drivers).</p>
               <p>Until next time.</p></Fade>
            </div>
            <Footer />
         </div>
      );
   }
}

export default PiDraw;