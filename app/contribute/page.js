import Header from "@/components/Header/header";
import Contribute from "@/components/Contribute/Contribute";
import Follow from "@/components/Follow/Follow";

export const metadata = {
    title: "Luyimbazi Elias Nalukoola | Contribution",
    description: "Join Nalukoola in this fight",
};

export default function Home() {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <Contribute />
                <Follow />
            </main>
        </div>
    );
}
