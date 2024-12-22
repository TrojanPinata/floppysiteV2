import React, { Component } from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
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
import Mipsvga from "./pages/Mipsvga";
import PiDraw from "./pages/PiDraw";
import DIYMicRedux from "./pages/DIYMicRedux";
import MOS from "./pages/MOS";
import Planar from "./pages/Planar";
import Nintoaster from "./pages/Nintoaster";
import AmenBreak from "./pages/AmenBreak";
import Wii from "./pages/Wii";
import Steganography from "./pages/Steganography";
import Macropad from "./pages/Macropad";
import ModelB from "./pages/ModelB";
import Dispolens from "./pages/Dispolens";
import TinyKeeb from "./pages/TinyKeeb";

class App extends Component {
   render() {
      return (
         <div className="App">
            <Router basename="/">
               <ScrollToTop />
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
                  <Route path='/Mipsvga' element={<Mipsvga />} />
                  <Route path='/PiDraw' element={<PiDraw />} />
                  <Route path='/DIYMicRedux' element={<DIYMicRedux />} />
                  <Route path='/MOS' element={<MOS />} />
                  <Route path='/Planar' element={<Planar />} />
                  <Route path='/Nintoaster' element={<Nintoaster />} />
                  <Route path='/AmenBreak' element={<AmenBreak />} />
                  <Route path='/Wii' element={<Wii />} />
                  <Route path='/Steganography' element={<Steganography />} />
                  <Route path='/Macropad' element={<Macropad />} />
                  <Route path='/ModelB' element={<ModelB />} />
                  <Route path='/Dispolens' element={<Dispolens />} />
                  <Route path='/TinyKeeb' element={<TinyKeeb />} />
                  <Route path='*' element={<NoPage />} />
               </Routes>
            </Router>
         </div>
      );
   }
}

export default App;