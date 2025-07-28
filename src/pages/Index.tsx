import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RecentHighlights from "@/components/RecentHighlights";
import Footer from "@/components/Footer";
import Boxes from "@/components/Boxes";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <RecentHighlights />
        <Boxes />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
