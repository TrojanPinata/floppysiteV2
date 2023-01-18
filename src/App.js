import React, { Component } from "react";
import "./App.css";
import { HashRouter, Route} from 'react-router-dom';

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

class App extends Component {
   render() {
      return (
         <div className="App">
            <HashRouter base="/floppysiteV2">
                  <Route path='/' component={<Home />} />
                  <Route path='/Deej' component={<Deej />} />
                  <Route path='/Hardware' component={<Hardware />} />
                  <Route path='/Homelab' component={<Homelab />} />
                  <Route path='/Juliette' component={<Juliette />} />
                  <Route path='/Keyboard' component={<Keyboard />} />
                  <Route path='/LineFollower' component={<LineFollower />} />
                  <Route path='/Oled' component={<Oled />} />
                  <Route path='/PicoHdmi' component={<PicoHdmi />} />
                  <Route path='/SchoolProjects' component={<SchoolProjects />} />
                  <Route path='/Zipf' component={<Zipf />} />
                  <Route path='*' component={<NoPage />} />
            </HashRouter>
            </div>
      );
   }
}

export default App;