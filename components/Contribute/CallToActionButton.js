import { FaHandHoldingHeart } from "react-icons/fa";

const CallToActionButton = () => (
    <div className="mt-8 flex justify-center md:justify-start">
        <button className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-lg font-bold text-lg md:text-xl flex items-center justify-center space-x-3 transition transform hover:scale-105 shadow-md">
            <FaHandHoldingHeart className="text-2xl" />
            <span>Contribute Now</span>
        </button>
    </div>
);

export default CallToActionButton;
