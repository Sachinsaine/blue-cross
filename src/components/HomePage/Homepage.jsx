import React, { useEffect, useState } from "react";
import img01 from "../../assets/iStock-1150572145-scaled-e1671122212776-1200x800.jpg";
import img02 from "../../assets/iStock-979623466-scaled-e1671122392323-1200x800.jpg";
import img03 from "../../assets/Research-1200x801.jpeg";
import img04 from "../../assets/shutterstock_177027719-scaled-e1639677425706-1200x666.jpg";
import "./Homepage.css";
import "../../../src/App.css";
import insurance01 from "../../assets/insurances/medical-insurance.mp4";
import insurance02 from "../../assets/insurances/medicine.mp4";
import insurance03 from "../../assets/insurances/car-insurance.mp4";
import insurance04 from "../../assets/insurances/airplane.mp4";
import checkIcon from "../../assets/insurances/checkmark.png";
import { Field, Form, Formik } from "formik";
import ReviewsSection from "./ReviewCarousel";
import axios from "axios";
export const Homepage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const questions = [
    "Who can apply for BlueCross UK Insurance?",
    "Can I customize my insurance plan?",
    "How do I get a quote?",
    "How do I make a claim?",
    "Are there any hidden fees?",
  ];

  const answers = [
    "BlueCross UK Insurance is available to a wide range of individuals, ensuring financial security and peace of mind. UK residents, including permanent residents, expatriates with valid visas, and international students studying in the UK, are eligible to apply. Working professionals, whether employed full-time, part-time, or self-employed, can also benefit from our insurance plans. Visitors and expatriates in the UK looking for temporary or travel insurance can find suitable options with BlueCross. Additionally, retirees and senior citizens seeking health or life insurance can explore policies tailored to their needs. Eligibility may vary depending on the specific policy, so feel free to contact us for personalized assistance.",
    "Yes, BlueCross UK allows you to customize your insurance plan to match your specific needs. You can choose from various coverage options, add extra benefits, and adjust your policy based on your lifestyle, budget, and requirements. Whether you need additional coverage for specific medical conditions, international travel protection, or enhanced family benefits, our flexible plans let you tailor your insurance to ensure complete peace of mind. Our team is here to help you create a plan that works best for you. Contact us to explore your options and get personalized recommendations.",
    "Getting a quote for your BlueCross UK insurance plan is quick and easy. Simply visit our website and use the online quote tool by entering your details and coverage preferences. You can also contact our customer support team for a personalized quote based on your specific needs. Whether you're looking for health, life, or travel insurance, our experts will guide you through the process and help you find the best plan at a competitive price. Get started today and secure the coverage that suits you best.",
    "Filing a claim with BlueCross UK is a simple and hassle-free process. You can start by logging into your account on our website and submitting the necessary details through our online claims portal. Alternatively, you can contact our claims support team for assistance. Ensure you have all relevant documents, such as medical reports, invoices, or policy details, to speed up the process. Once your claim is submitted, our team will review it and keep you updated on the status. We are committed to making the claims process smooth and efficient, ensuring you get the support you need when it matters most.",
    "At BlueCross UK, transparency is our priority. There are no hidden fees in our insurance plans. All costs, including premiums, deductibles, and any additional charges, are clearly outlined in your policy documents. Before finalizing your plan, you will receive a detailed breakdown of costs to ensure complete clarity. If you have any questions about fees or charges, our team is always available to provide full transparency and assist you in understanding your policy.",
  ];
  const handleClick = (index) => {
    setActiveIndex(index);
  };
  const [chooseus, setChooseus] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:2000/ychooseus")
      .then((res) => {
        setChooseus(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="3000"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={img02}
                className="d-block w-100"
                height="600"
                alt="Slide 2"
              />
              <div className="carouseCaption">
                <h1 className="poppins-bold">
                  Join the UK’s leading health benefits provider for trusted
                  care.
                </h1>
                <p className="poppins-medium">
                  Choose a plan that suits your healthcare, prescriptions,
                  wellness, dental, vision, and more.
                </p>
              </div>
            </div>
            <div className="carousel-item ">
              <img
                src={img01}
                className="d-block w-100"
                height="600"
                alt="Slide 1"
              />
              <div className="carouseCaption">
                <h1 className="poppins-bold">
                  Choose the UK's top-rated travel insurance for peace of mind
                  on your journey.
                </h1>
                <p className="poppins-medium">
                  Enjoy confidence and peace of mind with Blue Cross when
                  traveling across the UK or internationally.
                </p>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src={img03}
                className="d-block w-100"
                height="600"
                alt="Slide 3"
              />
              <div className="carouseCaption">
                <h1 className="poppins-bold">
                  Enjoy customised group benefits trusted by millions in the UK.
                </h1>
                <p className="poppins-medium">
                  Address the unique needs of your team, from local businesses
                  to large organisations.
                </p>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src={img04}
                className="d-block w-100"
                height="600"
                alt="Slide 4"
              />
              <div className="carouseCaption">
                <h1 className="poppins-bold">
                  Safeguard your loved ones with reliable and comprehensive
                  coverage in the UK.
                </h1>
                <p className="poppins-medium">
                  Protect your financial well-being with the UK's most respected
                  life insurance provider.
                </p>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <main>
          <div className="mainData">
            <h1 className="poppins-bold">
              Welcome to BlueCross UK – Protecting Your Future
            </h1>
            <section className="ourServices">
              <h3 className="poppins-semibold text-center">
                Our Insurance Services
              </h3>
              <div>
                <div className="fourColumGrid">
                  <div data-aos="zoom-in-down">
                    <h4 className="poppins-semibold">
                      Private Health Insurance
                    </h4>
                    <div>
                      <video src={insurance01} autoPlay loop muted width="70" />{" "}
                    </div>
                    <p className="poppins">
                      Get access to the best private healthcare facilities,
                      quick GP appointments, and specialist treatments without
                      NHS waiting times. Our plans cover:
                    </p>
                    <ul>
                      <li>
                        {" "}
                        <img src={checkIcon} alt="" /> GP & specialist
                        consultations
                      </li>
                      <li>
                        <img src={checkIcon} alt="" /> Hospital & surgical cover
                      </li>
                      <li>
                        <img src={checkIcon} alt="" /> Mental health support
                      </li>
                      <li>
                        <img src={checkIcon} alt="" /> Dental & optical add-ons
                      </li>
                    </ul>
                  </div>
                  <div data-aos="zoom-in-down">
                    <h4 className="poppins-semibold">Life Insurance</h4>
                    <div>
                      <video src={insurance02} autoPlay loop muted width="70" />{" "}
                    </div>
                    <p className="poppins">
                      Protect your loved ones’ future with a customized life
                      insurance plan that ensures financial stability when they
                      need it most. Choose from:
                    </p>
                    <ul>
                      <li>
                        {" "}
                        <img src={checkIcon} alt="" /> Term Life Insurance –
                        Coverage for a fixed period
                      </li>
                      <li>
                        {" "}
                        <img src={checkIcon} alt="" /> Whole Life Insurance –
                        Lifelong financial protection
                      </li>
                      <li>
                        {" "}
                        <img src={checkIcon} alt="" />
                        Critical Illness Cover – Support if diagnosed with a
                        serious condition
                      </li>
                    </ul>
                  </div>
                  <div data-aos="zoom-in-down">
                    <h4 className="poppins-semibold">Motor Insurance</h4>
                    <div>
                      <video src={insurance03} autoPlay loop muted width="70" />{" "}
                    </div>
                    <p className="poppins">
                      Drive with confidence and peace of mind, knowing you’re
                      fully protected with our comprehensive motor insurance
                      plans. We offer:
                    </p>
                    <ul>
                      <li>
                        {" "}
                        <img src={checkIcon} alt="" />
                        Fully comprehensive, third-party, and fire & theft
                        options
                      </li>
                      <li>
                        <img src={checkIcon} alt="" /> Coverage for personal and
                        business vehicles
                      </li>
                      <li>
                        <img src={checkIcon} alt="" /> Breakdown assistance and
                        legal cover
                      </li>
                    </ul>
                  </div>
                  <div data-aos="zoom-in-down">
                    <h4 className="poppins-semibold">Travel Insurance</h4>
                    <div>
                      <video src={insurance04} autoPlay loop muted width="70" />{" "}
                    </div>
                    <p className="poppins">
                      Whether you're traveling for leisure, business, or
                      adventure, our travel insurance provides comprehensive and
                      reliable coverage for:
                    </p>
                    <ul>
                      <li>
                        <img src={checkIcon} alt="" />
                        Emergency medical expenses
                      </li>
                      <li>
                        <img src={checkIcon} alt="" />
                        Trip cancellations & delays
                      </li>
                      <li>
                        <img src={checkIcon} alt="" />
                        Lost baggage protection
                      </li>
                      <li>
                        <img src={checkIcon} alt="" />
                        COVID-19 coverage options
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <section className="whyChooseUs">
            <h2 className="poppins-bold">Why Choose BlueCross UK?</h2>
            <div className="chooseUs">
              {chooseus.map((item, index) => (
                <div>
                  <img src={item.img} key={index} width="60" />
                  <h3 className="poppins-semibold">{item.title} </h3>
                  <p className="poppins">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <ReviewsSection />
          </section>
          <section className="faq">
            <h2 className="mb-4 text-center poppins-bold">
              FAQs – Your Questions Answered
            </h2>

            <div className="newAccordion">
              <div
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                {questions.map((question, index) => (
                  <h6
                    key={index}
                    onClick={() => handleClick(index)}
                    className={
                      activeIndex === index ? "question active" : "question"
                    }
                  >
                    {question}
                  </h6>
                ))}
              </div>
              <div
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <p className="poppins">{answers[activeIndex]}</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};
