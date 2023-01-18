import React, { Component } from "react";
import "./App.css";

class SchoolProjects extends Component{
   render() {
      return (
         <div className="proj">
            <h2>Projects that I have done for school and can't give all of the details about because of plagarism but none the less want to write about because they are pretty cool</h2>
            <p>Recently, when writing my resume for the 15 billionth time, I decided I wanted to add a "projects I completed in college" section to demonstrate the things I am learning in school. It feels disingenuous to not mention them, so this is my attempt at writing about them in a way that will not promote plagiarism while still demonstrating my understanding of the concepts they build. Most of the projects I will write about will be purposefully vague in order to give only the most basic details about the assignment and code that go into them.</p>
            <h2>ALU in VHDL - Digital System Design</h2>
            <p>This lab was completed for Digital System Design. The goal was to make a basic ALU which add, subtract, and preform all of the basic logical operations. The VHDL code ended up having three flags for overflow, zeros, and negative, to account for results that are not displayable on four bits. My solution ended up using with select when statements to switch to the proper operation based on input switches. I can't show any waveforms or code because of academic integrity but do know that it worked and I further optimized my code to reduce the number of lines. The project was run on a Basys 3 board and compiled using Vivado.</p>
            <h2>Ripple Carry Adder - Digital System Design</h2>
            <p>For Digital System Design, I also built a ripple carry adder. This was built using half and full adders. I can't show my wired circuit, but I can show my schematic for it. The results show a generic RCA result table. This project was also replicated in VHDL on the Basys board, yielding similar results.</p>
            <img src="https://i.imgur.com/yGbBSUs.png" alt="ripple carry adder"/>
            <h2>Signal Transimission - Digital Signal Processing </h2>
            <p>This was the final project for my Digital Signal Processing lab which involves breaking a string down into bits using bitwise functions, converting the bits into a frequency modulated signal, and then decoding said signal back into the original string using an entirely separate script. The basis of this project worked on making separate functions to do each step. I broke each part into even smaller systems and developed a decently efficient decoder for my own signals.</p>
            <h2>IP Sorter - C Programming for Engineers</h2>
            <p>This was the final homework for my C programming class my sophomore year. The basic idea was to sort IP addresses based on locality and aliases, while removing those which are invalid or out of range. My method was to use two structures and split IP addresses and aliases into one, sort the aliases and IPs by name, and remove all of the invalid entries. I was given a text file containing a list of unsorted IP addresses and aliases, and outputted a similarly formatted file containing the result, and another containing any invalid entries.</p>
            <h2>Specrtogram Analysis and Simulations - CT Signals and Systems</h2>
            <p>This was the first lab for my CT Signal Processing class (which used discrete time funnily enough). The purpose of this lab was to write a MATLAB script that could analyze a sound file and simulate, via a separate script, an approximation of the recorded signal. I ended up recording a chord I played on a keyboard with my phone, porting it into MATLAB, processing it, and displaying it as a spectrogram. This was a rather simple lab, but the point was to demonstrate a basic level of competence in displaying frequencies and frequency changes over time.</p>
            <img src="https://i.imgur.com/E5Mrr99.png" alt="tritone spectrogram" />
         </div>
      );
   }
}

export default SchoolProjects;