import { FiPhone, FiMail, FiX, FiHome } from "react-icons/fi";
import Button from "./Button";
import Link from "next/link";

export default function MobileMenu({ toggleMenu }) {
    return (
        <div className="absolute top-0 left-0 w-full bg-[#0c0076] text-white p-6 flex flex-col items-start gap-6 sm:hidden z-40 mt-16">
            <button
                onClick={toggleMenu}
                className="absolute top-4 right-4 text-white text-2xl z-50"
            >
                <FiX />
            </button>

            <div className="flex flex-col items-start gap-6 w-full">
                {/* Home Link with Icon */}
                <Link
                    href="/"
                    className="flex items-center gap-2 text-lg sm:text-xl text-gray-300 hover:text-white transition duration-300 ease-in-out w-full"
                    aria-label="Home"
                >
                    <FiHome className="text-2xl text-[#dd0300]" />{" "}
                    <span className="text-base sm:text-lg">Home</span>
                </Link>

                {/* Phone Number Link */}
                <Link
                    href="tel:+256700123456"
                    className="flex items-center gap-2 text-lg sm:text-xl text-gray-300 hover:text-white transition duration-300 ease-in-out w-full"
                    aria-label="Phone Number"
                >
                    <FiPhone className="text-2xl text-[#dd0300]" />{" "}
                    <span className="text-base sm:text-lg">+256 700 123 456</span>
                </Link>

                {/* Email Link */}
                <Link
                    href="mailto:nalukoola@example.com"
                    className="flex items-center gap-2 text-lg sm:text-xl text-gray-300 hover:text-white transition duration-300 ease-in-out w-full"
                    aria-label="Email"
                >
                    <FiMail className="text-2xl text-[#dd0300]" />{" "}
                    <span className="text-base sm:text-lg">nalukoola@example.com</span>
                </Link>
            </div>

            <div className="mt-6 w-full">
                <Button />
            </div>
        </div>
    );
}
