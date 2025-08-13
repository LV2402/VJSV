import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/GalleryGrid";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background font-telugu">
      <Navbar />
      <main className="pt-16">
        {/* Intro Section */}
        {/* గ్యాలరీ */}
        <section className="text-center py-10">
          <h1 className="text-4xl font-bold text-primary mb-4">
            చిత్రమాలిక 
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            మా క్లబ్‌లో జరిగిన ప్రత్యేకమైన క్షణాలను, సృజనాత్మకతను మరియు
            స్ఫూర్తిని ప్రతిబింబించే చిత్రాలు ఇక్కడ చూడండి.
          </p>
        </section>

        {/* Gallery Section */}
        <GalleryGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
