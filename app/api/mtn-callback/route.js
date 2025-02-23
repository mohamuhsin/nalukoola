// import { NextResponse } from "next/server";
// import { MongoClient } from "mongodb";

// export async function POST(req) {
//     try {
//         // Parse the incoming request body from MTN MoMo
//         const paymentStatus = await req.json();

//         // Extract relevant info (you may need to adjust depending on MTN's response format)
//         const { status, externalId, amount, payerMessage, payerNote, phone } =
//             paymentStatus;

//         // Connect to MongoDB (ensure MongoDB connection is set up)
//         const client = await MongoClient.connect(process.env.MONGODB_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         const db = client.db();
//         const transactions = db.collection("transactions");

//         // Find the corresponding transaction from the database
//         const transaction = await transactions.findOne({ externalId });

//         if (!transaction) {
//             return NextResponse.json(
//                 { error: "Transaction not found" },
//                 { status: 404 }
//             );
//         }

//         // Update transaction status in database
//         await transactions.updateOne(
//             { externalId },
//             {
//                 $set: {
//                     status,
//                     payerMessage,
//                     payerNote,
//                     amount,
//                     phone,
//                     updatedAt: new Date(),
//                 },
//             }
//         );

//         // Close MongoDB connection
//         client.close();

//         return NextResponse.json({
//             message: "Transaction status updated successfully!",
//         });
//     } catch (error) {
//         console.error("Error handling callback:", error);
//         return NextResponse.json(
//             { error: "Callback handling failed" },
//             { status: 500 }
//         );
//     }
// }
