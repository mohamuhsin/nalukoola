import Link from "next/link";

export default function Button() {
    return (
        <Link href="/support-counsel-nalukoola-candidature">
            <button className="bg-[#dd0300] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-lg sm:text-xl font-semibold shadow-lg hover:bg-[#b20202] transform hover:scale-105 transition-all duration-300 ease-in-out mr-4">
                Contribute Now
            </button>
        </Link>
    );
}
