'use client';

import Image from 'next/image';
import { MapPin, Search } from 'lucide-react';
import logo from '@/public/logo.png';
import Link from 'next/link'; // Import Link for better navigation

const Navbar: React.FC = () => {
return (
<nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md px-6 py-3 flex items-center justify-between">
{/* Logo */}
<Link href="/" className="flex items-center space-x-2 transition-transform hover:scale-105 duration-200">
<Image
src={logo}
alt="GharPadharo Logo"
width={50}
height={50}
className="cursor-pointer"
/>
<span className="text-xl font-bold text-[#5d56d6] cursor-pointer">GharPadharo</span>
</Link>

  {/* Search bar */}
  <div className="hidden md:flex items-center bg-white border border-[#5d56d6] rounded-full px-4 py-2 w-full max-w-xl mx-4 transition-shadow focus-within:shadow-lg duration-200">
    <MapPin className="text-[#5d56d6]" size={18} />
    <input
      type="text"
      placeholder="Where do you want to stay?"
      className="flex-1 px-2 outline-none text-sm placeholder-gray-500"
    />
    <button className="bg-[#5d56d6] p-2 rounded-full text-white transition-transform hover:scale-105 duration-200">
      <Search size={16} />
    </button>
  </div>

  {/* Login/Signup */}
  <div className="flex items-center">
    <button className="border border-[#5d56d6] text-[#5d56d6] font-semibold px-4 py-2 rounded-md hover:bg-[#5d56d6] hover:text-white transition-transform hover:scale-105 duration-200">
      LOGIN / SIGN UP
    </button>
  </div>
</nav>
);
};

export default Navbar;