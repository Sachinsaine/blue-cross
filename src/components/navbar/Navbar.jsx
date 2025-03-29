import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
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
          <div>
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
      </nav>
    </>
  );
};
