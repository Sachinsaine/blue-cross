import React, { useEffect, useState } from "react";
import "./about.css";
import axios from "axios";

export const About = () => {
  const [insurances, setInsurances] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:2000/aboutInsurances")
      .then((res) => {
        setInsurances(res.data);
      })
      .catch((err) => {
        console.log("Error fetching about insurances data:", err);
      });
  });
  return (
    <div>
      <div className="aboutCont">
        <section>
          <div className="aboutHeading">
            <div>
              <h2 className="textColor">OUR MISSION</h2>
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
          <div className="clm6grid">
            {insurances.map((item, index) => (
              <div className="">
                <div>
                  <img src={item.image} key={index} alt="" />
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section>
          <div className="aboutHeading">
            <div>
              <img
                src="https://www.iselect.com.au/wp-content/uploads/2024/02/056A9905-Enhanced-NR-Edit-768x512.jpg"
                alt=""
                width="400"
              />
            </div>
            <div>
              <h2 className="textColor">WHO WE ARE</h2>
              <p className="misionPara">
                At BlueCross, we take pride in being a trusted leader in the UK
                insurance industry, offering expert guidance and comprehensive
                insurance solutions for over two decades.
              </p>
              <p>
                With our deep industry expertise, we simplify the complexities
                of insurance comparison, ensuring you make informed decisions
                with ease.
              </p>
              <p>
                BlueCross is more than just an insurance provider—we are
                committed to delivering a personalised experience. Our UK-based
                insurance specialists are dedicated to helping you find the
                right coverage while saving you time and money. Let us assist
                you in securing a policy that truly meets your needs.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
