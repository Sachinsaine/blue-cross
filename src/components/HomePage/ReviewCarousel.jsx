import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "../../assets/BlueCross_Logo.webp";
import axios from "axios";

const ReviewsSection = () => {
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
  const [review, setReview] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:2000/reviews")
      .then((res) => {
        setReview(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section>
      <div className="reviewsContainer">
        <h2 className="mb-3 poppins-bold">
          Find Out What Our Clients Say About Us
        </h2>
        <div className="reviewCont">
          {/* Fixed "Excellent" Box */}
          <div className="fixed-box">
            <h3 className="poppins-semibold">Excellent</h3>
            {[...Array(4)].map((_, i) => (
              <FaStar key={i} className="text-warning me-2 fs-3" />
            ))}
            <FaStarHalfAlt className="text-warning fs-3" />

            <p className="my-2 poppins">
              Based on <u>4,072 reviews</u>{" "}
            </p>
            <img
              src={logo}
              alt="Review Platform"
              className="logoImg"
              width="165"
            />
          </div>

          <div className="carousel-container">
            <Slider {...settings}>
              {review.map((review, index) => (
                <div key={index} className="review-box">
                  <div className="pb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-warning me-2 text-xl" />
                    ))}
                  </div>
                  <div>
                    <div className="poppins">
                      <p key={index}>{review.review}</p>
                      <div className="reviewer">
                        <p>{review.username}</p>
                        <p>{review.date}</p>
                      </div>
                    </div>
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
