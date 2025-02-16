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
        <header className="bg-[#0c0076] text-white p-3 md:p-4 flex items-center justify-between w-full shadow-xl z-50 border-b-4 border-[#dd0300]">
            <Logo />
            <div className="hidden sm:flex items-center gap-8 text-sm sm:text-lg">
                <ContactInfo />
                <Button />
            </div>
            <div className="sm:hidden flex items-center gap-4">
                <button
                    onClick={toggleMenu}
                    className="text-white hover:text-[#dd0300] transition duration-300 ease-in-out p-2 rounded-full"
                    aria-label="Toggle menu"
                >
                    <FiMenu className="text-4xl" />
                </button>
            </div>
            {menuOpen && <MobileMenu toggleMenu={toggleMenu} />}
        </header>
    );
}
