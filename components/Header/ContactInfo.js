import Link from "next/link";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaHome } from "react-icons/fa"; // Import the FaHome icon

export default function ContactInfo() {
    return (
        <>
            {/* Home Link with Home Icon */}
            <Link
                href="/"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
                aria-label="Home"
            >
                <FaHome className="text-2xl text-[#dd0300]" />{" "}
                <span className="text-base sm:text-lg">Home</span>
            </Link>

            {/* Phone Link */}
            <Link
                href="tel:+256700123456"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
                aria-label="Phone Number"
            >
                <FiPhone className="text-2xl text-[#dd0300]" />{" "}
                <span className="text-base sm:text-lg">+256 700 123 456</span>
            </Link>

            {/* Email Link */}
            <Link
                href="mailto:nalukoola@example.com"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
                aria-label="Email"
            >
                <FiMail className="text-2xl text-[#dd0300]" />{" "}
                <span className="text-base sm:text-lg">nalukoola@example.com</span>
            </Link>
        </>
    );
}
