import React from "react";
import "./about.css";

export const About = () => {
  return (
    <div>
      <div className="aboutCont">
        <section>
          <div className="aboutHeading">
            <div>
              <h2>OUR MISSION</h2>
              <p className="misionPara">
                At BlueCross, we are committed to simplifying lives by providing
                efficient, cost-effective, and hassle-free insurance solutions,
                saving our customers time, effort, and money.
              </p>
            </div>
            <div>
              <p>
                At BlueCross, we empower you to make informed decisions with
                confidence when selecting essential insurance solutions. With
                BlueCross, you can conveniently compare policies online or
                consult with our knowledgeable insurance experts over the phone.
                If you choose to call, you'll speak with a dedicated UK-based
                professional ready to assist you.
              </p>

              <p>
                While our team operates across the UK, our headquarters ensure
                we stay connected with the communities we serve. Whether
                discussing the latest market trends or helping you find the best
                coverage for your Health, Home, or Business Insurance, we are
                here to provide reliable guidance every step of the way.
              </p>
            </div>
          </div>
        </section>

        <section className="compresive">
          <div className="threeColumGrid">
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU1pgP8kKypy_E9XRa7aU4S8dOuMGXfp5UQg&s"
                alt=""
                width="64"
              />
              <h4>Affordable Plans</h4>
              <p>
                We offer flexible coverage options to suit different budgets,
                ensuring you get the protection you need at a price you can
                afford.
              </p>
            </div>
            <div>
              <img
                src="https://static.thenounproject.com/png/3777058-200.png"
                alt=""
                width="64"
              />
              <h4>Reliable Support</h4>
              <p>
                Our dedicated customer service team is available 24/7 to assist
                you with any queries, claims, or concerns.
              </p>
            </div>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCVsxcrMptpbUeJWzmB_FLZy0Zeh-l1JRnVA&s"
                alt=""
                width="64"
              />
              <h4>Comprehensive Coverage </h4>
              <p>
                From routine check-ups to specialized treatments, our plans
                cover a wide range of medical services, so you and your family
                are always protected.
              </p>
            </div>
          </div>

          <div className="threeColumGrid">
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/128/8743/8743903.png"
                alt=""
                width="65"
              />
              <h4>Customer Satisfaction First </h4>
              <p>
                We listen to your needs and continuously improve our services to
                provide a smooth and hassle-free experience.
              </p>
            </div>
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/128/16347/16347261.png"
                alt=""
                width="65"
              />
              <h4>Fast & Easy Claims </h4>
              <p>
                Our efficient claims process ensures you get the support you
                need without unnecessary delays.
              </p>
            </div>
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/128/4230/4230869.png"
                alt=""
                width="64"
              />
              <h4>24/7 Assistance </h4>
              <p>
                Our expert support team is always available to guide you through
                your insurance journey.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
