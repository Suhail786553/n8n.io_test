"use client";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

export default function AiFeatureSection() {
  return (
    <section className=" flex flex-col lg:flex-row items-center bg-white justify-between px-6 lg:px-16 py-16 max-w-8xl mx-auto">
      {/* Left Content */}
      <div className="lg:w-1/2 text-center lg:text-left lg:ml-12">
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
          The <span className="text-black font-extrabold">fastest way</span> to plug AI into your own data
        </h2>
        <ul className="mt-6 space-y-4 text-lg text-gray-700">
          <FeatureItem text="Build autonomous, multi-step agents" />
          <FeatureItem text="Chat with your own data/tools" />
          <FeatureItem text="Plug into your own products" />
          <FeatureItem text="Use any model (including self-hosted)" />
        </ul>
        <button className="mt-6 px-6 py-3 border-2 border-teal-600 text-teal-600 rounded-md font-medium text-lg hover:bg-teal-600 hover:text-white transition">
          Explore advanced AI features
        </button>
      </div>

      {/* Right Side - Full Image */}
      <div className="lg:w-1/2 flex justify-center mt-12 lg:mt-0">
        <Image
          src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/ai_section_keyart_optimized_b1f70a72e8.svg" // Replace with your actual image path
          alt="AI Feature Image"
          width={600}
          height={400}
          className="rounded-lg shadow-lg w-full max-w-lg lg:max-w-xl"
        />
      </div>
    </section>
  );
}

// Reusable Feature Item
const FeatureItem = ({text}) => (
  <li className="flex items-center space-x-3">
    <FaCheck className="text-teal-600" />
    <span>{text}</span>
  </li>
);
