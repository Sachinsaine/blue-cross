import React from "react";
import Slider from "react-slick";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "../../assets/BlueCross_Logo.webp";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Virat Kohli",
      date: "12th March 2025",
      text: "BlueCross was helpful because our account manager is always available to help with any queries or questions we have.",
    },
    {
      name: "Rohit Sharma",
      date: "10th March 2025",
      text: "Exceptional service! The claims process was smooth and efficient. Highly recommend BlueCross.",
    },
    {
      name: "Ben Stokes",
      date: "8th March 2025",
      text: "Great experience! Their team guided me through the process seamlessly. Thank you, BlueCross!",
    },
    {
      name: "MS Dhoni",
      date: "5th March 2025",
      text: "BlueCross was helpful because our account manager is always available to help with any queries or questions we have.",
    },
    {
      name: "Joe Root",
      date: "3rd March 2025",
      text: "BlueCross provides excellent coverage and quick claim settlements. Highly recommended.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Display 3 reviews at a time
    slidesToScroll: 3, // Scroll 3 at a time
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // Mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section>
      <div className="reviewsContainer">
        <h2 className="mb-5">Find Out What Our Clients Say About Us</h2>
        <div className="reviewCont">
          {/* Fixed "Excellent" Box */}
          <div className="fixed-box">
            <h3>Excellent</h3>
            {[...Array(4)].map((_, i) => (
              <FaStar key={i} className="text-warning me-2 text-xl" />
            ))}
            <FaStarHalfAlt className="text-warning text-xl" />
            <p className="m-0">See our reviews on</p>
            <h6>48,600 reviews</h6>
            <img
              src={logo}
              alt="Review Platform"
              className="logoImg"
              width="180"
            />
          </div>

          {/* Carousel for Reviews */}
          <div className="carousel-container">
            <Slider {...settings}>
              {reviews.map((review, index) => (
                <div key={index} className="review-box">
                  <div className="pb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-warning me-2 text-xl" />
                    ))}
                  </div>
                  <p>"{review.text}"</p>
                  <div className="reviewer">
                    <p>{review.name}</p>
                    <p>{review.date}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
