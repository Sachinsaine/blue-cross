import React from "react";
import "./navbar.css";
import logo from "../../assets/BlueCross_Logo.webp";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav>
        <div className="navbarCont">
          <Link to="/">
            {" "}
            <img src={logo} width="200" alt="" />
          </Link>

          <div>
            <ul className="navList">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
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
