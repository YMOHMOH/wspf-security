import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "../assets/img/logo.png";

function Header() {
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  return (
    <nav>
      <Link to="/">
        <img src={Logo} />
      </Link>
      <div
        className={!isActiveMenu ? "nav-links" : "nav-links isActive"}
        id="navLinks"
      >
        {/*<i className="fa fa-close" onclick="hideMenu()"></i>*/}
        <FontAwesomeIcon
          className="fa faTimes"
          icon="times"
          onClick={() => {
            setIsActiveMenu(false);
          }}
        />
        <ul>
          <li>
            <Link to="/">
              <span>ACCUEIL</span>
            </Link>
          </li>
          <li>
            <Link to="/surete">
              <span>Sûreté</span>
            </Link>
          </li>
          <li>
            <Link to="/telesurveillance">
              <span>Télésurveillance</span>
            </Link>
          </li>
          <li>
            <Link to="/blog">
              <span>BLOG</span>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <span>CONTACT</span>
            </Link>
          </li>
        </ul>
      </div>
      <FontAwesomeIcon
        icon="bars"
        className="fa faBars"
        onClick={() => {
          setIsActiveMenu(true);
        }}
      />
      {/*<i className="fa fa-bars" onclick="showMenu()"></i>*/}
    </nav>
  );
}

export default Header;
