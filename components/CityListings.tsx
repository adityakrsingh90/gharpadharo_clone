'use client';

import { useState } from 'react';
import clsx from 'clsx';
import React from 'react';
import Link from 'next/link';

const cityData = {
  Bangalore: {
    PG: ['Bellandur', 'BTM Layout', 'HSR Layout', 'JP Nagar', 'Koramangala', 'Manyata', 'Marathahalli'],
    Hostels: ['Kundalahalli', 'Maruthi Nagar', 'Nagavara', 'SG Palya', 'Tavarekere', 'Veerannapalya'],
    Rooms: ['Hoodi', 'Koramangala', 'RT Nagar', 'Sarjapur', 'Tanisandra', 'Yeshwanthpur'],
    Coliving: ['Bellandur', 'BTM Layout', 'HSR Layout', 'JP Nagar', 'Koramangala', 'Manyata', 'Marathahalli'],
  },
  Chennai: {
    PG: ['Adyar', 'T. Nagar', 'Anna Nagar'],
    Hostels: ['Vadapalani', 'Ashok Nagar'],
    Rooms: ['Velachery', 'Tambaram'],
    Coliving: ['OMR', 'Kodambakkam'],
  },
  // Add more cities similarly...
};

// 🔒 Type-safe city keys
type City = keyof typeof cityData;

const CityListings: React.FC = () => {
  const cities = Object.keys(cityData) as City[];
  const [activeCity, setActiveCity] = useState<City>(cities[0]);

  const data = cityData[activeCity];

  return (
    <section className="px-6 py-10 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-gray-900">
        Explore <span className="text-[#5d56d6]">Cities</span>
      </h2>
      
      {/* City Tabs */}
      <div className="flex flex-wrap justify-center gap-6 border-b-2 border-gray-200 pb-4 mb-6">
        {cities.map((city) => (
          <button
            key={city}
            onClick={() => setActiveCity(city)}
            className={clsx(
              'text-xl md:text-2xl font-bold transition-all duration-300 transform hover:scale-110',
              activeCity === city
                ? 'text-[#5d56d6] border-b-2 border-[#5d56d6]'
                : 'text-gray-500 hover:text-gray-700'
            )}
          >
            {city}
          </button>
        ))}
      </div>

      {/* Listings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in-up">
        {Object.entries(data).map(([category, places]) => (
          <div key={category} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {category} in <span className="text-[#5d56d6]">{activeCity}</span>
            </h3>
            <ul className="space-y-3 text-gray-700 text-base">
              {(places as string[]).map((place) => (
                <li key={place} className="hover:text-[#5d56d6] transition-colors duration-200 cursor-pointer">
                  <Link href={`/${activeCity}/${category}/${place}`} className="block">
                    {category} in {place}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CityListings;
