// models/payment.js
import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    transactionId: { type: String, required: true, unique: true },
    amount: { type: Number, required: true },
    currency: { type: String, required: true },
    payer: {
        partyId: { type: String, required: true },
        partyIdType: { type: String, required: true },
    },
    payerMessage: { type: String, required: true },
    payeeNote: { type: String, required: true },
    status: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
});

const Transaction =
    mongoose.models.Transaction || mongoose.model("Transaction", paymentSchema);

export default Transaction;
