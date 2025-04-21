import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import "../../../src/App.css";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import logo from "../../assets/BlueCross_Logo.webp";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <img src={logo} alt="logo" width="200" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-0">
        <section className="quoteCont poppins">
          <h2 className="text-center pb-4 poppins-semibold m-0">
            Request a quote
          </h2>
          <div className="">
            <div>
              <Formik>
                <Form>
                  <div className="quoteForm">
                    <Field type="text" placeholder="Full Name" />
                    <Field type="email" placeholder="Email Address" />
                    <Field type="number" placeholder="Mobile Number" />
                    <Field type="text" placeholder="State" />
                    <Field type="text" placeholder="Zipcode" />
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <button className="bttn">Submit</button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </section>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export const Navbar = () => {
  const [modalShow, setModalShow] = React.useState(false);
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
                <button
                  className="bttn px-3"
                  onClick={() => setModalShow(true)}
                >
                  Get a Quote
                </button>

                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
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
              tabIndex="-1"
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
                      to="/claim"
                      className={`nav-link ${
                        location.pathname === "/claim" ? "active" : ""
                      }`}
                    >
                      Claim
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
                  <li data-bs-dismiss="offcanvas">
                    <button
                      type="button"
                      className="bttn px-3 w-100"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Get a Quote
                    </button>
                    <div
                      className="modal fade"
                      id="exampleModal"
                      tabIndex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1
                              className="modal-title fs-5"
                              id="exampleModalLabel"
                            >
                              Modal title
                            </h1>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <section className="quoteCont poppins">
                              <h2 className="text-center pb-4 poppins-semibold m-0 textColor">
                                Request a quote
                              </h2>
                              <div className="quoteContainer">
                                <div className="d-flex flex-column align-item-center gap-3">
                                  <img src={logo} width="200" alt="" />
                                  <p>
                                    Join thousands of satisfied customers who
                                    trust BlueCross UK for their insurance
                                    needs. Get a free, no-obligation quote today
                                    and enjoy peace of mind with the right
                                    coverage.
                                  </p>
                                </div>
                                <div>
                                  <Formik>
                                    <Form>
                                      <div className="quoteForm">
                                        <Field
                                          type="text"
                                          placeholder="Full Name"
                                        />
                                        <Field
                                          type="email"
                                          placeholder="Email Address"
                                        />
                                        <Field
                                          type="number"
                                          placeholder="Mobile Number"
                                        />
                                      </div>
                                      <div className="quoteForm">
                                        <Field
                                          type="text"
                                          placeholder="State"
                                        />
                                        <Field
                                          type="text"
                                          placeholder="Zipcode"
                                        />
                                        <button className="bttn">Submit</button>
                                      </div>
                                    </Form>
                                  </Formik>
                                </div>
                              </div>
                            </section>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button type="button" className="btn btn-primary">
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
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
