import styles from "./Workshops.module.css";
import { useEffect, useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fetchAdminList } from "@/lib/adminApi";

// Modal Component
const Modal = ({ isOpen, onClose, event }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        animation: "modalFadeIn 0.1s ease-out",
      }}
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
          <h3
            className="mb-4"
            style={{
              color: "#811414",
              animation: "fadeInUp 0.5s ease-out 0.3s both",
            }}
          >
            {event.short}
          </h3>
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
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [adminEntries, setAdminEntries] = useState<
    { year: string; short: string; long: string; image: string }[]
  >([]);

  const yearlyEventData = {
    "2025": [
      {
        image: "/assets/events/workshops/rachanaku.png",
        short: "రచనకు వేళాయెరా",
        long: "ఈ కార్యశాలలో డా|| కిరణ్ చక్రవర్తుల గారిచే సృజనాత్మకంగా కవితలు, గేయ కవిత్వం(Lyrics) , కథలు ఎలా రాయాలో ప్రాథమిక అంశాల నుండి అధునాతన స్థాయి వరకు చెప్పటం జరిగింది.",
      },
      {
        image: "/assets/events/workshops/wiki.png",
        short: "వికీ విభవం",
        long: "భాషాప్రేమికుల ఉత్సాహం నడుమ, నేటి తరం సాంకేతికతను జత చేస్తూ నిర్వహించబడిన వికీ విభవం కార్యశాలకు విశేష స్పందన లభించింది. వికీపీడియా ఖాతా తెరువడం మొదలు అతి ముఖ్యంగా వ్యాస సవరణ, సృజనాత్మక రచన వంటి అంశాలను స్పృశిస్తూ ముఖ్య అతిథులు శ్రీ ఆత్రం మోతీరాం గారు, శ్రీ సీడం కిరణ్ గారు మరియు కష్యప్ గారు చెప్పిన మాటలతో రెండు రోజుల పాటు జరిగిన ఈ కార్యక్రమం విజయవంతం అయ్యింది.",
      },
      {
        image: "/assets/events/workshops/Datathon.png",
        short: "DATATHON",
        long: "పెరుగుతున్న సాంకేతికతలో, సమాచారం అపారంగా పెరిగిపోతుంది. ప్రస్తుతం సమాచారం ప్రతిచోటా ఉంది. మనకు చాలా సమాచారం ఉన్నప్పటికీ,సమాచారం నిల్వ చేయడం ప్రధాన సమస్య కాదు.ఆ సమాచారాన్ని తిరిగి పొందడం ప్రధాన సవాలు.సమాచార నిల్వ వేగంగా మరియు చౌకగా లభిస్తోంది.ప్రస్తుతం దీని ధర తిరిగి సమాచారం పొందడంపైనే ఆధారపడి ఉంటుంది.ఈ అపారమైన సమాచారం రాబట్టడానికై ఆధునిక పరిష్కారాలు కావాలి. ఈ పరిష్కారాలకు ఒక మార్గం చూపించడానికే మా ఈ కార్యశాల.",
      },
    ],
  };

  useEffect(() => {
    fetchAdminList<{ year: string; short: string; long: string; image: string }[]>(
      "workshops",
      []
    ).then(setAdminEntries);
  }, []);

  const yearlyEventsWithAdmin = useMemo(() => {
    const merged = { ...yearlyEventData } as Record<string, any[]>;

    adminEntries.forEach((entry) => {
      const list = merged[entry.year] ?? [];
      merged[entry.year] = [
        ...list,
        {
          image: entry.image,
          short: entry.short,
          long: entry.long,
        },
      ];
    });

    return merged;
  }, [adminEntries]);

  const yearOptions = useMemo(() => {
    const years = Object.keys(yearlyEventsWithAdmin);
    return years
      .map((year) => year.trim())
      .filter(Boolean)
      .sort((a, b) => Number(b) - Number(a));
  }, [yearlyEventsWithAdmin]);

  useEffect(() => {
    if (yearOptions.length === 0) return;
    if (!yearOptions.includes(selectedYear)) {
      setSelectedYear(yearOptions[0]);
    }
  }, [yearOptions, selectedYear]);

  const handleReadMoreClick = (event) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div className={styles.root}>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalSlideIn {
          from { opacity: 0; transform: translate(-50%, -60%) scale(0.9); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
      `}</style>

      <Navbar />

      <main className="pt-16">
        <section className="relative w-full h-[60vh] flex items-center justify-center">
    <img
      src="/assets/wshops.jpg"
      alt="Workshops"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <h1 className="relative z-10 text-5xl md:text-6xl font-extrabold tracking-wide"
    style={{
    color: "rgba(255, 255, 255, 0.6)",
    textShadow: "1px 1px 2px rgba(209, 146, 146, 0.6)"
  }}>
      కార్యశాలలు
    </h1>
  </section>
        <div className="flex justify-center gap-4 py-6">
          {yearOptions.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-4 py-2 rounded-full border text-sm font-semibold transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${
                selectedYear === year ? "text-white" : "hover:opacity-80"
              }`}
              style={{
                backgroundColor: selectedYear === year ? "#811414" : "#f5e6d3",
                color: selectedYear === year ? "#fbeee1" : "#811414",
                borderColor: "#d4a574",
              }}
            >
              {year}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6 px-6 py-10">
          {(yearlyEventsWithAdmin[selectedYear] || []).map((event, i) => (
            <div
              key={i}
              className="rounded-xl p-4 w-full sm:w-[45%] lg:w-[30%] transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
              style={{
                backgroundColor: "#fbeee1",
                boxShadow: "0 4px 8px rgba(129, 20, 20, 0.6)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 8px 20px rgba(129, 20, 20, 0.8)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 4px 8px rgba(129, 20, 20, 0.6)";
              }}
            >
              <img
                src={event.image}
                className="w-full max-h-80 object-contain rounded-md mb-4"
                alt="Event"
              />
              <p
                className="mb-2 font-bold text-xl"
                style={{ color: "#811414" }}
              >
                {event.short}
              </p>
              <div className="flex justify-end w-full">
                <button
                  onClick={() => handleReadMoreClick(event)}
                  className="cursor-pointer font-semibold text-right hover:opacity-80 transition-opacity"
                  style={{
                    color: "#a55757",
                    background: "none",
                    border: "none",
                    padding: 0,
                  }}
                >
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />

      {/* Modal */}
      <Modal isOpen={modalOpen} onClose={closeModal} event={selectedEvent} />
    </div>
  );
};

export default Akshara;
