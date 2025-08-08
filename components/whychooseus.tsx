// components/WhyChooseUs.tsx
import Image from 'next/image';

type Feature = {
  title: string;
  description: string;
  image: string;
};

const features: Feature[] = [
  {
    title: 'Affordability',
    description: 'Our amenities are designed to offer the best value for money without compromising on quality.',
    image: 'https://images.unsplash.com/photo-1549923746-c23ef8211075?q=80&w=2070', // New, modern image
  },
  {
    title: 'Convenience',
    description: 'Everything you need is at your doorstep, from daily necessities to recreational facilities.',
    image: 'https://images.unsplash.com/photo-1505373808453-2949666061be?q=80&w=2070', // New, modern image
  },
  {
    title: 'Affordable Living',
    description: 'Choose from a variety of room types and packages to suit your personal needs and budget.',
    image: 'https://images.unsplash.com/photo-1520698188151-507c39050074?q=80&w=2070', // New, modern image
  },
  {
    title: 'Vibrant Community',
    description: 'Become part of a vibrant community where you can network, socialize, and make lifelong friends.',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070', // New, modern image
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Why Choose <span className="text-[#5d56d6]">GharPadharo</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-lg">
          At GharPadharo, we strive to create a living environment that feels like home. With our extensive range of amenities and services, we ensure that your stay with us is not just comfortable but also enriching and enjoyable.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
          >
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;