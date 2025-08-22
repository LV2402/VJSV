import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RecentHighlights from "@/components/RecentHighlights";
import Footer from "@/components/Footer";
import Boxes from "@/components/Boxes";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 font-telugu">
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