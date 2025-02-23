// app/api/test-db/route.js
import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb";
import { Transaction } from "@/lib/models";

export async function POST(req) {
    try {
        await connectToDB();

        const { name, phone, amount } = await req.json();

        // Validate inputs
        if (!name || !phone || !amount) {
            return NextResponse.json({ error: "Missing fields" }, { status: 400 });
        }

        // Save transaction
        const newTransaction = new Transaction({
            name,
            phone,
            amount,
        });
        await newTransaction.save();

        return NextResponse.json({ message: "Transaction saved successfully!" });
    } catch (error) {
        console.error("Error saving transaction:", error);
        return NextResponse.json({ error: "Database error" }, { status: 500 });
    }
}
