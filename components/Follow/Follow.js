import Link from "next/link";
import { FaFacebookF, FaTiktok, FaXTwitter } from "react-icons/fa6";

export default function Follow() {
    const currentYear = new Date().getFullYear();

    return (
        <section className="bg-gray-900 py-8 sm:py-4 text-white">
            <div className="max-w-screen-lg mx-auto px-6 text-center mt-12">
                {" "}
                {/* Changed mt-16 to mt-12 for reduced top margin */}
                <h2 className="text-3xl sm:text-4xl font-extrabold">
                    Follow Me on Social Media
                </h2>
                <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                    Stay informed with the latest updates, key developments, and progress
                    on our journey. Together, we can make a difference!&quot;
                </p>
                {/* Social Media Icons */}
                <div className="mt-10 flex justify-center gap-6 sm:gap-8">
                    <SocialIcon
                        href="https://x.com/EliasNalukoola"
                        icon={<FaXTwitter />}
                        label="Follow on X"
                    />
                    <SocialIcon
                        href="https://www.facebook.com/nalukoola/"
                        icon={<FaFacebookF />}
                        label="Follow on Facebook"
                    />
                    <SocialIcon
                        href="https://www.tiktok.com/@nalukoola100"
                        icon={<FaTiktok />}
                        label="Follow on TikTok"
                    />
                </div>
            </div>

            {/* Copyright Section */}
            <footer className="mt-6 text-center border-t border-gray-700 pt-2 px-6 sm:px-8">
                <p className="text-gray-400 text-base sm:text-lg">
                    © {currentYear} Nalukoola Elias. All rights reserved. | Site managed
                    by{" "}
                    <Link
                        href="https://iventics.com"
                        className="font-semibold text-white-500 hover:underline"
                    >
                        Iventics Technologies
                    </Link>
                </p>
            </footer>
        </section>
    );
}

function SocialIcon({ href, icon, label }) {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-5xl transition-transform transform hover:scale-110 hover:text-blue-500 drop-shadow-md hover:drop-shadow-lg"
            aria-label={label}
        >
            {icon}
        </Link>
    );
}
