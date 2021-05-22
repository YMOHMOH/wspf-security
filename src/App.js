import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import "./App.css";

import Home from "./screens/Home";
import About from "./screens/About";
import Blog from "./screens/Blog";
import Contact from "./screens/Contact";
import Course from "./screens/Course";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faTimes,
  faStar,
  faStarHalfAlt,
  faMapMarker,
  faPhone,
  faEnvelope,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faBars,
  faTimes,
  faStar,
  faStarHalfAlt,
  faMapMarker,
  faPhone,
  faEnvelope,
  faAngleUp
);

function App() {
  const [scrollTop, setScrollTop] = useState("scrollTop");

  const activeScrollTop = () => {
    if (window.scrollY > 500) {
      setScrollTop("scrollTop active");
    } else {
      setScrollTop("scrollTop");
    }
  };

  window.addEventListener("scroll", activeScrollTop);

  return (
    <Router>
      <Switch>
        <div
          className={scrollTop}
          onClick={() => {
            scroll.scrollToTop();
          }}
        ></div>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/course">
          <Course />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
