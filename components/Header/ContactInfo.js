import { FiPhone, FiMail } from "react-icons/fi";

export default function ContactInfo() {
    return (
        <>
            <a
                href="tel:+256700123456"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
                aria-label="Phone Number"
            >
                <FiPhone className="text-2xl text-[#dd0300]" />{" "}
                <span className="text-base sm:text-lg">+256 700 123 456</span>
            </a>
            <a
                href="mailto:nalukoola@example.com"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
                aria-label="Email"
            >
                <FiMail className="text-2xl text-[#dd0300]" />{" "}
                <span className="text-base sm:text-lg">nalukoola@example.com</span>
            </a>
        </>
    );
}
