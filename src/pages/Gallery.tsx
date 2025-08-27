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
  <h1 className="text-[2.75rem] md:text-[3rem] font-bold text-[#811414] leading-snug">
    చిత్రమాలిక
  </h1>
  <p className="max-w-3xl mx-auto text-lg md:text-xl text-[#811414] opacity-90 leading-relaxed mt-3">
    మా కూటమి లో  జరిగిన ప్రత్యేకమైన క్షణాలను
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
