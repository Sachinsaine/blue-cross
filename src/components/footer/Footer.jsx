import React from "react";
import "./footer.css";
import logo from "../../assets/BlueCross_Logo.webp";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-content pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <a href="index.html">
                      <img src={logo} className="img-fluid" alt="logo" />
                    </a>
                  </div>
                  <div className="footer-text">
                    <p>
                      Your trusted insurance partner in the UK, offering
                      comprehensive health, life, and travel insurance plans
                      tailored to your needs. Secure your future with BlueCross
                      today.
                    </p>
                  </div>
                  <div className="footer-social-icon">
                    <span>Follow us</span>
                    <a href="#">
                      <FaFacebookSquare />
                    </a>
                    <a href="#">
                      <FaSquareXTwitter />
                    </a>
                    <a href="#">
                      <FaInstagramSquare />
                    </a>
                    <a href="#">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>

                    <li>
                      <a href="#">Get a Qoute</a>
                    </li>

                    <li>
                      <Link to="/claim">Claim</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading m-0">
                    <h3>Subscribe</h3>
                  </div>
                  <div className="footer-text mb-25">
                    <p>
                      Don’t miss to subscribe to our new feeds, kindly fill the
                      form below.
                    </p>
                  </div>
                  <div className="subscribe-form">
                    <form action="#">
                      <input type="text" placeholder="Email Address" />
                      <button>
                        <i className="bi bi-telegram"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="text-center">
                <div className="copyright-text">
                  <p>
                    Copyright &copy; 2025, All Right Reserved{" "}
                    <a
                      className="text-white text-decoration-none"
                      href="https://codepen.io/anupkumar92/"
                    >
                      Sachin Saine
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
