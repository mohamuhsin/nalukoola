// import nodemailer from "nodemailer";

// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
// });

// export const sendTransactionEmail = async (to, transaction) => {
//     await transporter.sendMail({
//         from: process.env.EMAIL_USER,
//         to,
//         subject: "Payment Received",
//         text: `You have received ${transaction.amount} from ${transaction.name}, phone number:${transaction.phone}.`,
//     });
// };
