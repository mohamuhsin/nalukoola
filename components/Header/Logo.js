import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <div className="ml-4">
            {/* Moves the logo slightly to the right */}
            <Link
                href="/"
                className="flex items-center hover:scale-105 transform transition-all duration-300 ease-in-out"
            >
                <Image
                    src="/nalukoola.png" // Ensure this is the correct path
                    alt="Nalukoola Logo"
                    width={100} // Adjust this as needed
                    height={60} // Adjust this as needed
                    className="object-contain h-auto w-auto" // Ensures it scales correctly
                    priority
                />
            </Link>
        </div>
    );
}
