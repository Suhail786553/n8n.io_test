// components/Navbar.js
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900 flex items-center">
          <span className="text-pink-500">●●●</span> n8n
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li><Link href="#">Product</Link></li>
          <li><Link href="#">Use cases</Link></li>
          <li><Link href="#">Docs</Link></li>
          <li><Link href="#">Community</Link></li>
          <li><Link href="#">Enterprise</Link></li>
          <li><Link href="#">Pricing</Link></li>
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 text-black border rounded-md">Sign in</button>
          <button className="px-4 py-2 bg-teal-600 text-white rounded-md">
            Get started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-gray-700">☰</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
