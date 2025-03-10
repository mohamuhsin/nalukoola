"use client";
import Image from "next/image";
import { useState } from "react";

export default function CampaignsGallery() {
    const images = [
        "/campaigns.jpeg",
        "/campaigns1.jpeg",
        "/campaigns2.jpeg",
        "/campaigns3.jpeg",
        "/campaigns4.jpeg",
        "/campaigns5.jpeg",
        "/campaigns6.jpeg",
        "/campaigns7.jpeg",
        "/campaigns8.jpeg",
        "/campaigns9.jpeg",
        "/campaigns10.jpeg",
        "/campaigns11.jpeg",
        "/campaigns12.jpeg",
        "/campaigns13.jpeg",
        "/campaigns14.jpeg",
        "/campaigns15.jpeg",
        "/campaigns16.jpeg",
        "/campaigns17.jpeg",
        "/campaigns18.jpeg",
        "/campaigns19.jpeg",
        "/campaigns20.jpeg",
        "/campaigns21.jpeg",
        "/campaigns22.jpeg",
        "/campaigns24.jpeg",
        "/campaigns25.jpeg",
        "/campaigns26.jpeg",
        "/campaigns27.jpeg",
        "/campaigns28.jpeg",
        "/campaigns29.jpeg",
        "/campaigns30.jpeg",
        "/campaigns31.jpeg",
        "/campaigns32.jpeg",
        "/campaigns33.jpeg",
        "/campaigns34.jpeg",
        "/campaigns35.jpeg",
        "/campaigns36.jpeg",
        "/campaigns37.jpeg",
        "/campaigns38.jpeg",
        "/campaigns39.jpeg",
        "/campaigns40.jpeg",
        "/campaigns41.jpeg",
        "/campaigns42.jpeg",
        "/campaigns43.jpeg",
        "/campaigns44.jpeg",
        "/campaigns45.jpeg",
        "/campaigns46.jpeg",
        "/campaigns47.jpeg",
        "/campaigns48.jpeg",
        "/campaigns49.jpeg",
        "/campaigns50.jpeg",
        "/campaigns51.jpeg",
        "/campaigns52.jpeg",
        "/campaigns53.jpeg",
        "/campaigns54.jpeg",
        "/campaigns56.jpeg",
        "/campaigns57.jpeg",
        "/campaigns58.jpeg",
        "/campaigns59.jpeg",
        "/campaigns60.jpeg",
        "/campaigns61.jpeg",
        "/campaigns62.jpeg",
        "/campaigns63.jpeg",
        "/campaigns64.jpeg",
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (index) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const closeLightbox = () => setIsOpen(false);

    const prevImage = () =>
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    const nextImage = () =>
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <header className="bg-[#111828] text-white text-center py-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
                    Our Campaigns
                </h1>
            </header>

            {/* Gallery Section */}
            <section className="py-12 px-2 md:px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden hover:scale-105 transition-transform duration-500 cursor-pointer"
                            style={{ aspectRatio: "5 / 4" }}
                            onClick={() => openLightbox(index)}
                        >
                            <Image
                                src={image}
                                alt={`Campaign ${index + 1}`}
                                className="object-cover"
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                priority={index === 0} // Prioritize the first image for faster load
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* Lightbox */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                    role="dialog"
                    aria-labelledby="lightbox"
                    aria-hidden={!isOpen}
                >
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 text-white text-3xl"
                        aria-label="Close lightbox"
                    >
                        &times;
                    </button>
                    <button
                        onClick={prevImage}
                        className="absolute left-4 text-white text-4xl"
                        aria-label="Previous image"
                    >
                        &#8249;
                    </button>
                    <div className="relative w-full max-w-4xl h-[80vh] px-4">
                        <Image
                            src={images[currentIndex]}
                            alt={`Campaign ${currentIndex + 1}`}
                            className="object-contain"
                            fill
                        />
                    </div>
                    <button
                        onClick={nextImage}
                        className="absolute right-4 text-white text-4xl"
                        aria-label="Next image"
                    >
                        &#8250;
                    </button>
                </div>
            )}
        </div>
    );
}
