import Link from "next/link";

const Header = () => {
  return (
    <header className="text-center py-20 md:py-44 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center space-x-2 text-gray-700">
          <span className="font-semibold">GitHub</span>
          <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">⭐ 66,929</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-4">
          Secure, AI-native <br />
          <span className="text-purple-500">workflow automation</span>
        </h1>

        <p className="text-gray-600 mt-4 max-w-xl mx-auto text-sm sm:text-base">
          The world's most popular workflow automation platform for technical teams
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
          <Link href="/start">
            <button className="px-6 py-3 bg-teal-600 text-white rounded-md font-medium w-full sm:w-auto">
              Get started for free
            </button>
          </Link>
          <button className="px-6 py-3 text-black border rounded-md font-medium w-full sm:w-auto">
            Talk to sales
          </button>
        </div>

        {/* Scrolling Logos */}
        <div className="relative overflow-hidden mt-12">
          <div className="flex items-center animate-scroll whitespace-nowrap space-x-6">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex space-x-6">
                {[...Array(9)].map((_, j) => (
                  <img
                    key={j}
                    src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Spendesk_c557ca777e.svg"
                    alt="Company Logo"
                    className="h-12 sm:h-16 w-auto"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
