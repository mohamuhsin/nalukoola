import Link from "next/link";

export default function Button() {
    return (
        <Link href="/contribute">
            <button className="bg-[#dd0300] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-base font-semibold shadow-lg hover:bg-[#b20202] transform hover:scale-105 transition-all duration-300 ease-in-out">
                Contribute Now
            </button>
        </Link>
    );
}
