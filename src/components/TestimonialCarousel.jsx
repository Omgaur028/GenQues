import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { feedbacks } from "../constants/constant";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import PropTypes from "prop-types";
import ReviewCard from "./ReviewCard";

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute -left-10 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md hover:bg-gray-200"
    onClick={onClick}
  >
    <MdKeyboardArrowLeft className="text-4xl text-gray-700" />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    className="absolute -right-10 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md hover:bg-gray-200"
    onClick={onClick}
  >
    <MdKeyboardArrowRight className="text-4xl text-gray-700" />
  </button>
);

export default function TestimonialCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="h-20 w-full mt-20 bg-gradient-to-r from-purple-700 to-blue-400 flex items-center justify-center">
        <span className="font-bold text-4xl text-white text-center">
          Testimonials
        </span>
      </div>

      <div className="w-full max-w-6xl mx-auto py-10 relative  px-4">
        <Slider {...settings} className="">
          {feedbacks &&
            feedbacks.map((feedback, index) => (
              <ReviewCard
                key={index}
                rating={feedback.rating}
                review={feedback.comment}
                reviewer={feedback.name}
                date={feedback.date}
              />
            ))}
        </Slider>
      </div>
    </>
  );
}

NextArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};
PrevArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};
