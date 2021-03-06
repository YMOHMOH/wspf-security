import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import "./App.css";

import Home from "./screens/Home";
import About from "./screens/About";
import Blog from "./screens/Blog";
import Contact from "./screens/Contact";
import Course from "./screens/Course";
import Cgu from "./screens/Cgu";
import Private from "./screens/Private";
import Privacy from "./screens/Privacy";
import Article from "./screens/Article";

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
  faTag,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faBars,
  faTimes,
  faStar,
  faStarHalfAlt,
  faMapMarker,
  faPhone,
  faEnvelope,
  faAngleUp,
  faTag
);

function App() {
  const [scrollTop, setScrollTop] = useState("scrollTop");

  const activeScrollTop = () => {
    if (window.scrollY > 300) {
      setScrollTop("scrollTop active");
    } else {
      setScrollTop("scrollTop");
    }
  };

  window.addEventListener("scroll", activeScrollTop);

  return (
    <Router>
      <Switch>
        <Route path="/article">
          <Article />
        </Route>
        <Route path="/mentionslegales">
          <Cgu />
        </Route>
        <Route path="/vieprivee">
          <Private />
        </Route>
        <Route path="/privacy">
          <Privacy />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/surete">
          <About />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/telesurveillance">
          <Course />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
      <div
        className={scrollTop}
        onClick={() => {
          scroll.scrollToTop();
        }}
      ></div>
    </Router>
  );
}

export default App;
