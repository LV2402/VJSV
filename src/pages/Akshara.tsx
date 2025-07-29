import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import logo from "@/assets/vjsvlogo.jpg";
//import Image from "next/image";

const Akshara = () => {
  return (
    <div className="min-h-screen bg-green-50 text-green-900">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center px-4 py-16">
          {/* Replace '/akshara-logo.png' with your actual logo path */}
          <img
            src="/assets/vjsvlogo.jpg"
            alt="Akshara Festival Logo"
            width={200}
            height={200}
            className="mb-6"
          />
          <h1 className="text-4xl md:text-5xl font-bold">
            Welcome to <span className="text-green-700">Akshara</span> Festival
          </h1>
          <p className="mt-4 text-lg max-w-xl text-green-800">
            Our flagship annual literary festival celebrating Telugu culture and creativity. Join us for a vibrant celebration of language, art, and stories.
          </p>
        </section>

        {/* 3 Flex Boxes */}
        <section className="flex flex-col md:flex-row items-center justify-center gap-8 px-4 pb-20">
          {["Workshops", "Competitions", "Cultural Events"].map((title, i) => (
            <div
              key={i}
              className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm text-center border border-green-200 hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold text-green-800 mb-2">{title}</h3>
              <p className="text-green-700">
                {title === "Workshops" && "Engaging sessions on literature, poetry, and script writing."}
                {title === "Competitions" && "Showcase your talent in writing, debate, and more."}
                {title === "Cultural Events" && "Experience a blend of tradition and creativity."}
              </p>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Akshara;
