import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ScrollToTop from "./ScrollToTop"

import Home from "./pages/Home"
import Deej from "./pages/Deej";
import Hardware from "./pages/Hardware";
import Homelab from "./pages/Homelab";
import Juliette from "./pages/Juliette";
import Keyboard from "./pages/Keyboard";
import LineFollower from "./pages/LineFollower";
import NoPage from "./pages/NoPage";
import Oled from "./pages/Oled";
import PicoHdmi from "./pages/PicoHdmi";
import SchoolProjects from "./pages/SchoolProjects";
import Zipf from "./pages/Zipf";
import FloppySiteV2 from "./pages/FloppySiteV2";

class App extends Component {
   render() {
      return (
         <div className="App">
            <Router basename="/">
               <ScrollToTop>
               <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/Deej' element={<Deej />} />
                  <Route path='/Hardware' element={<Hardware />} />
                  <Route path='/Homelab' element={<Homelab />} />
                  <Route path='/Juliette' element={<Juliette />} />
                  <Route path='/Keyboard' element={<Keyboard />} />
                  <Route path='/LineFollower' element={<LineFollower />} />
                  <Route path='/Oled' element={<Oled />} />
                  <Route path='/PicoHdmi' element={<PicoHdmi />} />
                  <Route path='/SchoolProjects' element={<SchoolProjects />} />
                  <Route path='/Zipf' element={<Zipf />} />
                  <Route path='/FloppySiteV2' element={<FloppySiteV2 />} />
                  <Route path='*' element={<NoPage />} />
               </Routes>
               </ScrollToTop>
            </Router>
         </div>
      );
   }
}

export default App;