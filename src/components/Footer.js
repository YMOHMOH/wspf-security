import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  let history = useHistory();

  return (
    <>
      <FooterWrapper>
        <FooterContainer>
          <AboutUs>
            <h4>WSPF : World Security Protect France</h4>
            <p>Pour votre protection. Le cœur de la sécurité.</p>
            {/*<SciFooter>
              <li>
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </li>
              <li>
                <i className="fa fa-snapchat" aria-hidden="true"></i>
              </li>
              <li>
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </li>
            </SciFooter>*/}
          </AboutUs>
          <QuickLinks>
            <h4>Informations</h4>
            <ul>
              <li
                onClick={() => {
                  history.push("/mentionslegales");
                }}
              >
                Mentions légales
              </li>
              <li
                onClick={() => {
                  history.push("/vieprivee");
                }}
              >
                Vie privée
              </li>
              <li
                onClick={() => {
                  history.push("/privacy");
                }}
              >
                Infos cookies
              </li>
            </ul>
          </QuickLinks>
          <ContactFooter>
            <h4>Service Client</h4>
            <InfoFooter>
              <li>
                <span>
                  <FontAwesomeIcon icon="map-marker" />
                </span>
                <span>
                  4 Bis Rue de l'Alizé,
                  <br />
                  95610 Éragny, France
                </span>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon="phone" />
                </span>
                <p>+331 34 42 87 90</p>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon="envelope" />
                </span>
                <p>contact@wspf-group.com</p>
              </li>
              <li
                onClick={() => {
                  history.push("/contact");
                }}
              >
                <span>
                  <FontAwesomeIcon icon="envelope" />
                </span>
                <p>Contact en ligne</p>
              </li>
            </InfoFooter>
          </ContactFooter>
        </FooterContainer>
      </FooterWrapper>
      <CopyrightText>
        <p>Copyright © 2021 World Security Protect France</p>
      </CopyrightText>
    </>
  );
}

export default Footer;

/* --------------- FOOTER ---------------- */

export const FooterWrapper = styled.footer`
  display: block;
  position: relative;
  width: 100%;
  height: auto;
  padding: 3.1rem 6.25rem;
  background: #333;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  box-sizing: border-box;

  @media (max-width: 991px) {
    padding: 40px;
  }

  p {
    color: #999;
  }
`;

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 991px) {
    flex-direction: column;
  }

  h4 {
    position: relative;
    color: #fff;
    font-weight: 500;
    margin-bottom: 15px;

    &:before {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 50px;
      height: 2px;
      background: #f00;
    }
  }
`;

export const AboutUs = styled.div`
  margin-right: 1.9rem;
  width: 40%;

  @media (max-width: 991px) {
    margin-right: 0rem;
    margin-bottom: 2.5rem;
    width: 100%;
  }
`;

export const SciFooter = styled.ul`
  list-style: none;
  margin-top: 20px;
  display: flex;

  li {
    list-style: none;
    width: 40px;
    height: 40px;
    background: #222;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    text-decoration: none;
    border-radius: 4px;
    cursor: pointer;
    color: #fff;

    &:hover {
      background: #f00;
    }
  }
`;

export const QuickLinks = styled.div`
  position: relative;
  width: 25%;
  margin-right: 1.9rem;

  @media (max-width: 991px) {
    margin-right: 0rem;
    margin-bottom: 2.5rem;
    width: 100%;
  }
  ul {
    list-style: none;
    li {
      color: #999;
      margin-bottom: 10px;
      cursor: pointer;
      &:hover {
        color: #fff;
      }
    }
  }
`;

export const ContactFooter = styled.div`
  margin-right: 1.9rem;
  width: calc(35% - 3.8rem);
  margin-right: 0 !important;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const InfoFooter = styled.ul`
  list-style: none;
  position: relative;
  li {
    display: flex;
    margin-bottom: 1rem;
    cursor: pointer;
    &:hover {
      color: #fff;
    }
    p {
      color: #999;
      &:hover {
        color: #fff;
      }
    }
    span {
      color: #999;
      &:hover {
        color: #fff;
      }
      &:nth-child(1) {
        color: #fff;
        font-size: 1.25rem;
        margin-right: 10px;
      }
    }
  }
`;

export const CopyrightText = styled.div`
  width: 100%;
  background: #181818;
  /* padding: 8px 6.25rem; */
  /* text-align: center; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  color: #999;
  /* @media (max-width: 991px) {
    padding: 8px 2.5rem;
  } */
  @media (max-width: 991px) {
    padding: 0rem;
  }
`;

/* --------------- END OF FOOTER ---------------- */
