import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import "../App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "../assets/img/logo.png";

function Header() {
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  let history = useHistory();

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
            <span
              onClick={() => {
                history.push("/");
              }}
            >
              ACCUEIL
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                history.push("/surete");
              }}
            >
              Sûreté
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                history.push("/telesurveillance");
              }}
            >
              Télésurveillance
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                history.push("/blog");
              }}
            >
              {" "}
              BLOG
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                history.push("/contact");
              }}
            >
              {" "}
              CONTACT
            </span>
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
