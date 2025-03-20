// import React from "react";
// import "./navbar.css";
// import logo from "../../assets/BlueCross_Logo.webp";
// import { Link } from "react-router-dom";

// export const Navbar = () => {
//   return (
//     <>
//       <nav>
//         <div className="navbarCont">
//           <Link to="/">
//             {" "}
//             <img src={logo} width="200" alt="" />
//           </Link>

//           <div>
//             <ul className="navList">
//               <li className="nav-item">
//                 <Link to="/" className="nav-link" aria-current="page" href="#">
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" aria-current="page" href="#">
//                   About
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/contact">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/BlueCross_Logo.webp";

export const Navbar = () => {
  const location = useLocation();

  return (
    <>
      <nav>
        <div className="navbarCont">
          <Link to="/">
            <img src={logo} width="200" alt="BlueCross Logo" />
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
