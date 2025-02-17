import Link from "next/link";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaHome } from "react-icons/fa"; // Import the FaHome icon

export default function ContactInfo() {
    return (
        <>
            {/* Home Link with Home Icon */}
            <Link
                href="/"
                className="flex items-center gap-3 text-white hover:text-white transition duration-300 ease-in-out transform hover:scale-105 py-2 px-4 rounded-lg"
                aria-label="Home"
            >
                <FaHome className="text-3xl text-[#dd0300]" />{" "}
                <span className="text-lg sm:text-xl">Home</span>
            </Link>

            {/* Phone Link */}
            <Link
                href="tel:+256700123456"
                className="flex items-center gap-3 text-white hover:text-white transition duration-300 ease-in-out transform hover:scale-105 py-2 px-4 rounded-lg"
                aria-label="Phone Number"
            >
                <FiPhone className="text-3xl text-[#dd0300]" />{" "}
                <span className="text-lg sm:text-xl">+256 772 901 590</span>
            </Link>

            {/* Email Link */}
            <Link
                href="mailto:nalukoola@example.com"
                className="flex items-center gap-3 text-white hover:text-white transition duration-300 ease-in-out transform hover:scale-105 py-2 px-4 rounded-lg"
                aria-label="Email"
            >
                <FiMail className="text-3xl text-[#dd0300]" />{" "}
                <span className="text-lg sm:text-xl">enkoola@gmail.com</span>
            </Link>
        </>
    );
}
