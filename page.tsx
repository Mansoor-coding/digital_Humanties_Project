import HeroSection from "@/components/HeroSection";
import AccountRoster from "@/components/AccountRoster";
import ColorMoodBoard from "@/components/ColorMoodBoard";
import ObjectsOfSlowness from "@/components/ObjectsOfSlowness";
import ManufacturedMood from "@/components/ManufacturedMood";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AccountRoster />
      <ColorMoodBoard />
      <ObjectsOfSlowness />
      <ManufacturedMood />
      <Footer />
    </main>
  );
}