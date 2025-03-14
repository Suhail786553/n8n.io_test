import { useState } from "react";

const tabs = [
  { name: "IT Ops", image: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/itops_usecase_2x_1fbf6e467c.png", icon: "💻" },
  { name: "SecOps", image: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/secops_usecase_2x_a2268c3be2.png", icon: "🛡️" },
  { name: "DevOps", image: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/devops_usecase_2x_e7e2903d5f.png", icon: "☁️" },
  { name: "Sales", image: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/sales_usecase_2x_bc60f04f89.png", icon: "💰" },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`px-12 py-8 rounded-lg cursor-pointer font-medium transition-all duration-300 shadow-md ${
              activeTab.name === tab.name
                ? "bg-gray-900 text-white"
                : "bg-white text-gray-700 border"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            <span className="mr-2">{tab.icon}</span> {tab.name}
          </button>
        ))}
      </div>

      {/* Image Section */}
      <div className="relative w-full max-w-4xl bg-white rounded-xl shadow-lg border-4 border-gray-900 p-8 border-t-16">
        <img src={activeTab.image} alt={activeTab.name} className="w-full rounded-lg" />
      </div>
    </div>
  );
}
