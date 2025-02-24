// app/api/test-db/route.js
import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb";
import Payment from "@/lib/models"; // Make sure you're using Payment model here

export async function POST(req) {
    try {
        // Connect to DB
        await connectToDB();

        // Get the request body
        const { name, phone, amount } = await req.json();

        // Validate inputs
        if (!name || !phone || !amount) {
            return NextResponse.json({ error: "Missing fields" }, { status: 400 });
        }

        // Save the transaction to the database using the Payment model
        const newPayment = new Payment({
            transactionId: `txn-${Date.now()}`, // Generate a unique transaction ID
            amount,
            currency: "UGX", // You can adjust this depending on your logic
            payer: {
                partyId: phone,
                partyIdType: "MSISDN", // You can keep this or change depending on your model
            },
            payerMessage: "Payment from customer",
            payeeNote: "Service Payment",
            status: "Pending", // Set initial status
        });

        // Save the payment data
        await newPayment.save();

        // Return a success response
        return NextResponse.json({ message: "Transaction saved successfully!" });
    } catch (error) {
        console.error("Error saving transaction:", error);
        return NextResponse.json({ error: "Database error" }, { status: 500 });
    }
}
