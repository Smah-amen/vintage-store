import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomSection";
import ProductList from "@/components/ProductList";
import Moodboard from "@/components/Moodboard";
import Testimonials from "@/components/Testimonials";
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/nextAuth";

export default async function Home() {
  const { user } = await getServerSession(authOptions);
  console.log(user);
  return (
    <div>
      <HeroSection />
      <WelcomeSection />
      <Moodboard />
      <ProductList />
      <Testimonials />
    </div>
  );
}
