import React, { Component } from "react";
import "./App.css";
import Fade from "react-reveal";
import Footer from "./Components/Footer";

class SchoolProjects extends Component{
   render() {
      return (
         <div className="App">
            <div className="proj">
               <Fade bottom><h3>Projects that I have done for school and can't give all of the details about because of plagarism but none the less want to write about because they are pretty cool</h3></Fade>
               <Fade bottom duration={1200}><p>Recently, when writing my resume for the 15 billionth time, I decided I wanted to add a "projects I completed in college" section to demonstrate the things I am learning in school. It feels disingenuous to not mention them, so this is my attempt at writing about them in a way that will not promote plagiarism while still demonstrating my understanding of the concepts they build. Most of the projects I will write about will be purposefully vague in order to give only the most basic details about the assignment and code that go into them.</p>
               <h3>ALU in VHDL - Digital System Design</h3>
               <p>This lab was completed for Digital System Design. The goal was to make a basic ALU which add, subtract, and preform all of the basic logical operations. The VHDL code ended up having three flags for overflow, zeros, and negative, to account for results that are not displayable on four bits. My solution ended up using with select when statements to switch to the proper operation based on input switches. I can't show any waveforms or code because of academic integrity but do know that it worked and I further optimized my code to reduce the number of lines. The project was run on a Basys 3 board and compiled using Vivado.</p>
               <h3>Ripple Carry Adder - Digital System Design</h3>
               <p>For Digital System Design, I also built a ripple carry adder. This was built using half and full adders. I can't show my wired circuit, but I can show my schematic for it. The results show a generic RCA result table. This project was also replicated in VHDL on the Basys board, yielding similar results.</p>
               <img src="https://i.imgur.com/yGbBSUs.png" alt="ripple carry adder"/>
               <h3>Signal Transimission - Digital Signal Processing </h3>
               <p>This was the final project for my Digital Signal Processing lab which involves breaking a string down into bits using bitwise functions, converting the bits into a frequency modulated signal, and then decoding said signal back into the original string using an entirely separate script. The basis of this project worked on making separate functions to do each step. I broke each part into even smaller systems and developed a decently efficient decoder for my own signals.</p>
               <h3>IP Sorter - C Programming for Engineers</h3>
               <p>This was the final homework for my C programming class my sophomore year. The basic idea was to sort IP addresses based on locality and aliases, while removing those which are invalid or out of range. My method was to use two structures and split IP addresses and aliases into one, sort the aliases and IPs by name, and remove all of the invalid entries. I was given a text file containing a list of unsorted IP addresses and aliases, and outputted a similarly formatted file containing the result, and another containing any invalid entries.</p>
               <h3>Specrtogram Analysis and Simulations - CT Signals and Systems</h3>
               <p>This was the first lab for my CT Signal Processing class (which used discrete time funnily enough). The purpose of this lab was to write a MATLAB script that could analyze a sound file and simulate, via a separate script, an approximation of the recorded signal. I ended up recording a chord I played on a keyboard with my phone, porting it into MATLAB, processing it, and displaying it as a spectrogram. This was a rather simple lab, but the point was to demonstrate a basic level of competence in displaying frequencies and frequency changes over time.</p>
               <img src="https://i.imgur.com/E5Mrr99.png" alt="tritone spectrogram" />
               <h3>Basic MIPS Processor in VHDL - Computer Organization</h3>
               <p>This was a comprehensive project for my computer organization class which involved creating parts of a MIPS processor and combining them to make a functioning processor. My implementation was a bit more advanced than necessary, implementing memory mapped I/O and basic branch prediction. The entire processor was run on the Basys 3 development board and written in Vivado.</p>
               <img src="https://i.imgur.com/ZC7ml1L.png" alt="mips processor block diagram" />
               <h3>Basic Bash Shell - Data Structures and Systems Programming</h3>
               <p>This was the final project for my half data structures and half systems programming course - specifically in the systems programming section. I found this project to be extremely fun and in great contrast to the data structures section of the course. The goal was to design a basic shell in C which could find and execute programs as an introduction to writing OS code for Unix systems (the following class is Operating Systems Programming). My shell was very simple, using strtok and execv to split a input command and fork the command to a subprocess.</p>
               <h3>Joystick Controlled Two Axis Grid with OLED Display - Embedded Systems</h3>
               <p>For the final project of my embedded systems class, we were tasked to design <i>something</i> (yes it was that vague for us as well) which used the components in our lab kits and demonstrated the concepts from the semester. Of course, this project clearly takes inspiration from the other projects I have done – most notably the serial OLED project and PyDraw. The result was a bit lackluster as the components we had were rough and we had no budget at all. The parts are all reused and from the remains of past projects + some 3d prints to make it as easy to manufacture as possible. We didn’t end up winning, but I really put a lot of work in for this project and I am proud of the ridiculously large codebase I wrote for this. As obvious by the name and references, this was basically a drawing robot without the bearings or solenoid. It moved via commands/arguments and a joystick built into a controller. The position was displayed with a SSD_1306 OLED (not in our lab kits) and due to the mundanity of the project as a whole, we added a video player for the system (one utilizing OpenCV and the BeagleBone Black’s hardware) and played Bad Apple on it.</p>
               <img src="https://i.imgur.com/Udq4dsP.jpg" alt="final project as displayed for demo" />
               </Fade>
            </div>
            <Footer />
         </div>
      );
   }
}

export default SchoolProjects;