// components/AmenitiesCardSection.tsx
import Image from 'next/image';

type Amenity = {
  title: string;
  description: string;
  image: string;
};

const amenities: Amenity[] = [
  {
    title: 'Fully Furnished Rooms',
    description: 'Each room is equipped with modern furniture, including a comfortable bed, a study table, a chair, and ample storage space.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1740', // Working
  },
  {
    title: 'Meal Plans',
    description: 'Enjoy nutritious and delicious meals with our optional meal plans, prepared by professional chefs.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887', // Working
  },
  {
    title: 'Common Kitchens',
    description: 'Fully equipped kitchens with refrigerators, microwaves, and utensils for those who prefer to cook.',
    image: 'https://images.unsplash.com/photo-1596701048682-1249b5a0349c?q=80&w=1964', // New, working link
  },
  {
    title: 'Parking Facilities',
    description: 'Secure parking spaces for residents with vehicles.',
    image: 'https://images.unsplash.com/photo-1577977469389-c4ae19389b0d?q=80&w=1974', // New, working link
  },
  {
    title: 'High-Speed WiFi',
    description: 'Stay connected with fast and reliable internet in all areas.',
    image: 'https://images.unsplash.com/photo-1510901594896-1c0953a92b21?q=80&w=2070', // New, working link
  },
  {
    title: 'Gym Facilities',
    description: 'Access to modern gym equipment to maintain a healthy lifestyle.',
    image: 'https://images.unsplash.com/photo-1634267499621-c4f923d8c11e?q=80&w=2070', // New, working link
  },
  {
    title: 'Study Rooms',
    description: 'Quiet and comfortable study spaces for focused work.',
    image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1974', // Working
  },
  {
    title: 'Housekeeping',
    description: 'Regular cleaning service to maintain a neat and tidy environment.',
    image: 'https://images.unsplash.com/photo-1572944641908-01389445163a?q=80&w=2070', // New, working link
  },
  {
    title: 'Security',
    description: '24/7 CCTV and on-site security for your safety.',
    image: 'https://images.unsplash.com/photo-1616469829584-c8c227181d11?q=80&w=2070', // New, working link
  },
];

const AmenitiesCardSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
        Our <span className="text-sky-500">Amenities</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {amenities.map((amenity, index) => (
          <div
            key={index}
            className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
          >
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src={amenity.image}
                alt={amenity.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">{amenity.title}</h3>
              <p className="text-gray-600 text-sm">{amenity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AmenitiesCardSection;