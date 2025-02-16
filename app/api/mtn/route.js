import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        // Parse the incoming request body
        const { name, phone, amount } = await req.json();

        console.log({ name, phone, amount });

        // Validate that name, phone, and amount are provided
        if (!name || !phone || !amount) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Validate the phone number format
        const phonePattern = /^[0-9]{10}$/;
        if (!phone.match(phonePattern)) {
            return NextResponse.json(
                { error: "Invalid phone number format" },
                { status: 400 }
            );
        }

        // Prepare payment request data as expected by the API
        const paymentData = {
            amount: amount, // Amount in the requested currency
            currency: "UGX", // Currency set to UGX for Uganda
            externalId: `payment-${Date.now()}`, // External transaction ID
            payer: {
                partyIdType: "MSISDN", // Type is MSISDN for phone number
                partyId: phone, // The phone number of the payer
            },
            payerMessage: `Payment from ${name}`, // Payer message
            payeeNote: "Payment for services", // Payee note
            // Explicit payer and payee details
            payerDetails: {
                name: name,
                phone: phone,
            },
            payeeDetails: {
                note: "Payment for services",
            },
        };

        console.log("Payment data:", paymentData); // Log payment data

        // Get credentials from environment variables
        const baseUrl = process.env.NEXT_PUBLIC_MTN_API_BASE_URL;
        const subscriptionKey = process.env.MTN_SUBSCRIPTION_KEY;
        const apiToken = process.env.MTN_API_TOKEN;

        // Ensure these environment variables are being properly used
        if (!baseUrl || !subscriptionKey || !apiToken) {
            return NextResponse.json(
                { error: "Missing API credentials" },
                { status: 500 }
            );
        }

        // Send the request to MTN MoMo API
        const response = await axios.post(
            `${baseUrl}`, // Endpoint for initiating payment
            paymentData, // Payment data as the body of the request
            {
                headers: {
                    "Ocp-Apim-Subscription-Key": subscriptionKey, // Subscription key
                    Authorization: `Bearer ${apiToken}`, // Authorization token (Bearer)
                    "X-Target-Environment": "sandbox", // Environment target (can be sandbox or production)
                    "Content-Type": "application/json", // Content type
                },
            }
        );

        // Log the response to see the returned data
        console.log("MTN MoMo Response:", response.data);

        // If the response status is OK (200), return the response data
        if (response.status === 200 && response.data) {
            return NextResponse.json(response.data, { status: 200 });
        }

        // Handle unsuccessful requests
        return NextResponse.json(
            { error: "Failed to initiate payment request" },
            { status: 500 }
        );
    } catch (error) {
        console.error(
            "Error making payment request:",
            error.response?.data || error.message
        );

        // Handle any errors that occurred during the API call
        return NextResponse.json(
            {
                error: "Payment request failed",
                details: error.response?.data || error.message,
            },
            { status: error.response?.status || 500 }
        );
    }
}
