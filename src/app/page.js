import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomSection";
import ProductList from "@/components/ProductList";
import Moodboard from "@/components/Moodboard";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WelcomeSection />
      <Moodboard/>
      <ProductList />
      <Testimonials />
    </div>
  );
}
