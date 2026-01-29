import styles from "./Akshara.module.css";
import { useEffect, useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  getAksharaEntries,
  subscribeAksharaUpdates,
} from "@/lib/aksharaEvents";

// Modal component
const Modal = ({ isOpen, onClose, event }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center animate-fade-out"
      style={{ animation: "modalFadeIn 0.1s ease-out" }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(222, 172, 172, 0.85)" }}
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div
        className="relative w-full max-w-lg max-h-[80vh] overflow-y-auto rounded-xl p-6 mx-4"
        style={{
          backgroundColor: "#fbeee1",
          boxShadow: "0 8px 24px rgba(129, 20, 20, 0.8)",
          animation: "modalSlideIn 0.3s ease-out",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center font-bold text-lg hover:opacity-80 transition-opacity z-10"
          style={{ backgroundColor: "#811414", color: "#fbeee1" }}
          title="Close"
        >
          ×
        </button>

        {/* Modal Body */}
        <div className="pt-2">
          <img
            src={event.image}
            alt="Event"
            className="w-full max-h-80 object-contain rounded-md mb-4"
            style={{ animation: "fadeInUp 0.5s ease-out 0.1s both" }}
          />
          <h3
            className="text-xl font-bold mb-3"
            style={{
              color: "#811414",
              animation: "fadeInUp 0.5s ease-out 0.2s both",
            }}
          >
            Event Details
          </h3>
          <p
            className="mb-4"
            style={{
              color: "#811414",
              animation: "fadeInUp 0.5s ease-out 0.3s both",
            }}
          >
            {event.short}
          </p>
          <div
            className="border-t pt-4"
            style={{
              borderColor: "#d4a574",
              animation: "fadeInUp 0.5s ease-out 0.4s both",
            }}
          >
            <p
              className="whitespace-pre-line leading-relaxed"
              style={{ color: "#9d4545" }}
            >
              {event.long}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Akshara = () => {
  const [selectedYear, setSelectedYear] = useState("2025");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalEvent, setModalEvent] = useState(null);
  const [adminEntries, setAdminEntries] = useState(() => getAksharaEntries());

  const handleYearClick = (year) => {
    setSelectedYear(year);
    setModalOpen(false);
    setModalEvent(null);
  };

  useEffect(() => {
    setAdminEntries(getAksharaEntries());
    return subscribeAksharaUpdates(setAdminEntries);
  }, []);

  const yearlyEventData = {
    "2025": [
      { image: "/assets/events/2025/guest1.jpg", short: "హసిత్ గోలి", registerUrl: "https://lnk.bio/vjsv_akshara25" },
      { image: "/assets/events/2025/event1.png", short: "రెండు పావుల చదరంగం", registerUrl: "https://forms.gle/bnirGRkSNXbwnoBt6" },
      { image: "/assets/events/2025/event2.png", short: "వికీవిహారం", registerUrl: "https://forms.gle/7CQYULRs5L7diX4V9" },
      { image: "/assets/events/2025/event3.png", short: "గీతం-సంగీతం", registerUrl: "https://forms.gle/gKLWm9DhGMZkuQY26" },
      { image: "/assets/events/2025/event4.png", short: "అక్షరాన్వేషణ", registerUrl: "https://forms.gle/UHivKXTJzqwiN53R9" },
      { image: "/assets/events/2025/event5.png", short: "సాహితీవనం వారి పాట", registerUrl: "https://forms.gle/HeGfY7b1TiB86a1E7" },
      { image: "/assets/events/2025/event6.png", short: "వాదం-ప్రతివాదం", registerUrl: "https://forms.gle/EVVfGaekmPqhwP6w9" },
      { image: "/assets/events/2025/event7.png", short: "పుస్తక ప్రదర్శన", registerUrl: "" },
      { image: "/assets/events/2025/event8.png", short: "ఆటవిడుపు", registerUrl: "" },
    ],

    "2024": [
      { image: "/assets/events/2024/first.png", short: "ప్రారంభ వేడుక", long: "ప్రారంభ వేడుక" },
      { image: "/assets/events/2024/guest1.png", short: "ముఖ్య అతిథి - డా || తనికెళ్ళ భరణి", long: "సాహితీలోకంలో ఆయన రచనా శైలితో..." },
      { image: "/assets/events/2024/guest2.png", short: "ముఖ్య అతిథులు - కృష్ణ చైతన్య, ప్రవర్ష్ చిత్రక", long: "“కృష్ణుడి వారసులంతా...”" },
      { image: "/assets/events/2024/event1.png", short: "వైకుంఠపాళి", long: "ఈ ఆటలో ఒక జట్టు మాత్రమే..." },
      { image: "/assets/events/2024/event2.png", short: "సిత్రలహరి", long: "ఈ ఆట రెండు రౌండ్లుగా..." },
      { image: "/assets/events/2024/event3.png", short: "రెండు పావుల చదరంగం", long: "ఈ ఆట ఒకేసారి రెండు జట్లు..." },
      { image: "/assets/events/2024/event4.png", short: "వాఙ్మయం", long: "ఈ పోటీలో పాల్గొనేవారు..." },
      { image: "/assets/events/2024/event5.png", short: "ఘుంగ్రూ(Ghungroo)", long: "అన్ని జట్లు కలిసి..." },
      { image: "/assets/events/2024/event6.png", short: "పుస్తక ప్రదర్శన", long: "ఒక మంచి పుస్తకం మీతో ఉంటే..." },
      { image: "/assets/events/2024/event7.png", short: "'అ ఆ!' (అక్షరాలతో ఆటవిడుపు)", long: "సాహిత్యం మరియు విజ్ఞానం నుంచి..." },
      { image: "/assets/events/2024/last.png", short: "ముగింపు వేడుక", long: "ముగింపు వేడుక" },
    ],

    "2023": [
      { image: "/assets/events/2023/first.png", short: "ప్రారంభ వేడుక", long: "ప్రారంభ వేడుక" },
      { image: "/assets/events/2023/guest1.png", short: "ముఖ్య అతిథి - కడలి సత్యనారాయణ", long: "'కడలి' అంత లోతైన భావాలతో..." },
      { image: "/assets/events/2023/guest2.png", short: "కవనమాలి గారు, ఆకెళ్ళ రాఘవేంద్ర గారు", long: "కవనమాలి గారు, ఆకెళ్ళ రాఘవేంద్ర గారు" },
      { image: "/assets/events/2023/event1.png", short: "గమ్యం", long: "వైకుంఠపాళి.. అదే snake and ladder.." },
      { image: "/assets/events/2023/event2.png", short: "సాహితీవనం X డ్రమాట్రిక్స్", long: "ఎన్నో యాసల సమ్మేళనం..." },
      { image: "/assets/events/2023/event3.png", short: "గీతం సంగీతం", long: "మనం తరచూ ఏదో ఒక పాటకు..." },
      { image: "/assets/events/2023/event4.png", short: "ఇతిహాసం", long: "మన భారతదేశ ఇతిహాసం గురించి..." },
      { image: "/assets/events/2023/event5.png", short: "సాహితీవనం వారి పాట", long: "వేలంపాట గురించి తెలిసిందే..." },
      { image: "/assets/events/2023/event6.png", short: "కవితా పటిమ", long: "మీ సాహిత్యాన్ని ప్రదర్శించాలని..." },
      { image: "/assets/events/2023/event7.png", short: "పుస్తక ప్రదర్శన", long: "ఒక మంచి పుస్తకం మీతో ఉంటే..." },
      { image: "/assets/events/2023/event8.png", short: "ఆటవిడుపు", long: "ఆటవిడుపు సాహిత్యం మరియు విజ్ఞానం..." },
      { image: "/assets/events/2023/last.png", short: "ముగింపు వేడుక", long: "ముగింపు వేడుక" },
    ],

    "2022": [
      { image: "/assets/events/2022/guest1.png", short: "ముఖ్య అతిథి - అజయ్ (ఏయ్ జూడ్)", long: "ముఖ్య అతిథి - అజయ్ (ఏయ్ జూడ్)" },
      { image: "/assets/events/2022/event1.png", short: "కవితా పటిమ", long: "కవితా పటిమ" },
      { image: "/assets/events/2022/event2.png", short: "రంగస్థలం", long: "సాహితీవనం X డ్రమాట్రిక్స్" },
      { image: "/assets/events/2022/event3.png", short: "ఇతిహాసం", long: "ఇతిహాసం" },
      { image: "/assets/events/2022/event4.png", short: "రారండోయ్ వంటలు చేద్దాం", long: "రారండోయ్ వంటలు చేద్దాం" },
      { image: "/assets/events/2022/event5.png", short: "వర్ణన", long: "వర్ణన" },
      { image: "/assets/events/2022/event6.png", short: "డిజిటల్ మాధ్యమాలలో తెలుగు", long: "డిజిటల్ మాధ్యమాలలో తెలుగు" },
      { image: "/assets/events/2022/event7.png", short: "సృజనాత్మక రచన", long: "సృజనాత్మక రచన" },
      { image: "/assets/events/2022/event8.png", short: "పుస్తక ప్రదర్శన", long: "ఒక మంచి పుస్తకం మీతో ఉంటే..." },
      { image: "/assets/events/2022/event9.png", short: "సాహితీవనం వారి పాట", long: "సాహితీవనం వారి పాట" },
      { image: "/assets/events/2022/last.png", short: "ముగింపు వేడుక", long: "ముగింపు వేడుక" },
    ],
  };

  const yearlyEventsWithAdmin = useMemo(() => {
    const merged = { ...yearlyEventData } as Record<string, any[]>;

    adminEntries.forEach((entry) => {
      const list = merged[entry.year] ?? [];
      merged[entry.year] = [
        ...list,
        {
          image: entry.image,
          short: entry.short,
          long: entry.registerUrl
            ? `Registration link: ${entry.registerUrl}`
            : "",
          registerUrl: entry.registerUrl,
        },
      ];
    });

    return merged;
  }, [adminEntries]);

  const handleReadMore = (event) => {
    setModalEvent(event);
    setModalOpen(true);
  };

  const renderEventContent = () => {
    const events = yearlyEventsWithAdmin[selectedYear];
    if (!events || events.length === 0) {
      return (
        <p className="text-center py-10" style={{ color: "#811414" }}>
          No events found for {selectedYear}.
        </p>
      );
    }

    return (
      <>
        {/* Main Poster */}
        <div className="flex justify-center gap-6 mb-6">
          <div
            className="rounded-xl p-5 overflow-hidden flex flex-col items-center"
            style={{
              backgroundColor: "#fbeee1",
              boxShadow: "0 4px 8px rgba(129, 20, 20, 0.6)",
              maxWidth: "400px",
            }}
          >
            <img
              src={`/assets/events/${selectedYear}/mainposter.png`}
              alt={`Akshara ${selectedYear}`}
              className="w-full h-auto object-contain"
            />
            <div className="w-full flex justify-center py-4">
              <button className="px-6 py-2 bg-red-700 text-white font-semibold rounded-lg hover:bg-red-800 transition">
                <a
                  href="https://lnk.bio/vjsv_akshara25"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  Register Now
                </a>
              </button>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {events.map((event, i) => (
            <div
              key={i}
              className="rounded-xl p-4 w-full sm:w-[45%] lg:w-[30%] transform transition-transform duration-300 hover:scale-105"
              style={{
                backgroundColor: "#fbeee1",
                boxShadow: "0 4px 8px rgba(129, 20, 20, 0.6)",
              }}
            >
              <img
                src={event.image}
                alt={`Event ${i + 1}`}
                className="w-full object-contain rounded-md mb-4"
              />
              <p className="mb-2 font-bold text-xl" style={{ color: "#811414" }}>
                {event.short}
              </p>
              <div className="flex justify-end w-full">
                {event.registerUrl ? (
                  <a
                    href={event.registerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer font-semibold text-right"
                    style={{
                      color: "#a55757",
                      textDecoration: "none",
                    }}
                  >
                    Register here
                  </a>
                ) : (
                  event.long && (
                    <button
                      onClick={() => handleReadMore(event)}
                      className="cursor-pointer font-semibold text-right px-4 py-2 rounded hover:opacity-80"
                      style={{
                        color: "#a55757",
                        background: "none",
                        border: "none",
                      }}
                    >
                      Read more
                    </button>
                  )
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          event={modalEvent || {}}
        />
      </>
    );
  };

  return (
    <div className={styles.root}>
      <Navbar />
      <main className="pt-4">
        <section className="flex flex-col items-center justify-center text-center px-4">
          <img
            src="/assets/akshara.png"
            alt="Akshara Festival Logo"
            style={{ width: "460px", height: "auto", marginBottom: "0" }}
          />
          <h1 className="text-4xl md:text-5xl font-bold mt-0">
            అతిపెద్ద సాహితీ - సాంస్కృతిక వేడుక "అక్షర"
          </h1>
          <br />
          <p className="mt-0 text-xl font-bold" style={{ color: "#6c2121ff" }}>
            {selectedYear}
          </p>
        </section>

        <section className="text-center px-4 pt-0 pb-4">
          <p
            className="text-2xl max-w-xl mx-auto font-bold"
            style={{ color: "#6c2121ff" }}
          >
            29th ఆగస్టు నుంచి 9th సెప్టెంబరు వరకు
          </p>
        </section>

        {/* Year Switch Buttons */}
        <div className="flex justify-center gap-4 py-6">
          {["2025", "2024", "2023", "2022"].map((year) => (
            <button
              key={year}
              onClick={() => handleYearClick(year)}
              className={`px-4 py-2 rounded-full border text-sm font-semibold transition-colors ${
                selectedYear === year ? "text-white" : "hover:opacity-80"
              }`}
              style={{
                backgroundColor:
                  selectedYear === year ? "#811414" : "#f5e6d3",
                color: selectedYear === year ? "#fbeee1" : "#811414",
                borderColor: "#d4a574",
              }}
            >
              {year}
            </button>
          ))}
        </div>

        {renderEventContent()}
      </main>
      <br />
      <Footer />
    </div>
  );
};

export default Akshara;
