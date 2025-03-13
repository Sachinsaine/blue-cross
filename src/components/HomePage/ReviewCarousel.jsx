import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star } from "lucide-react";

const reviews = [
  {
    rating: 5,
    title: "My experience at...",
    text: "My experience at Excellence Motors was positive because I am satisfied.",
    author: "John Smith",
    date: "12/03/2025",
    source: "JudgeService",
  },
  {
    rating: 5,
    title: "Excellence Motors were...",
    text: "Top-tier! Motors were really helpful and I recommend them because good value.",
    author: "Jane Doe",
    date: "10/03/2025",
    source: "Google",
  },
  {
    rating: 4.5,
    title: "I'd definitely recommend",
    text: "I'd definitely recommend Excellence Motors to friends and family because it's...",
    author: "Michael Brown",
    date: "09/03/2025",
    source: "JudgeService",
  },
];

const ReviewCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="max-w-5xl mx-auto py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Customer Reviews</h2>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="p-4 bg-white">
            <div className="bg-white shadow-lg rounded-xl p-6 text-center">
              <div className="flex justify-center mb-2 bg-white">
                {[...Array(Math.floor(review.rating))].map((_, i) => (
                  <Star key={i} className="text-yellow-500" fill="yellow" />
                ))}
                {review.rating % 1 !== 0 && (
                  <Star
                    className="text-yellow-500"
                    fill="yellow"
                    opacity="50%"
                  />
                )}
              </div>
              <h3 className="text-lg font-semibold">{review.title}</h3>
              <p className="text-gray-600 mt-2">{review.text}</p>
              <p className="text-sm text-gray-400 mt-2">
                - {review.author}, {review.date}
              </p>
              <p className="text-xs text-blue-500 mt-1">
                Source: {review.source}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewCarousel;
