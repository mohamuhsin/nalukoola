import clsx from "clsx"; // Install clsx if you haven't: npm install clsx

export default function TabButton({ activeTab, setActiveTab, tab }) {
    const tabLabels = {
        mobileMoney: "Mobile Money",
        bankTransfer: "Bank Transfer",
    };

    return (
        <button
            className={clsx(
                "flex-1 p-2",
                activeTab === tab
                    ? "bg-[#dd0300] text-[#ffffff] border-b-2 border-[#0c0076] font-bold"
                    : "text-gray-500"
            )}
            onClick={() => setActiveTab(tab)}
        // Adds accessibility for screen readers
        >
            {tabLabels[tab]}
        </button>
    );
}
