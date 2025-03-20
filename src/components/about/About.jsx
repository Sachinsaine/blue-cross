import React from "react";
import "./about.css";

export const About = () => {
  return (
    <div>
      <div className="aboutCont">
        <div className="aboutPage">
          <h1>Welcome to BlueCross UK – Your Trusted Health Partner</h1>
          <p>
            At <b>BlueCross UK</b>, we believe that{" "}
            <b> quality healthcare should be accessible to everyone</b>. As a
            leading health insurance provider in the UK, we offer{" "}
            <strong> affordable, flexible, and comprehensive coverage </strong>{" "}
            designed to protect you and your loved ones. Whether you're an
            individual, a family, or a self-employed professional, our tailored
            insurance plans ensure that you receive the best medical care
            without financial stress.
          </p>
          <p>
            With a commitment to transparency, customer satisfaction, and
            hassle-free claims, we make health insurance simple and
            reliable—because your well-being is our priority.
          </p>
        </div>
        <section className="compresive">
          <p>
            At <b>BlueCross UK,</b> we are committed to providing{" "}
            <b> affordable, reliable, and comprehensive health insurance </b>{" "}
            that gives you peace of mind. Our goal is to ensure that everyone
            has access to <b> quality healthcare without financial burdens. </b>
          </p>
          <div className="threeColumGrid">
            <div>
              <h4>Affordable Plans</h4>
              <p>
                We offer flexible coverage options to suit different budgets,
                ensuring you get the protection you need at a price you can
                afford.
              </p>
            </div>
            <div>
              <h4>Reliable Support</h4>
              <p>
                Our dedicated customer service team is available 24/7 to assist
                you with any queries, claims, or concerns.
              </p>
            </div>
            <div>
              <h4>Comprehensive Coverage </h4>
              <p>
                From routine check-ups to specialized treatments, our plans
                cover a wide range of medical services, so you and your family
                are always protected.
              </p>
            </div>
          </div>
          <p className="mt-3">
            At BlueCross UK, we believe in making health insurance simple,
            transparent, and stress-free—because your well-being matters.
          </p>

          <p>
            At <b>BlueCross UK</b>, your <b> health and satisfaction </b> are at
            the heart of everything we do. We are dedicated to providing{" "}
            <b>seamless, customer-centric insurance solutions </b> that put your
            well-being first.
          </p>
          <div className="fourColumGrids">
            <div>
              <h4>Customer Satisfaction First </h4>
              <p>
                We listen to your needs and continuously improve our services to
                provide a smooth and hassle-free experience.
              </p>
            </div>
            <div>
              <h4>Fast & Easy Claims </h4>
              <p>
                Our efficient claims process ensures you get the support you
                need without unnecessary delays.
              </p>
            </div>
            <div>
              <h4>24/7 Assistance </h4>
              <p>
                Our expert support team is always available to guide you through
                your insurance journey.
              </p>
            </div>
            <div>
              <h4>Holistic Well-Being </h4>
              <p>
                Beyond medical coverage, we offer wellness benefits, mental
                health support, and preventive care options.
              </p>
            </div>
          </div>
          <p>
            With trust, transparency, and care at our core, we make sure that
            you feel supported every step of the way—because your peace of mind
            is our priority.
          </p>
        </section>
      </div>
    </div>
  );
};
