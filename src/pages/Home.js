import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Projects from "./Components/Projects";

class Home extends Component {
   render() {
      return (
         <div className="App">
            <Header />
            <Projects />
            <About />
            <Footer />
         </div>
      );
   }
}

export default Home;