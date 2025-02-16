// app/mtn/callback/page.js
export default async function CallbackPage({ searchParams }) {
    // The searchParams object contains the query parameters sent by the MoMo API
    const { transactionId, status, errorMessage } = searchParams;

    // You can process the parameters here, e.g., update your database or send an email
    // For example, if status is 'SUCCESS', you can mark the payment as successful in the database
    // Handle the success or failure scenario accordingly

    return (
        <div>
            <h1>Callback Response</h1>
            <p>Transaction ID: {transactionId}</p>
            <p>Status: {status}</p>
            {status === "FAILED" && <p>Error: {errorMessage}</p>}
            {/* Display other relevant info from the callback here */}
        </div>
    );
}
