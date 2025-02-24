// import axios from "axios";

// // Environment variables for API credentials
// const MTN_API_BASE_URL = process.env.MTN_API_BASE_URL;
// const MTN_SUBSCRIPTION_KEY = process.env.MTN_SUBSCRIPTION_KEY;
// const MTN_API_TOKEN = process.env.MTN_API_TOKEN;

// export async function POST(req) {
//     const {
//         name,
//         amount,
//         currency,
//         externalId,
//         payerPhone,
//         payerMessage,
//         payeeNote,
//     } = await req.json();

//     // Basic validation for the request body
//     if (
//         !name ||
//         !amount ||
//         !currency ||
//         !externalId ||
//         !payerPhone ||
//         !payerMessage ||
//         !payeeNote
//     ) {
//         return new Response(
//             JSON.stringify({ message: "All fields are required" }),
//             { status: 400 }
//         );
//     }

//     // Prepare data for MTN API
//     const requestData = {
//         amount: amount.toString(),
//         currency,
//         externalId,
//         payer: {
//             partyIdType: "MSISDN",
//             partyId: payerPhone,
//         },
//         payerMessage,
//         payeeNote,
//     };

//     try {
//         // Make the API call to MTN sandbox
//         const response = await axios.post(
//             `${MTN_API_BASE_URL}requesttopay`,
//             requestData,
//             {
//                 headers: {
//                     "X-Reference-Id": externalId,
//                     "X-Target-Environment": "sandbox",
//                     "Ocp-Apim-Subscription-Key": MTN_SUBSCRIPTION_KEY,
//                     Authorization: `Bearer ${MTN_API_TOKEN}`,
//                     "Content-Type": "application/json",
//                 },
//             }
//         );

//         // Check if the API call was successful
//         if (response.status === 202) {
//             return new Response(JSON.stringify({ message: "Payment request sent" }), {
//                 status: 200,
//             });
//         }

//         // If the status code is not 202, log the response data
//         console.error("MTN API Response:", response.data);

//         return new Response(
//             JSON.stringify({
//                 message: "Payment request failed",
//                 details: response.data,
//             }),
//             { status: 500 }
//         );
//     } catch (error) {
//         console.error("MTN API Error:", error.response?.data || error.message);
//         return new Response(
//             JSON.stringify({
//                 message: "Failed to send payment request",
//                 error: error.response?.data || error.message,
//             }),
//             { status: 500 }
//         );
//     }
// }
