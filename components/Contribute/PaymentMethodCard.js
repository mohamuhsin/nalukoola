import Image from "next/image";

const PaymentMethodCard = ({
    method,
    paymentNumber,
    onCopy,
    backgroundColor,
    textColor,
    hoverColor,
    imageSrc,
}) => (
    <div
        className={`${backgroundColor} p-6 rounded-xl shadow-lg flex flex-col justify-center items-center space-y-4 hover:scale-105 transition duration-300 hover:shadow-2xl`}
    >
        <Image
            src={imageSrc}
            alt={method}
            width={180}
            height={50}
            className="object-contain"
            priority
        />
        <button
            onClick={() => onCopy(paymentNumber, method)}
            className={`bg-white ${textColor} px-6 py-2 rounded-lg shadow-md ${hoverColor} transition duration-300`}
        >
            Copy Number
        </button>
    </div>
);

export default PaymentMethodCard;
