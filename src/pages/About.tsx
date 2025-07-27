import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold">
              About <span className="bg-hero-gradient bg-clip-text text-transparent">VJSV</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Vignana Jyothi Sahithi Vanam - Where Telugu literature flourishes and young minds discover their creative voice.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;