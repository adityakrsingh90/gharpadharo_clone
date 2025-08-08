import { FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Logo & Address */}
        <div>
          <h2 className="text-3xl font-bold text-[#5d56d6] mb-4">GharPadharo</h2>
          <p className="font-semibold mb-2">Corporate Office</p>
          <address className="not-italic text-sm text-gray-600">
            No. 1190, 22nd Cross, HSR Layout, Sector 3<br/>
            Bangalore, Karnataka, India - 560102
          </address>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-900">Product</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="/faqs" className="hover:text-[#5d56d6] transition-colors">FAQs</Link></li>
            <li><Link href="/how-it-works" className="hover:text-[#5d56d6] transition-colors">How it Works</Link></li>
            <li><Link href="/list-property" className="hover:text-[#5d56d6] transition-colors">List Your Property</Link></li>
            <li><Link href="/gharclub" className="hover:text-[#5d56d6] transition-colors">GharClub</Link></li>
            <li><Link href="/amenities" className="hover:text-[#5d56d6] transition-colors">Amenities</Link></li>
            <li><Link href="/testimonials" className="hover:text-[#5d56d6] transition-colors">Testimonials</Link></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-900">Company</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="/about" className="hover:text-[#5d56d6] transition-colors">About Us</Link></li>
            <li><Link href="/careers" className="hover:text-[#5d56d6] transition-colors">Careers</Link></li>
            <li><Link href="/contact" className="hover:text-[#5d56d6] transition-colors">Contact Us</Link></li>
            <li><Link href="/blog" className="hover:text-[#5d56d6] transition-colors">Blog</Link></li>
            <li><Link href="/privacy" className="hover:text-[#5d56d6] transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-[#5d56d6] transition-colors">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-900">Contact Us</h3>
          <p className="flex items-center gap-2 text-sm mb-1">📞 +91 88845 18010</p>
          <p className="flex items-center gap-2 text-sm mb-3">📧 info@gharpadharo.com</p>

          <h4 className="text-lg font-semibold mb-2 text-gray-900">Stay In Touch</h4>
          <div className="flex gap-4 text-xl text-gray-600">
            <Link href="https://www.facebook.com" className="hover:text-[#5d56d6] transition-colors"><FaFacebookF /></Link>
            <Link href="https://www.youtube.com" className="hover:text-[#5d56d6] transition-colors"><FaYoutube /></Link>
            <Link href="https://www.linkedin.com" className="hover:text-[#5d56d6] transition-colors"><FaLinkedinIn /></Link>
            <Link href="https://www.instagram.com" className="hover:text-[#5d56d6] transition-colors"><FaInstagram /></Link>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-300 mt-8 pt-8 text-center text-sm text-gray-600">
        © 2024 GharPadharo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
