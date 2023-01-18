import React, { Component } from "react";
import "./App.css";

class LineFollower extends Component {
   render() {
      return (
         <div className="proj">
            <h3>Line Following Robot</h3>
            <p>Over the past few years, I have done coding projects and circuit projects. I love it when they merge, but sometimes one side overcomes the other and there isn't really a balance. Sometimes, it’s ok for that to happen. The projects listed on this site were a great example of that. For a while, I have been thinking I haven’t been demonstrating a level of knowledge in circuits like I have been attempting to with software. In a way, it’s slightly ingenuine. Most of what I am good at is circuits and digital logic. That’s what I am known for in school and what I really am passionate about.</p>
            <p>Prior to this page, the only pureblooded circuit project I had was my light project, and I felt like it wasn’t really a good writeup, nor a good project to talk about. It’s cool stuff, but not really for the purpose of demonstrating circuits.</p>
            <p>As of writing this, I am in a course called circuit analysis which has a final project, namely the ECP (electronic circuit project). For this ECP, we were given a list of requirements and a due date. I won’t be sharing too many details from the school in terms of what those are, but I think this project is unique in regards to my other school projects as the restrictions are freeform enough that I believe I would be fine to share what I did.</p>
            <p>Earlier in the semester, we were supposed to have two separate ECPs, but as time went on, things happen, and the professor scrapped the first. In this time, I had already designed a simple night light circuit which turned on and off depending on the ambient light level. It used a simple photoresistor and opamp (as a comparator) and worked pretty well. I had planned to use this as my project, but after the news I decided to hold it for the final.</p>
            <img src="https://i.imgur.com/jr8KkkJ.jpg" alt="Night light circuit" />
            <p>Over a month before anyone expected anything from me, I was already ordering opamps and trying to decide what I wanted to do. My friends had talked about making a signal generator, and I thought that was cool, but it’s not really me. After hearing what they and others in my class were considering, I decided I wasn’t going to hack something together and I wanted to make something that works by itself and shows a level of understanding that is both practical and fun. I decided on using a similar idea from my night light circuit with photoresistors. The end result of my plan was a two wheeled car that follows a line by reflecting light off of the ground and back to the photoresistor, which could use analog logic to determine which motor to activate.</p>
            <p>At this point I gave up on treating this like a school project. This was something I would do outside of school, and I made the conscious decision to treat this like a school sponsored hobby. I had most of the components already, so I felt that if I didn’t go way over budget this would be valid and I would get to do something I wanted to do.</p>
            <img src="https://i.imgur.com/fN82my9.png" alt="Final Schematic" />
            <p>The above schematic is the final design I chose for my circuit after some experiments. After this, there were a few key changes from the initial idea that I feel are important enough to mention. First, his car needed four wheels. As in, if it did not have four wheels, it would be sloppy and hard to control. And second, this car needed way more power than I thought.</p>
            <p>The solution to the wheel problem was pretty simple. We have two, <i>why not just add two more?</i> But nothing is that easy. This design needs way more power in order to drive two motors, let alone four. </p>
            <p>So, I decided to use a 2N2222 transistor to pull more current from the battery, which worked, but because of EMF from the motor needing higher current draw when it initially starts, the transistor would get really hot from, y’know, pulling 4 amps from the battery. This was solved by a recommendation from my TA to use a capacitor over the output which worked wonders. The system was underpowered still, but it at least moved. As you will see earlier, this was actually a blessing in disguise.</p>
            <p>What happened next. Well, I am going to skip a few weeks for midterms and we will jump back in after I built the chassis. I used a 3D printed frame, some chap Alibaba motors, some superglue and it was built. Nothing else was really notable in that time except for my reason for designing the chassis the way I did, which I purposefully built with disassembly in mind.</p>
            <img src="https://i.imgur.com/5NMw0Pe.jpg" alt="Chassis" />
            <p>After that, I received my LM358 opamps and I started soldering the project together. Because of the power consumption requirements, I chose to make two separate driver boards. It was more efficient and allowed me to pull more current and sperate the system like a brain, the right side controlling the left side of the car and left the right side of the car. Everything went together really cleanly and I feel like the project was done at this step. </p>
            <img src="https://i.imgur.com/MsJpvJM.jpg" alt="Final Car" />
            <p>But I did a few more things after that, and that’s part of the reason I don’t feel like this is a school project. This part’s me.</p>
            <p>The next thing I did was design my own PCB, very much like I did the keyboard, and I was going to leave it there. My professor talked about making homemade PCBs, so I looked it up and decided to do it myself. I chose to use ferric chloride as an etchant, and after receiving the solution, I ironed on the print of my circuit onto some copper plate, and etched the copper away. (I do not know why I chose the night I did, but it was below freezing and it made the process take even longer.)</p>
            <img src="https://i.imgur.com/CZJk7V3.jpg" alt="PCB" />
            <p>This board is completely unnecessary as it was never deployed onto the car, but it was a cool proof of concept nonetheless. The car’s transceiver-receiver system of photoresistors and LEDs was also tuned further to the point I made a separate rig to test values and distances which were most efficient.</p>
            <p><a href="https://www.youtube.com/watch?v=-Po_mLRogo4">Here's the video demo I did for class.</a></p>
            <p>At the end of the day, this project was extremely successful. I am very happy with how it came out. I even got to help my friends with their signal generator before their presentation. </p>
            <img src="https://i.imgur.com/oYDFj8a.jpg" alt="Signal generator" />
            <p>Anyway, this was cool and I really didn’t do the technical side of this justice. It was more fun to write about the process vs why it works and the logic it runs on. As you can probably see, this is something I am deeply interested in, and I hope I can do something similar in the future.</p>
            <p>Until next time.</p>
         </div>
      );
   }
}

export default LineFollower;