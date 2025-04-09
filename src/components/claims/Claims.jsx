import React from "react";
import "./claim.css"; // Ensure you have this CSS file
import "../../../src/App.css";
import { useState } from "react";
export const Claims = () => {
  const [selectedType, setSelectedType] = useState("Health");

  const claimTypes = [
    { name: "Health", icon: "bi-heart-pulse" },
    { name: "Life", icon: "bi-car-front-fill" },
    { name: "Motor", icon: "bi-car-front-fill" },
    { name: "Travel", icon: "bi-globe-americas" },
  ];

  return (
    <div>
      <div className="claims-container">
        <div className="position-relative">
          <div className="twoColumGrid text-start">
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <h1>Your Protection, Our Priority</h1>
              <p>
                At BlueCross, we are committed to standing by you and your
                family during life’s most challenging times. Our claims process
                is designed to be fast, simple, and hassle-free, ensuring you
                receive your benefits with care and efficiency. We collect only
                the necessary information, so you can focus on what matters
                most.
              </p>

              <div className="twoColumGrid">
                <div>
                  <h3>Our Approach</h3>
                  <p>
                    We guide you through the claims process with empathy and
                    expertise, ensuring a smooth and transparent experience.
                  </p>
                </div>
                <div>
                  <h3>Our Claim Process</h3>
                  <p>
                    We keep our claims process simple just the essentials, with
                    timely updates to keep you informed every step of the way.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="cont"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <div className="circleOuter"></div>
              <div className="circle"></div>
              <div className="center-image">
                <img src="/src/assets/handshake.jpeg" alt="Handshake" />
              </div>

              <div className="icon" style={{ top: "5%", left: "43%" }}>
                <i className="bi bi-person-fill"></i>
              </div>
              <div className="icon" style={{ top: "25%", left: "90%" }}>
                <i class="bi bi-clock-history"></i>
              </div>
              <div className="icon" style={{ bottom: "-4%", left: "45%" }}>
                <i class="bi bi-check-circle-fill"></i>
              </div>
              <div className="icon" style={{ top: "25%", left: "-2%" }}>
                <i class="bi bi-geo-alt-fill"></i>
              </div>
              <div className="icon" style={{ bottom: "25%", left: "74%" }}>
                <i class="bi bi-clipboard-check-fill"></i>
              </div>
              <div className="icon" style={{ bottom: "25%", left: "14%" }}>
                <i class="bi bi-people-fill"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="insuSteps">
        <div>
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <h1>How to file your claim?</h1>
            <h3>Quick and Easy 3-Step Claim Process</h3>
          </div>
          <div
            className="threeColumGrid gap-5 pt-5"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div>
              <div className="claimType">
                <span className="step">1</span>
                <span className="claimIcon">
                  <i class="bi bi-clipboard2-check"></i>
                </span>
              </div>
              <h4>Claim Reporting</h4>
              <p>
                Notify us About your claim through our online portal, phone, or
                in person.
              </p>
            </div>
            <div>
              <div className="claimType">
                <span className="step">2</span>
                <span className="claimIcon">
                  <i class="bi bi-file-text"></i>
                </span>
              </div>
              <h4>Document Submission</h4>
              <p>
                Submit the neccessary documents for varification quick and
                hassle free.
              </p>
            </div>
            <div>
              <div className="claimType">
                <span className="step">3</span>
                <span className="claimIcon">
                  <i class="bi bi-check2-square"></i>
                </span>
              </div>
              <h4>Claim Settlement</h4>
              <p>
                Once verified your claim will be processed and settled promptly.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="typesOfInsurance">
        <h3>Looking for</h3>
        <h4>Choose your Claim Kind</h4>
        <div className="gridColmn5">
          {claimTypes.map((type) => (
            <div
              key={type.name}
              className={`insuTypeCont ${
                selectedType === type.name ? "active" : ""
              }`}
              onClick={() => setSelectedType(type.name)}
              style={{ cursor: "pointer" }}
            >
              <i className={`bi ${type.icon}`}></i> <span>{type.name}</span>
            </div>
          ))}
        </div>

        {selectedType === "Health" && (
          <div className="Health">
            <div className="twoColumGrid">
              <div
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <h3 className="textColor fw-bold">What is a Health Claim?</h3>
                <p>
                  A Health Insurance Claim is a formal request made by the
                  policyholder to their insurance provider to cover medical
                  expenses incurred due to illness, injury, hospitalization, or
                  other health-related treatments.
                </p>
                <ul>
                  <li>
                    <b>Cashless Claim:</b> Get treated at a network hospital
                    without paying upfront. BlueCross settles the bill directly
                    with the hospital.
                  </li>
                  <li>
                    <b>Reimbursement Claim:</b> Pay the medical bills first,
                    then submit them to us for reimbursement.
                  </li>
                </ul>
                <p>
                  With BlueCross, filing a health insurance claim is simple,
                  fast, and paperless. Whether it's an emergency or a planned
                  procedure, we're committed to ensuring you receive timely care
                  without the financial stress.
                </p>
                <p>
                  Your health is our priority — we've got you covered when you
                  need it the most.
                </p>
              </div>
              <div
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="insTypeCont"
              >
                <div className="circle"></div>
                <div className="center-image">
                  <img
                    src="/src/assets/healthInsImg.avif"
                    alt=""
                    className="w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        {selectedType === "Life" && (
          <div className="Life">
            <div className="twoColumGrid">
              <div
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <h3 className="textColor fw-bold">What is a Life Claim?</h3>
                <p>
                  A <strong>Life Insurance Claim</strong> is a request made by
                  the nominee or beneficiary of a life insurance policy to
                  receive the assured sum in the unfortunate event of the
                  policyholder’s death.
                </p>

                <p>
                  At <b>BlueCross</b>, we understand that this is a sensitive
                  time. That’s why we ensure the process is simple, respectful,
                  and hassle-free. Once the necessary documents are submitted
                  and verified, we work to process the claim{" "}
                  <strong>quickly and transparently,</strong> providing
                  financial support to your loved ones when they need it most.
                </p>
                <p>
                  Our <strong>Private Life Insurance Plans</strong> are designed
                  to offer peace of mind — protecting your family's future,
                  fulfilling long-term commitments, and offering financial
                  security even in your absence.
                </p>
                <p>Let BlueCross stand by your family, just like you would.</p>
              </div>

              <div
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="insTypeCont"
              >
                <div className="circle"></div>
                <div className="center-image">
                  <img
                    src="/src/assets/lifeInsImg.avif"
                    alt=""
                    className="w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        {selectedType === "Motor" && (
          <div className="Motor">
            <div className="twoColumGrid">
              <div
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <h3 className="textColor fw-bold">What is a Motor Claim?</h3>
                <p>
                  A <b>Motor Insurance Claim</b>is a request made by the
                  policyholder to their insurance provider to recover financial
                  losses resulting from damage or theft involving their vehicle.
                  This includes incidents such as:
                </p>
                <ul>
                  <li>Road accidents</li>
                  <li>
                    Natural or man-made calamities (floods, earthquakes, riots,
                    etc.)
                  </li>
                  <li>Fire-related damage</li>
                  <li>Theft or vandalism</li>
                </ul>
                <p>
                  At <b>BlueCross,</b> we’ve simplified the claim process —
                  allowing you to file your <b>Motor Insurance Claim</b> online
                  through our website or mobile app, with{" "}
                  <b>zero paperwork and faster approvals.</b>
                </p>
                <p>
                  Whether it’s a fender bender or a major mishap, BlueCross is
                  here to help you get back on the road — quickly and
                  stress-free.
                </p>
              </div>

              <div
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="insTypeCont"
              >
                <div className="circle"></div>
                <div className="center-image">
                  <img src="/src/assets/carr.jpeg" alt="" className="w-100" />
                </div>
              </div>
            </div>
          </div>
        )}
        {selectedType === "Travel" && (
          <div className="Travel">
            <div className="twoColumGrid">
              <div
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <h3 className="textColor fw-bold">What is a Travel Claim?</h3>
                <p>
                  A <strong>Travel Insurance Claim</strong> is a formal request
                  made by the policyholder to cover unexpected expenses incurred
                  during a trip — such as trip cancellations, medical
                  emergencies, lost baggage, flight delays, or passport loss.
                </p>
                <p>
                  Whether you're traveling domestically or abroad, unforeseen
                  events can disrupt your journey. With{" "}
                  <b>BlueCross Travel Insurance</b>, you're protected against
                  these uncertainties. Our policyholders can:
                </p>
                <ul>
                  <li>
                    File claims for <strong>emergency medical expenses</strong>{" "}
                    abroad
                  </li>
                  <li>
                    Get reimbursed for{" "}
                    <strong>lost, stolen, or delayed baggage</strong>
                  </li>
                  <li>
                    Claim compensation for{" "}
                    <b>lost, stolen, or delayed baggage</b>
                  </li>
                  <li>
                    Receive support for <b>passport or travel document loss</b>
                  </li>
                </ul>
                <p>
                  We’ve made the claim process smooth and digital — so you can
                  <strong>
                    submit your Travel Insurance Claim online,
                  </strong>{" "}
                  from anywhere in the world.
                </p>
                <p>
                  Travel with confidence, knowing that BlueCross has your back
                  wherever you go.
                </p>
              </div>

              <div
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="insTypeCont"
              >
                <div className="circle"></div>
                <div className="center-image">
                  <img
                    src="/src/assets/travelInsImg.jpeg"
                    alt=""
                    className="w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
