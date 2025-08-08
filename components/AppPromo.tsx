// components/AppPromo.tsx
import Image from 'next/image';
import React from 'react';

const AppPromo: React.FC = () => {
  return (
    <section className="bg-white rounded-2xl p-6 sm:p-12 mx-4 sm:mx-8 my-12 shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-[1.01]">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        
        {/* Left Text Section */}
        <div className="text-center lg:text-left max-w-xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Experience Hassle-Free Living with <span className="text-[#5d56d6]">GharPadharo</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            Discover rooms that feel like home. With personalized service and seamless support, your perfect stay is just a click away.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative w-full max-w-md h-[500px] lg:h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1616408285523-28f645851276?q=80&w=2070" // A working, high-quality image link
            alt="GharPadharo App Preview"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default AppPromo;
