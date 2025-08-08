import Navbar from "@/components/Navbar";
import AmenitiesSection from "@/components/AmenitiesSection";
import AmenitiesCardSection from "@/components/AmenitiesCardSection";
import WhyChooseUs from "@/components/whychooseus";
import AppPromo from "@/components/AppPromo";
import CityListings from "@/components/CityListings";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <AmenitiesSection />
      <AmenitiesCardSection />
      <WhyChooseUs />
      <AppPromo />
      <CityListings />
      <Footer />
      {/* Add more sections as needed */}
    </main>
  );
}
