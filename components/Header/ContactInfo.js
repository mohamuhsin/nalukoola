import Link from "next/link";
import { FiPhone, FiMail, FiFlag } from "react-icons/fi";
import { FaHome } from "react-icons/fa"; // Import the FaHome icon

export default function ContactInfo() {
    return (
        <>
            {/* Home Link */}
            <Link
                href="/"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 py-2 px-3 rounded-lg"
                aria-label="Home"
            >
                <FaHome className="text-xl sm:text-2xl text-[#dd0300]" />
                <span className="text-sm sm:text-base">Home</span>
            </Link>

            {/* Campaigns Link */}
            <Link
                href="/campaigns"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 py-2 px-3 rounded-lg"
                aria-label="Campaigns"
            >
                <FiFlag className="text-xl sm:text-2xl text-[#dd0300]" />
                <span className="text-sm sm:text-base">Campaigns</span>
            </Link>

            {/* Phone Link */}
            <Link
                href="tel:+256772901590"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 py-2 px-3 rounded-lg"
                aria-label="Phone Number"
            >
                <FiPhone className="text-xl sm:text-2xl text-[#dd0300]" />
                <span className="text-sm sm:text-base">+256 772 901 590</span>
            </Link>

            {/* Email Link */}
            <Link
                href="mailto:enkoola@gmail.com"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 py-2 px-3 rounded-lg"
                aria-label="Email"
            >
                <FiMail className="text-xl sm:text-2xl text-[#dd0300]" />
                <span className="text-sm sm:text-base">enkoola@gmail.com</span>
            </Link>
        </>
    );
}
