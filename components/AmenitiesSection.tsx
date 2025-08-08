'use client';

import Image from 'next/image';
import React from 'react';

const AmenitiesSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 py-12 bg-white pt-24 animate-fade-in">
      {/* Image with cool effect */}
      <div className="relative w-[300px] h-[300px] mb-6 transform transition-transform hover:scale-105 duration-300">
        <div className="absolute inset-0 rounded-[20px] bg-[#e0d9fc] w-full h-full transform rotate-2 z-0" />
        <Image
          src="https://picsum.photos/400/400" // A modern, relevant placeholder image
          alt="Modern amenities in a living space"
          fill
          className="object-cover rounded-[20px] shadow-2xl relative z-10"
        />
      </div>

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 animate-slide-up">
        Amazing{' '}
        <span className="text-sky-500 font-extrabold">Amenities</span>
      </h2>

      {/* Description */}
      <p className="max-w-3xl mt-4 text-gray-600 text-base sm:text-lg animate-slide-up delay-200">
        At GharPadharo, we believe that a comfortable and convenient living experience is paramount. That’s why we offer a wide range of amenities designed to cater to the needs of modern urban dwellers. Whether you’re a student, a working professional, or just someone seeking a hassle-free living experience, our facilities are designed to make your stay pleasant and worry-free.
      </p>
    </section>
  );
};

export default AmenitiesSection;