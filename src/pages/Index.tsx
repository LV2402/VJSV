import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RecentHighlights from "@/components/RecentHighlights";
import Footer from "@/components/Footer";
import Boxes from "@/components/Boxes";

const Index = () => {
  return (
    <div className="min-h-screen  font-telugu">
      <Navbar />
      <main>
        <Hero />
        <Boxes />
        <RecentHighlights />
      </main>
      <Footer />
    </div>
  );
};

export default Index;