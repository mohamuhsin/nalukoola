import Image from "next/image";

const CampaignImage = () => (
    <div className="w-full md:w-1/3 flex justify-center">
        <Image
            src="/nel.jpeg"
            alt="Support Our Campaign"
            width={320}
            height={320}
            className="rounded-2xl shadow-xl"
            priority
        />
    </div>
);

export default CampaignImage;
