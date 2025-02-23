import axios from "axios";

export async function POST(req) {
    try {
        // Get the data from the request body
        const data = await req.json();
        console.log("Received data:", data);

        // Validate incoming data
        const { amount, currency, externalId, payerPhone } = data;
        if (!amount || !currency || !externalId || !payerPhone) {
            return new Response(
                JSON.stringify({ message: "Missing required fields" }),
                { status: 400 }
            );
        }

        // Prepare the data to send to MoMo API
        const paymentData = {
            amount: amount,
            currency: currency,
            externalId: externalId,
            payer: {
                partyIdType: "MSISDN",
                partyId: payerPhone,
            },
            payerMessage: "MoMo Market Payment",
            payeeNote: "MoMo Market Payment",
        };

        // MoMo API configuration
        const config = {
            method: "post",
            maxBodyLength: Infinity,
            url: "https://sandbox.momodeveloper.mtn.com/collection/v1_0/requesttopay",
            headers: {
                "X-Reference-Id": "bca58ea5-0ec0-4eae-af42-64cf3156fc50", // Replace with your reference ID
                "X-Target-Environment": "sandbox", // Use 'production' for production environment
                "Ocp-Apim-Subscription-Key": process.env.MTN_SUBSCRIPTION_KEY, // Subscription key from your .env
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.MTN_API_TOKEN}`, // Bearer token from your .env
            },
            data: JSON.stringify(paymentData),
        };

        // Send the payment request to MoMo API
        const response = await axios.request(config);

        // Log the response for debugging
        console.log("MoMo API Response:", response.data);

        // Return the MoMo API response to the client
        return new Response(JSON.stringify(response.data), { status: 200 });
    } catch (error) {
        console.error(
            "Error processing payment request:",
            error.response ? error.response.data : error.message
        );
        return new Response(
            JSON.stringify({
                message: "Internal Server Error",
                error: error.message,
            }),
            { status: 500 }
        );
    }
}
