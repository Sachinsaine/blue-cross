import React from "react";
import "./footer.css";
import logo from "../../assets/BlueCross_Logo.webp";

export const Footer = () => {
  return (
    <div>
      <footer class="footer-section">
        <div class="container">
          <div class="footer-content pt-5 pb-5">
            <div class="row">
              <div class="col-xl-4 col-lg-4 mb-50">
                <div class="footer-widget">
                  <div class="footer-logo">
                    <a href="index.html">
                      <img src={logo} class="img-fluid" alt="logo" />
                    </a>
                  </div>
                  <div class="footer-text">
                    <p>
                      Your trusted insurance partner in the UK, offering
                      comprehensive health, life, and travel insurance plans
                      tailored to your needs. Secure your future with BlueCross
                      today.
                    </p>
                  </div>
                  <div class="footer-social-icon">
                    <span>Follow us</span>
                    <a href="#">
                      <i class="bi bi-facebook"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-twitter twitter-bg"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-google-plus-g google-bg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">about</a>
                    </li>
                    <li>
                      <a href="#">services</a>
                    </li>

                    <li>
                      <a href="#">Contact</a>
                    </li>

                    <li>
                      <a href="#">Our Services</a>
                    </li>

                    <li>
                      <a href="#">Contact us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div class="footer-widget">
                  <div class="footer-widget-heading m-0">
                    <h3>Subscribe</h3>
                  </div>
                  <div class="footer-text mb-25">
                    <p>
                      Don’t miss to subscribe to our new feeds, kindly fill the
                      form below.
                    </p>
                  </div>
                  <div class="subscribe-form">
                    <form action="#">
                      <input type="text" placeholder="Email Address" />
                      <button>
                        <i class="bi bi-telegram"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright-area">
          <div class="container">
            <div class="row">
              <div class="text-center text-center">
                <div class="copyright-text">
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
