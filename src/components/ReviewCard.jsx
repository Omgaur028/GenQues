import { FaStar } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import PropTypes from "prop-types";

const ReviewCard = ({ rating, review, reviewer, date }) => {
  return (
    <div className="bg-[#F9F9F9] p-6 rounded-lg shadow-md space-y-4 w-[350px] h-[350px] flex flex-col justify-between">
      <div className="flex items-center gap-2">
        <FaStar className="text-black" />
        <span className="font-bold text-lg">{rating}</span>
      </div>

      <p className="text-gray-700 text-sm flex-grow">{review}</p>

      <div className="flex justify-between items-center text-sm text-black font-bold">
        <div>
          <p>{reviewer}</p>
          <p className="text-gray-500">{date}</p>
        </div>

        <div className="flex items-center gap-2">
          <button className="bg-black text-white px-4 py-1 rounded-lg">
            Share
          </button>
          <BsThreeDots className="text-gray-600 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  rating: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
  reviewer: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default ReviewCard;
