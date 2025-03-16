import React, { useState } from "react";
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
import logo from "../../assets/BlueCross_Logo.webp";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

export const Homepage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const questions = [
    "Who can apply for BlueCross UK Insurance?",
    "Can I customize my insurance plan?",
    "How do I get a quote?",
    "Does BlueCross cover pre-existing conditions?",
    "Are there any hidden fees?",
  ];

  const answers = [
    "Anyone who is a legal UK resident, including individuals, families, self-employed professionals, students, and expatriates with valid residency permits, can apply.",
    "Yes! You can personalize your plan by selecting different coverage levels, adding optional benefits (like dental, optical, or mental health coverage), and adjusting your excess to suit your budget.",
    "You can request a free quote online, call our support team, or visit one of our branches.",
    "Coverage for pre-existing conditions varies by plan. Some policies may require medical underwriting, while others offer coverage with certain conditions. Contact us to find the best option for your needs.",
    "No! BlueCross UK Insurance follows a transparent pricing policy. All charges are clearly mentioned in your policy documents, with no unexpected costs or surprise fees.",
  ];
  const handleClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
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
            <img src={img01} className="d-block w-100" height="600" alt="..." />

            <div className="carouseCaption">
              <h1>
                Choose the UK's top rated travel insurance for peace of mind on
                your journey.
              </h1>
              <p>
                Enjoy confidence and peace of mind with Blue Cross when
                traveling across the UK or internationally.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img02} className="d-block w-100" height="600" alt="..." />
            <div className="carouseCaption">
              <h1>
                Join the UK’s leading health benefits provider for trusted care.
              </h1>
              <p>
                Choose a plan that suits your healthcare, prescriptions,
                wellness, dental, vision, and more.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img03} className="d-block w-100" height="600" alt="..." />
            <div className="carouseCaption">
              <h1>
                Enjoy customised group benefits trusted by millions in the UK.
              </h1>
              <p>
                Address the unique needs of your team, from local businesses to
                large organisations.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img04} className="d-block w-100" height="600" alt="..." />
            <div className="carouseCaption">
              <h1>
                Safeguard your loved ones with reliable and comprehensive
                coverage in the UK.
              </h1>
              <p>
                Protect your financial wellbeing with the UK's most respected
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
          <h1>Welcome to BlueCross UK – Protecting Your Future</h1>
          <section className="ourServices">
            <h3 className="textCenter">Our Insurance Services</h3>
            <div>
              <div className="fourColumGrid">
                <div data-aos="zoom-in-down">
                  <h4 className="h4Text">Private Health Insurance</h4>
                  <div>
                    <video src={insurance01} autoPlay loop muted width="70" />{" "}
                  </div>
                  <p>
                    Get access to the best private healthcare facilities, quick
                    GP appointments, and specialist treatments without NHS
                    waiting times. Our plans cover:
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
                  <h4 className="h4Text">Life Insurance</h4>
                  <div>
                    <video src={insurance02} autoPlay loop muted width="70" />{" "}
                  </div>
                  <p>
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
                  <h4 className="h4Text">Motor Insurance</h4>
                  <div>
                    <video src={insurance03} autoPlay loop muted width="70" />{" "}
                  </div>
                  <p>
                    Drive with confidence and peace of mind, knowing you’re
                    fully protected with our comprehensive motor insurance
                    plans. We offer:
                  </p>
                  <ul>
                    <li>
                      {" "}
                      <img src={checkIcon} alt="" />
                      Fully comprehensive, third-party, and fire & theft options
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
                  <h4 className="h4Text">Travel Insurance</h4>
                  <div>
                    <video src={insurance04} autoPlay loop muted width="70" />{" "}
                  </div>
                  <p>
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
          <h2>Why Choose BlueCross UK?</h2>
          <div className="chooseUs">
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/128/17485/17485564.png"
                width="60"
                alt=""
              />
              <h3>Affordable & Custom Plans</h3>
              <p>
                At BlueCross UK, we make quality insurance affordable and
                flexible, ensuring coverage that fits your lifestyle and budget.
                Whether it’s health, life, motor, or travel insurance, our plans
                offer the right protection at the best price.
              </p>
            </div>
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/128/1584/1584892.png"
                width="60"
                alt=""
              />
              <h3>Fast & Hassle-Free Claims </h3>
              <p>
                At BlueCross UK, we know that filing an insurance claim can be
                stressful. That’s why we’ve made our claims process simple,
                fast, and hassle-free, ensuring you get the support you need
                without unnecessary delays.
              </p>
            </div>
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/128/4230/4230869.png"
                width="60"
                alt=""
              />
              <h3>24/7 UK-Based Customer Support</h3>
              <p>
                At BlueCross UK, we know that insurance questions and
                emergencies don’t follow a schedule. That’s why our dedicated
                UK-based customer support team is available 24/7, ensuring you
                get the help you need whenever you need it.
              </p>
            </div>
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/128/10869/10869901.png"
                width="60"
                alt=""
              />
              <h3>Trusted by Thousands</h3>
              <p>
                At BlueCross UK, we take pride in being a trusted name in the
                insurance industry, serving thousands of satisfied customers
                across the UK. Our commitment to reliability, affordability, and
                customer care has made us a preferred choice for individuals and
                families seeking comprehensive insurance solutions.
              </p>
            </div>
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/128/2058/2058324.png"
                width="60"
                alt=""
              />
              <h3>Regulated & Reliable</h3>
              <p>
                At BlueCross UK, we operate with complete transparency,
                integrity, and compliance, ensuring you receive reliable and
                legally protected insurance coverage. As a fully regulated
                insurance provider in the United Kingdom, we adhere to the
                highest industry standards, giving you peace of mind knowing
                you're in safe hands.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="reviewsContainer">
            <h2 className="mb-5">Find Out What Our Clients Say About Us</h2>
            <div className="">
              <div className="reviewCont">
                {/* <div className=" min-h-screen flex items-center justify-center">
                  <ReviewCarousel />
                </div> */}
                <div className="reviewsCont">
                  <div>
                    <h3>Excellent</h3>
                    {[...Array(4)].map((_, i) => (
                      <FaStar key={i} className="text-warning me-2 text-xl" />
                    ))}
                    <FaStarHalfAlt className="text-warning text-xl" />
                    <p className="m-0">See our reviews on</p>
                    <h6>48,600 reviews</h6>
                    <img src={logo} alt="" width="180" />
                  </div>
                  {/* <div>
                    <ReviewCarousel />
                  </div> */}
                  <div>
                    <div className="pb-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-warning me-2 text-xl" />
                      ))}
                    </div>
                    <p>
                      "Blue-cross were helpful because our account manager is
                      always available to help with any queries or questions we
                      have."
                    </p>
                    <div className="reviewer">
                      <p>Virat Kohli</p>
                      <p>12rd March 2025</p>
                    </div>
                  </div>
                  <div>
                    <div className="pb-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-warning me-2 text-xl" />
                      ))}
                    </div>
                    <p>
                      "Blue-cross were helpful because our account manager is
                      always available to help with any queries or questions we
                      have."
                    </p>
                    <div className="reviewer">
                      <p>Virat Kohli</p>
                      <p>12rd March 2025</p>
                    </div>
                  </div>
                  <div>
                    <div className="pb-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-warning me-2 text-xl" />
                      ))}
                    </div>
                    <p>
                      "Blue-cross were helpful because our account manager is
                      always available to help with any queries or questions we
                      have."
                    </p>
                    <div className="reviewer">
                      <p>Virat Kohli</p>
                      <p>12rd March 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="faq">
          <h2 className="mb-5 text-center">FAQs – Your Questions Answered</h2>

          <div class="newAccordion">
            <div>
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
            <div>
              <p>{answers[activeIndex]}</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
