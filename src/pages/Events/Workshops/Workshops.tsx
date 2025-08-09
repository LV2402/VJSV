import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Akshara = () => {
  const [selectedYear, setSelectedYear] = useState("2025");
  const handleYearClick = (year) => {
    setSelectedYear(year);
  };
  const yearlyEventData = {
    "2025": [
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
      {
        image: "/assets/events/2025/event2.jpg",
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
    ],
    "2024": [
      {
        image: "/assets/events/2024/event1.jpg",
        short: "2024 Event 1 short description.",
        long: "ఈ ఆటలో ఒక జట్టు మాత్రమే ఆడుతారు. జట్టుకు ఇద్దరు సభ్యులు ఉంటారు.వైకుంఠపాళి ఆటలో మొదటి పది అవకాశాల్లో గమ్యానికి అత్యంత చేరువుగా వెళ్తారో వారే విజేత.ఒక్కో గడి దాటేందుకు ప్రశ్న అడగబడును.సరైన సమాధానం చెప్పినవారు ముందుకి వెళ్తారు,తప్పు సమాధానం చెప్పనివారికి టాస్క్ ఇవ్వబడును.ప్రశ్నకు సమాధానం జట్టులో ఎవరైనా చెప్పవచ్చు.నిచ్చెన వచ్చినప్పుడు ఒక ఆటగాడు తన సహచారికి చిత్రరూపంలో ఇతిహాస ఘట్టాన్ని చెప్పవలసి ఉంటుంది.సరైన సమాధానం చెప్తే నిచ్చెన ఎక్కే అవకాశం ఉంటుంది.పాము వస్తే కిందికి వెళ్ళిపోవాల్సి ఉంటుంది.పూర్తి ఆటను పాచికలతో ఆడవలసి ఉంటుంది.",
      },
      {
        image: "/assets/events/2024/event2.jpg",
        short: "2024 Event 2 short description.",
        long: "ఈ ఆట రెండు రౌండ్లుగా ఆడుతారు.ఒక జట్టు లో నలుగురు వరకు ఆడవచ్చు.మొదటి రౌండు లో పాటకి సంబంధించిన చిత్రాలు చూపించడం జరుగుతుంది. ఆ చిత్రాలను ఆధారంగా పాటను గుర్తించాల్సి ఉంటుంది.రెండవ రౌండులో పాటలో ఒక భాగాన్ని మ్యూట్ చేసి చూపించడం జరుగుతుంది. ఆ భాగంలోని పాట యొక్క చరణాలను గుర్తించాలి.విజేతను నిర్ధారించు విధానం:సరైన సమాధానం చెప్పినవారికి పది(10) పాయింట్లు ఇవ్వబడును,తప్పు సమాధానం చెప్పినవరికి అయిదు(5) పాయింట్లు తీసివెయ్యబడును , ప్రశ్న ను పాస్ చేసినవాళ్ళకి రెండు(2) పాయింట్లు తీసివెయ్యబడును.ఇలా ఎవరికైతే ఎక్కువ పాయింట్లు వస్తాయో వాళ్ళు విజేతలు.",
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
    ],
  };

  const renderEventContent = () => {
  const events = yearlyEventData[selectedYear];

  if (!events || events.length === 0) {
    return <p className="text-center py-10" style={{ color: '#811414' }}>No events found for {selectedYear}.</p>;
  }

  return (
    <div className="flex flex-wrap justify-center gap-6 px-6 py-10">
      {events.map((event, i) => (
        <div
          key={i}
          className="rounded-xl p-4 w-full sm:w-[45%] lg:w-[30%]"
          style={{ backgroundColor: '#fbeee1', boxShadow: '0 4px 8px rgba(129, 20, 20, 0.6)' }}
        >
          <img
            src={event.image}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <p className="mb-2" style={{ color: '#811414' }}>{event.short}</p>
          <div className="flex justify-end w-full">
            {selectedYear === "2025" ? (
              <a
                href="https://lekhini.org"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer font-semibold text-right"
                style={{ color: '#a55757', textDecoration: 'none' }}
              >
                Read more
              </a>
            ) : (
              <details className="w-full">
                <summary className="cursor-pointer font-semibold text-right" style={{ color: '#a55757', textDecoration: 'none' }}>
                  Read more
                </summary>
                <p className="mt-2 whitespace-pre-line text-left" style={{ color: '#9d4545' }}>{event.long}</p>
              </details>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};


  return (
    <div className="min-h-screen" style={{backgroundColor: '#fbeee1', color: '#811414'}}>
      <Navbar />
      <main className="pt-20">
        <section className="flex flex-col items-center justify-center text-center px-4 pt-4">
          <img
            src=""
            alt="Akshara Festival Logo"
            width={400}
            height={400}
            className="mb-4"
          />
          <h1 className="text-4xl md:text-5xl font-bold">
            వర్క్ షాపులు
          </h1>
          <p className="mt-2 text-xl font-medium" style={{color: '#a55757'}}>{selectedYear}</p>
        </section>
        

        <div className="flex justify-center gap-4 py-6">
          {["2025", "2024", "2023", "2022"].map((year) => (
            <button
              key={year}
              onClick={() => handleYearClick(year)}
              className={`px-4 py-2 rounded-full border text-sm font-semibold transition-colors ${
                selectedYear === year ? "text-white" : "hover:opacity-80"
              }`}
              style={{
                backgroundColor: selectedYear === year ? '#811414' : '#f5e6d3',
                color: selectedYear === year ? '#fbeee1' : '#811414',
                borderColor: '#d4a574'
              }}
            >
              {year}
            </button>
          ))}
        </div>

        {renderEventContent()}
      </main>
      <Footer />
    </div>
  );
};

export default Akshara;