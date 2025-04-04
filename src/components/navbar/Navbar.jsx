import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import "../../../src/App.css";
import axios from "axios";

export const Navbar = () => {
  const location = useLocation();
  const [logo, setLogo] = useState(null);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:2000/assets")
      .then((res) => {
        setLogo(res.data.logo);
      })
      .catch((err) => {
        console.log("Error fetching logo:", err);
      });
  }, []);
  return (
    <>
      <nav>
        <div className="navbarCont">
          <Link to="/">
            {logo ? (
              <img
                src={logo}
                alt="BlueCross Logo"
                style={{ width: "200px", height: "auto" }}
              />
            ) : (
              <p>Loading logo...</p>
            )}
          </Link>
          <div className="windowLinks">
            <ul className="navList">
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/claim"
                  className={`nav-link ${
                    location.pathname === "/claim" ? "active" : ""
                  }`}
                >
                  Claim
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className={`nav-link ${
                    location.pathname === "/contact" ? "active" : ""
                  }`}
                >
                  Contact
                </Link>
              </li>
              <li>
                <button className="bttn px-3">Get a Quote</button>
              </li>
            </ul>
          </div>
          <div className="rightToggle">
            <button
              className="btn p-0"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <i className="bi bi-list fs-1"></i>
            </button>

            <div
              className="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">
                  <Link to="/">
                    {logo ? (
                      <img
                        src={logo}
                        alt="BlueCross Logo"
                        style={{ width: "160px", height: "auto" }}
                      />
                    ) : (
                      <p>Loading logo...</p>
                    )}
                  </Link>
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navList">
                  <li className="nav-item" data-bs-dismiss="offcanvas">
                    <Link
                      to="/"
                      className={`nav-link ${
                        location.pathname === "/" ? "active" : ""
                      }`}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item" data-bs-dismiss="offcanvas">
                    <Link
                      to="/about"
                      className={`nav-link ${
                        location.pathname === "/about" ? "active" : ""
                      }`}
                    >
                      About
                    </Link>
                  </li>
                  <li className="nav-item" data-bs-dismiss="offcanvas">
                    <Link
                      to="/contact"
                      className={`nav-link ${
                        location.pathname === "/contact" ? "active" : ""
                      }`}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
