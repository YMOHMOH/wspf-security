import React, { useEffect, useState } from "react";
import "../App.css";
import { animateScroll as scroll } from "react-scroll";
import axios from "axios";

import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.post(
        "https://wspf-securite-back.herokuapp.com/",
        {
          name,
          email,
          subject,
          message,
        }
      );
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <>
      <section className="sub-header">
        <Header />
        <h2>Nous contacter</h2>
      </section>
      <section className="location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2616.6654873540324!2d2.0943184155747496!3d49.01694869748333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e68ab18f33a243%3A0x2bcde3804b8bec0f!2s4%20Rue%20de%20l&#39;Aliz%C3%A9%2C%2095610%20%C3%89ragny!5e0!3m2!1sfr!2sfr!4v1621405810975!5m2!1sfr!2sfr"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </section>
      <section className="contact-us">
        <div className="row">
          <div className="contact-col">
            <div>
              <span>
                <h5>4 Bis Rue de l'Alizé, 95610 Éragny, France</h5>
              </span>
            </div>
            <div>
              <span>
                <h5>+33 1 34 42 87 90</h5>
              </span>
            </div>
            <div>
              <span>
                <h5>contact@wspf-group.com</h5>
              </span>
            </div>
          </div>
          <div className="contact-col">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                fetchData();
              }}
            >
              <input
                type="text"
                name="name"
                placeholder="Nom"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Adresse email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Sujet de la demande"
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                required
              />
              <textarea
                rows="8"
                name="message"
                placeholder="Message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                required
              ></textarea>
              <button type="submit" className="hero-btn red-btn">
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
