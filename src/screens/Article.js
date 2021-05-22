import React, { useEffect } from "react";
import "../App.css";
import { animateScroll as scroll } from "react-scroll";

import Header from "../components/Header";
import Footer from "../components/Footer";

import Certificate from "../assets/img/certificate.jpg";

function Article() {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);
  return (
    <>
      <section className="sub-header">
        <Header />
        <h2>Blog</h2>
      </section>
      <section className="blog-content">
        <div className="row">
          <div className="blog-left">
            <img src={Certificate} />
            <h2>Our Certificate & Online Programs For 2021</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque aliquet turpis nulla, eleifend faucibus est
              sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus. Donec
              sit amet nisl non justo malesuada fermentum. Donec eget felis
              dolor. Suspendisse condimentum vestibulum ex ac cursus.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque aliquet turpis nulla, eleifend faucibus est
              sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus. Donec
              sit amet nisl non justo malesuada fermentum. Donec eget felis
              dolor. Suspendisse condimentum vestibulum ex ac cursus. Nam
              pharetra viverra efficitur. Sed pellentesque luctus arcu, quis
              finibus nibh luctus mattis. Vivamus diam turpis, pellentesque vel
              magna sit amet, sollicitudin efficitur tortor. Etiam ornare
              lacinia iaculis. Cras nec dui eu nibh pharetra condimentum.
              Vestibulum ultrices sapien vitae arcu varius volutpat. Integer
              rhoncus a massa ut aliquam. Sed aliquet, nibh non dictum
              ullamcorper, orci arcu posuere tortor, vitae ultrices nulla tortor
              nec sapien. Vestibulum ac nibh at leo maximus molestie.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque aliquet turpis nulla, eleifend faucibus est
              sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus. Donec
              sit amet nisl non justo malesuada fermentum. Donec eget felis
              dolor. Suspendisse condimentum vestibulum ex ac cursus. Nam
              pharetra viverra efficitur. Sed pellentesque luctus arcu, quis
              finibus nibh luctus mattis. Vivamus diam turpis, pellentesque vel
              magna sit amet, sollicitudin efficitur tortor. Etiam ornare
              lacinia iaculis. Cras nec dui eu nibh pharetra condimentum.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque aliquet turpis nulla, eleifend faucibus est
              sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus. Donec
              sit amet nisl non justo malesuada fermentum. Donec eget felis
              dolor. Suspendisse condimentum vestibulum ex ac cursus. Nam
              pharetra viverra efficitur. Sed pellentesque luctus arcu.
            </p>

            <div className="comment-box">
              <h3>Leave a comment</h3>
              <form className="comment-form">
                <input type="text" placeholder="Enter Name" />
                <input type="email" placeholder="Enter email" />
                <textarea rows="5" placeholder="Your Comment"></textarea>
                <button type="submit" className="hero-btn red-btn">
                  POST COMMENT
                </button>
              </form>
            </div>
          </div>

          {/* <div className="blog-right">
          <h3>Post Categories</h3>
          <div>
            <span>Business Analytics</span>
            <span>21</span>
          </div>
          <div>
            <span>Data Science</span>
            <span>28</span>
          </div>
          <div>
            <span>Machine Learning</span>
            <span>15</span>
          </div>
          <div>
            <span>Computer Science</span>
            <span>34</span>
          </div>
          <div>
            <span>AutoCAD</span>
            <span>42</span>
          </div>
          <div>
            <span>Journalism</span>
            <span>22</span>
          </div>
          <div>
            <span>Commerce</span>
            <span>13</span>
          </div>
        </div>*/}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Article;
