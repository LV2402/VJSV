import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/GalleryGrid"; // make sure the path is correct

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Intro Section */}
        
        {/* Gallery Section */}
        <GalleryGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
