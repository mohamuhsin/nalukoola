import { useEffect, useRef } from "react";

export default function Backdrop({ onClose }) {
    const backdropRef = useRef(null);

    // Handle pressing Escape to close the modal
    const handleKeyDown = (e) => {
        if (e.key === "Escape") {
            onClose();
        }
    };

    // Handle clicking outside the modal to close the backdrop
    const handleCloseBackdrop = (e) => {
        if (e.target === backdropRef.current) {
            onClose();
        }
    };

    // Use the effect to handle keydown event and cleanup
    useEffect(() => {
        backdropRef.current?.focus();

        return () => {
            // Cleanup if necessary
        };
    }, []);

    return (
        <div
            ref={backdropRef}
            className="fixed inset-0 bg-black bg-opacity-70 z-[9999] flex items-center justify-center" // Reduced opacity
            onClick={handleCloseBackdrop}
            onKeyDown={handleKeyDown}
            tabIndex={0}
        />
    );
}
