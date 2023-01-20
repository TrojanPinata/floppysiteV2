import React, { Component } from "react";
import "./App.css";
import Fade from "react-reveal";
import Footer from "./Components/Footer";

class FloppySiteV2 extends Component {
   render() {
      return (
         <div className="App">
            <div className="proj">
               <Fade bottom><h3>My Portfolio is now in React.js</h3></Fade>
               <Fade bottom duration={1200}><p>Hi, it’s been a minute. It’s currently the last day of winter break for me (January 2023) and I’ve been working on some projects as I do. I’ve learned a lot about the way I like to do these sorts of things and the amount of time I need to rest from school in order to enjoy them.</p>
               <p>This website has always been a place for me to document the experience of the project as a supplement to my Github which hosts all of my code and what so. I really only wanted a barebones 90’s-esk site that acted as a project directory for my work. That was fine for the most part, and I really love my old site. That being said, I have wanted to make this more presentable for some time now.</p>
               <p>A while back, a friend of mine introduced me to React.js, with a fantastic introduction in the form of <a href="https://fullstackopen.com/en/">Full Stack Open</a>. I think this is a fantastic resource for those who want to learn React on a fundamental level (and have a lot of time to do such). I found the lessons to be extremely detailed and helpful for understanding how general web frameworks work and how React fits into the picture.</p>
               <p>Anyway, for my original site, I really struggled with CSS and to be perfectly honest I still do. So going into the new year I wanted to rebuild my entire thing to both look and feel more modern. You have probably already seen it, but welcome to my website. I modified a CSS template from <a href="https://www.styleshout.com/">StyleShout</a> to get here and wrote the entire js/html side from (mostly) scratch.</p>
               <p>The project pages are all individual files so I can still uniquely manage the look and feel of each page (if I really feel like it), and I’ve included an about section to put a face to my work.</p>
               <p>There isn’t really that much to talk about with this whole thing. I really hope this is more modern while still being unique enough to catch your eye. The old site was all about being small and efficient on a microcomputer and antiquated storage format so it could get away with being ugly (I didn’t really see it as that ugly :/), but I have since migrated everything and I don’t feel like the layout should stay in the past as well.</p>
               <p>Thank you for reading this. If you wish to see the old site, I have included it inside of this new edition. It will not be updated, but I hope this will serve as a time capsule for my growth.</p>
               <p><a href="/old/index.html">brianchill.us/old/index.html</a></p>
               <p>- Brian Hill</p></Fade>
            </div>
            <Footer />
         </div>
      );
   }
}

export default FloppySiteV2;