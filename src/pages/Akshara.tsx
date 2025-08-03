import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Akshara = () => {
  const [selectedYear, setSelectedYear] = useState("2025");
  const handleYearClick = (year: string) => {
    setSelectedYear(year);
  };
  const yearlyEventData: Record<string, { image: string; short: string; long: string }[]> = {
  "2024": [
    {
      image: "/assets/events/2024/event1.jpg",
      short: "2024 Event 1 short description.",
      long: "2024 Event 1 long extended description. ".repeat(10),
    },
    {
      image: "/assets/events/2024/event2.jpg",
      short: "2024 Event 2 short description.",
      long: "2024 Event 2 long extended description. ".repeat(10),
    },
    {
      image: "/assets/events/2024/event3.jpg",
      short: "2024 Event 1 short description.",
      long: "2024 Event 1 long extended description. ".repeat(10),
    },
    {
      image: "/assets/events/2024/event4.jpg",
      short: "2024 Event 2 short description.",
      long: "2024 Event 2 long extended description. ".repeat(10),
    },
    {
      image: "/assets/events/2024/event5.jpg",
      short: "2024 Event 1 short description.",
      long: "2024 Event 1 long extended description. ".repeat(10),
    },
    {
      image: "/assets/events/2024/event6.jpg",
      short: "2024 Event 2 short description.",
      long: "2024 Event 2 long extended description. ".repeat(10),
    },
    // ... up to event6
  ],
  "2023": [
    {
      image: "/assets/events/2023/event1.jpg",
      short: "2023 Event 1 short description.",
      long: "2023 Event 1 long extended description. ".repeat(10),
    },
    {
      image: "/assets/events/2024/event1.jpg",
      short: "2024 Event 1 short description.",
      long: "2024 Event 1 long extended description. ".repeat(10),
    },
    {
      image: "/assets/events/2024/event2.jpg",
      short: "2024 Event 2 short description.",
      long: "2024 Event 2 long extended description. ".repeat(10),
    },
    {
      image: "/assets/events/2024/event1.jpg",
      short: "2024 Event 1 short description.",
      long: "2024 Event 1 long extended description. ".repeat(10),
    },
    {
      image: "/assets/events/2024/event2.jpg",
      short: "2024 Event 2 short description.",
      long: "2024 Event 2 long extended description. ".repeat(10),
    },
    {
      image: "/assets/events/2024/event1.jpg",
      short: "2024 Event 1 short description.",
      long: "2024 Event 1 long extended description. ".repeat(10),
    },
    // ...
  ],
  "2022": [
    {
      image: "/assets/events/2022/event1.jpg",
      short: "2022 Event 1 short description.",
      long: "2022 Event 1 long extended description. ".repeat(10),
    },
    {
      image: "/assets/events/2024/event1.jpg",
      short: "2024 Event 1 short description.",
      long: "2024 Event 1 long extended description. ".repeat(10),
    },
    {
      image: "/assets/events/2024/event2.jpg",
      short: "2024 Event 2 short description.",
      long: "2024 Event 2 long extended description. ".repeat(10),
    },
    {
      image: "/assets/events/2024/event1.jpg",
      short: "2024 Event 1 short description.",
      long: "2024 Event 1 long extended description. ".repeat(10),
    },
    {
      image: "/assets/events/2024/event2.jpg",
      short: "2024 Event 2 short description.",
      long: "2024 Event 2 long extended description. ".repeat(10),
    },
    // ...
  ],
};
const renderEventContent = () => {
  const events = yearlyEventData[selectedYear];

  if (!events || events.length === 0) {
    return <p className="text-center py-10 text-green-800">No events found for {selectedYear}.</p>;
  }

  return (
    <div className="flex flex-wrap justify-center gap-6 px-6 py-10">
      {events.map((event, i) => (
        <div
          key={i}
          className="bg-white shadow-md rounded-xl p-4 w-full lg:w-[30%] sm:w-[45%]"
        >
          <img
            src={`/assets/events/${selectedYear}/event${i + 1}.jpg`}
            alt={`Event ${i + 1}`}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <p className="text-green-800 mb-2">{event.short}</p>
          <details>
            <summary className="cursor-pointer text-green-600 font-semibold">Read more</summary>
            <p className="mt-2 text-green-700 whitespace-pre-line">{event.long}</p>
          </details>
        </div>
      ))}
    </div>
  );
};

  return (
    <div className="min-h-screen bg-green-50 text-green-900">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section - Logo always visible */}
        <section className="flex flex-col items-center justify-center text-center px-4 pt-4">
          <img
            src="/assets/vjsvlogo.jpg"
            alt="Akshara Festival Logo"
            width={200}
            height={200}
            className="mb-4"
          />
          <h1 className="text-4xl md:text-5xl font-bold">
            Welcome to <span className="text-green-700">Akshara</span> Festival
          </h1>
          <p className="mt-2 text-xl font-medium text-green-800">{selectedYear}</p>
        </section>
        <section className="text-center px-4 py-8">
              <p className="text-lg max-w-xl mx-auto text-green-800">
              తెలుగు సంస్కృతి ఉట్టిపడే వేదిక - అక్షర
              </p>
            </section>
        {/* Year Selector */}
        <div className="flex justify-center gap-4 py-6">
          {["2025", "2024", "2023", "2022"].map((year) => (
            <button
              key={year}
              onClick={() => handleYearClick(year)}
              className={`px-4 py-2 rounded-full border text-sm font-semibold transition-colors ${
                selectedYear === year
                  ? "bg-green-700 text-white"
                  : "bg-green-100 text-green-800 hover:bg-green-200"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
          
        {/* Conditional Content */}
        {selectedYear === "2025" ? (
          <>
            
            <section className="flex flex-col md:flex-row items-center justify-center gap-8 px-4 pb-20">
              {["Workshops", "Competitions", "Cultural Events"].map((title, i) => (
                <div
                  key={i}
                  className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm text-center border border-green-200 hover:shadow-xl transition"
                >
                  <h3 className="text-2xl font-semibold text-green-800 mb-2">{title}</h3>
                  <p className="text-green-700">
                    {title === "Workshops" &&
                      "Engaging sessions on literature, poetry, and script writing."}
                    {title === "Competitions" &&
                      "Showcase your talent in writing, debate, and more."}
                    {title === "Cultural Events" &&
                      "Experience a blend of tradition and creativity."}
                  </p>
                </div>
              ))}
            </section>
          </>
        ) : (
          renderEventContent()
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Akshara;
