"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const images = ["/hero.jpg", "/hero2.jpg", "/hero3.jpg", "/hero4.jpg"]; // Add your image URLs here

export default function Hero() {
    const [index, setIndex] = useState(0);
    const [imageLoaded, setImageLoaded] = useState(false); // Track image load state

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
            setImageLoaded(false); // Reset load state on image change
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    // Preload image function
    const handleImageLoad = () => {
        setImageLoaded(true); // Image has loaded
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative text-white py-20 sm:py-24 min-h-[90vh] flex items-center justify-center"
        >
            {/* Sliding Image Carousel */}
            <motion.div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
                {images.map((image, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            opacity: 0,
                            x: i === index ? "0%" : i < index ? "-100%" : "100%",
                        }}
                        animate={{
                            opacity: i === index ? 1 : 0,
                            x: i === index ? "0%" : i < index ? "-100%" : "100%",
                        }}
                        transition={{
                            duration: 1.5,
                            ease: "easeInOut",
                        }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={image}
                            alt="hero image"
                            onLoad={handleImageLoad}
                            className="object-cover w-full h-full"
                            fill
                            priority
                        />
                    </motion.div>
                ))}
            </motion.div>

            {/* Overlay for Better Readability */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Content */}
            <div className="relative text-center sm:text-left px-6 md:px-12">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight sm:leading-snug max-w-4xl mx-auto sm:mx-0"
                >
                    Nalukoola For Kawempe North
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="mt-6 text-lg sm:text-2xl text-gray-200 max-w-3xl mx-auto sm:mx-0"
                >
                    A Protest Vote Starts Here – Kawempe North Leads the Way! The
                    revolution continues. Let’s unite and reclaim our seat! Support the
                    fight for democracy. Join the campaign today.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.9 }}
                    className="mt-10 flex flex-col sm:flex-row gap-6 justify-center sm:justify-start"
                >
                    <Link href="/contribute">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 text-lg sm:text-xl font-semibold rounded-lg bg-white text-gray-800 hover:bg-gray-200 transition duration-300 w-full sm:w-auto"
                        >
                            Contribute Now
                        </motion.button>
                    </Link>
                    <Link href="#about">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 text-lg sm:text-xl font-semibold rounded-lg border-2 border-white text-white hover:bg-white hover:text-gray-800 transition duration-300 w-full sm:w-auto"
                        >
                            Learn More
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </motion.section>
    );
}
