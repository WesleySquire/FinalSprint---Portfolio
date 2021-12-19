import React, { useState, useEffect } from "react";
import logo from "./logo.svg";

import "./App.css";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  NavLink as Link,
  useLocation,
} from "react-router-dom";
import Home from "./Data/Home2";
import About from "./Data/About";
import Contact from "./Data/Contact";
import Work from "./Data/Work";

// header.style.top = scrollValue * 0.5 + "px";

function Header(props) {
  const headerStyle = props.headerStyle || {};
  const location = useLocation();

  return (
    <header
      className={location.pathname == "/" ? "HomePageHeader" : ""}
      style={headerStyle}
    >
      <a href="#" class="name">
        <div>
          <span>W</span>
          <span>e</span>
          <span>s</span>
          <span>l</span>
          <span>e</span>
          <span>y</span>
          <span>&nbsp;</span>
          <span>S</span>
          <span>q</span>
          <span>u</span>
          <span>i</span>
          <span>r</span>
          <span>e</span>
        </div>
        <br />
        <p>
          <span>S</span>
          <span>o</span>
          <span>f</span>
          <span>t</span>
          <span>w</span>
          <span>a</span>
          <span>r</span>
          <span>e</span>
          <span>&nbsp;</span>
          <span>D</span>
          <span>e</span>
          <span>v</span>
          <span>e</span>
          <span>l</span>
          <span>o</span>
          <span>p</span>
          <span>e</span>
          <span>r</span>
        </p>
      </a>
      <ul>
        <li>
          <Link
            to="/"
            className={({ isActive }) =>
              "normalNav " + (isActive ? "active" : "")
            }
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/Work"
            className={({ isActive }) =>
              "normalNav " + (isActive ? "active" : "")
            }
          >
            Work
          </Link>
        </li>
        <li
          id="about"
          className={({ isActive }) =>
            "normalNav " + (isActive ? "active" : "")
          }
        >
          <Link to="/About">About</Link>
        </li>
        <li
          id="contact"
          className={({ isActive }) =>
            "normalNav " + (isActive ? "active" : "")
          }
        >
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
}

function App() {
  const [headerStyle, setHeaderStyle] = useState({});
  return (
    <Router>
      <div className="App">
        <Header headerStyle={headerStyle}></Header>
        <Routes>
          <Route
            path="/"
            element={
              <Home headerStyle={headerStyle} setHeaderStyle={setHeaderStyle} />
            }
          />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Work" element={<Work />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
