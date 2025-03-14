import Link from "next/link";
const Header = () => {
    return (
      <header className="text-center py-44 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center space-x-2 text-gray-700">
            <span className="font-semibold">GitHub</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">⭐ 66,929</span>
          </div>
  
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            Secure, AI-native <br />
            <span className="text-purple-500">workflow automation</span>
          </h1>
  
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            The world's most popular workflow automation platform for technical teams
          </p>
  
          <div className="mt-6 space-x-4">
            <Link href="/start"><button className="px-6 py-3 bg-teal-600 text-white rounded-md font-medium cursor-pointer">
              Get started for free
            </button></Link>
            <button className="px-6 py-3 text-black border rounded-md font-medium cursor-pointer">
              Talk to sales
            </button>
          </div>
  
          {/* Scrolling Logos */}
          <div className="relative overflow-hidden mt-12">
            <div className="flex items-center animate-scroll whitespace-nowrap">
              {/* Duplicate logos to create an infinite loop */}
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex space-x-10">
                  <img
                    src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Spendesk_c557ca777e.svg"
                    alt="Autodesk"
                    className="h-16 w-auto"
                  />
                  <img
                    src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Spendesk_c557ca777e.svg"
                    alt="ChatHQ"
                    className="h-16 w-auto"
                  />
                  <img
                    src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Spendesk_c557ca777e.svg"
                    alt="Spendesk"
                    className="h-16 w-auto"
                  />
                  <img
                    src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Spendesk_c557ca777e.svg"
                    alt="Information"
                    className="h-16 w-auto"
                  />
                  <img
                    src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Spendesk_c557ca777e.svg"
                    alt="Sendinblue"
                    className="h-16 w-auto"
                  />
                  <img
                    src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Spendesk_c557ca777e.svg"
                    alt="Liberty Mutual"
                    className="h-16 w-auto"
                  />
                  <img
                    src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Spendesk_c557ca777e.svg"
                    alt="Pearson"
                    className="h-16 w-auto"
                  />
                  <img
                    src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Spendesk_c557ca777e.svg"
                    alt="Onfleet"
                    className="h-16 w-auto"
                  />
                  <img
                    src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Spendesk_c557ca777e.svg"
                    alt="Unbabel"
                    className="h-16 w-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;
  