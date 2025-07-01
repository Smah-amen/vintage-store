import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomSection";
import ProductList from "@/components/ProductList";
import Moodboard from "@/components/Moodboard";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WelcomeSection />
      <Moodboard/>
      <ProductList />
    </div>
  );
}
