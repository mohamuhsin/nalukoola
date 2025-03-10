import Campaigns from "@/components/Campaigns/Campaigns";
import Header from "@/components/Header/header";
import Follow from "@/components/Follow/Follow";

export default function CampaignsPage() {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <Campaigns />
                <Follow />
            </main>
        </div>
    );
}
