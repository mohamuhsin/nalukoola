import Link from "next/link";

export default function Logo() {
    return (
        <div className="flex items-center gap-2 sm:gap-4 flex-1">
            <div className="text-3xl sm:text-4xl font-bold uppercase tracking-wide text-center sm:text-left transition duration-300 ease-in-out transform hover:scale-105">
                <Link
                    href="/"
                    className="text-white hover:text-[#dd0300] transition duration-300 ease-in-out"
                    aria-label="Home"
                >
                    <span className="font-extrabold">Nalukoola</span>
                </Link>
            </div>
        </div>
    );
}
