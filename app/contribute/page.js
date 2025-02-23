import Header from "@/components/Header/header";
import Follow from "@/components/Follow/Follow";
import CampaignSection from "@/components/Contribute/CampaignSection";

export const metadata = {
    title: "Luyimbazi Elias Nalukoola | Contribution",
    description: "Join Nalukoola in this fight",
};

export default function Home() {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <CampaignSection />
                <Follow />
            </main>
        </div>
    );
}
