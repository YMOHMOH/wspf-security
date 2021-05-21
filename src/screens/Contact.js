import React from "react";
import "../App.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <section class="sub-header">
        <Header />
        <h2>Contact Us</h2>
      </section>
      <section class="location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2616.6654873540324!2d2.0943184155747496!3d49.01694869748333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e68ab18f33a243%3A0x2bcde3804b8bec0f!2s4%20Rue%20de%20l&#39;Aliz%C3%A9%2C%2095610%20%C3%89ragny!5e0!3m2!1sfr!2sfr!4v1621405810975!5m2!1sfr!2sfr"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </section>
      <section class="contact-us">
        <div class="row">
          <div class="contact-col">
            <div>
              <i class="fa fa-home"></i>
              <span>
                <h5>Xyz Road, Abc Building</h5>
                <p>Bangalore, Karnataka, IN</p>
              </span>
            </div>
            <div>
              <i class="fa fa-phone"></i>
              <span>
                <h5>+1 0123456789</h5>
                <p>Monday to Saturday 10 Am to 6 Pm</p>
              </span>
            </div>
            <div>
              <i class="fa fa-envelope-o"></i>
              <span>
                <h5>info@easytutorialspro.com</h5>
                <p>Email us your query</p>
              </span>
            </div>
          </div>
          <div class="contact-col">
            <form method="post" action="contact-form-handler.php">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Enter your subject"
                required
              />
              <textarea
                rows="8"
                name="message"
                placeholder="Message"
                required
              ></textarea>
              <button type="submit" class="hero-btn red-btn">
                Send Message
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
