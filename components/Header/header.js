"use client"; // Ensure it's a client-side component
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Logo from "./Logo";
import ContactInfo from "./ContactInfo";
import MobileMenu from "./MobileMenu";
import Button from "./Button";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className="bg-[#0c0076] text-white p-1 md:p-2 flex items-center justify-between w-full shadow-xl z-50 border-b-4 border-[#dd0300]">
            {/* Logo (50% of the header on mobile) */}
            <div className="flex items-center w-1/2 sm:w-auto justify-center sm:justify-start">
                <Logo />
            </div>

            {/* Mobile Menu Toggle (50% of the header on mobile) */}
            <div className="sm:hidden flex items-center w-1/2 justify-center sm:justify-end">
                <button
                    onClick={toggleMenu}
                    className="text-white hover:text-[#dd0300] transition duration-300 ease-in-out p-2 rounded-full"
                    aria-label="Toggle menu"
                >
                    <FiMenu className="text-4xl" /> {/* Increased icon size */}
                </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden sm:flex items-center gap-4 text-xs sm:text-sm">
                <ContactInfo />
                <Button />
            </div>

            {/* Mobile Menu */}
            {menuOpen && <MobileMenu toggleMenu={toggleMenu} />}
        </header>
    );
}
