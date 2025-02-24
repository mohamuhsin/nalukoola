"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FormInput from "./FormInput";

export default function MobileMoneyForm({ onCancel }) {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [amount, setAmount] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const isFormValid = name && phoneNumber && amount;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isFormValid) {
            alert("Please fill in all fields.");
            return;
        }

        // Validate phone number (Uganda format check)
        const phonePattern = /^07\d{8}$/;
        if (!phonePattern.test(phoneNumber)) {
            setError("Please enter a valid phone number.");
            return;
        }

        // Validate amount to be a positive number
        if (isNaN(amount) || amount <= 500) {
            setError("Amount must be 500 shillings and above.");
            return;
        }

        setIsSubmitting(true);
        setError(null);

        // Generate a unique transaction id using uuid
        const externalId = uuidv4();

        try {
            const response = await fetch("/api/request-payment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    amount: parseFloat(amount),
                    currency: "ugx", // Ensure currency is correct
                    externalId,
                    payerPhone: phoneNumber,
                    payerMessage: "Payment via Mobile Money",
                    payeeNote: "Payment received",
                }),
                cache: "no-store",
            });

            // Check if response is not ok
            if (!response.ok) {
                let errorMessage = "Payment request failed.";

                try {
                    // Attempt to parse error response as JSON
                    const errorData = await response.json();
                    console.error("Backend Error:", errorData); // Log backend error to console
                    errorMessage = errorData.message || errorMessage;
                } catch (e) {
                    // If parsing fails, log and use default error message
                    console.error("Error parsing response JSON:", e);
                }

                throw new Error(errorMessage);
            }

            const result = await response.json();
            alert("Payment request sent. Check your phone to enter pin.");
            onCancel(); // Close the modal after success
        } catch (err) {
            console.error("Error:", err);
            setError(
                err.message || "Failed to process the payment. Try again later."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            {error && <p className="text-red-600">{error}</p>}

            <FormInput
                label="Your Name"
                value={name}
                onChange={setName}
                placeholder="Name"
            />
            <FormInput
                label="Your Mobile Money Number"
                value={phoneNumber}
                onChange={setPhoneNumber}
                type="tel"
                placeholder="07..."
            />
            <FormInput
                label="Amount"
                value={amount}
                onChange={setAmount}
                type="number"
                placeholder="Amount"
            />

            <div className="flex justify-between mt-4">
                <button
                    type="button"
                    className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg font-bold hover:bg-gray-400 transition duration-300"
                    onClick={onCancel}
                >
                    CANCEL
                </button>
                <button
                    type="submit"
                    className={`bg-[#dd0300] text-white px-6 py-2 rounded-lg font-bold transition duration-300 ${!isFormValid || isSubmitting
                        ? "cursor-not-allowed opacity-50"
                        : "hover:bg-[#e6b800]"
                        }`}
                    disabled={!isFormValid || isSubmitting}
                >
                    {isSubmitting ? "Processing..." : "PAY NOW"}
                </button>
            </div>
        </form>
    );
}
