import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RecentHighlights from "@/components/RecentHighlights";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <RecentHighlights />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
