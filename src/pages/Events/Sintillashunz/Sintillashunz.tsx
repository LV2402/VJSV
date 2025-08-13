import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Modal Component - Add this new component
const Modal = ({ isOpen, onClose, event }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center animate-fade-out"
      style={{
        animation: 'modalFadeIn 0.1s ease-out'
      }}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0" 
        style={{backgroundColor: 'rgba(129, 20, 20, 0.7)'}}
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div 
        className="relative w-full max-w-lg max-h-[80vh] overflow-y-auto rounded-xl p-6 mx-4"
        style={{ 
          backgroundColor: '#fbeee1', 
          boxShadow: '0 8px 24px rgba(129, 20, 20, 0.8)',
          animation: 'modalSlideIn 0.3s ease-out'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center font-bold text-lg hover:opacity-80 transition-opacity z-10"
          style={{ backgroundColor: '#811414', color: '#fbeee1' }}
          title="Close"
        >
          ×
        </button>
        
        {/* Modal Body */}
        <div className="pt-2">
          <img
            src={event.image}
            alt="Event"
            className="w-full h-48 object-cover rounded-md mb-4"
            style={{ animation: 'fadeInUp 0.5s ease-out 0.1s both' }}
          />
          <h3 
            className="text-xl font-bold mb-3" 
            style={{ 
              color: '#811414',
              animation: 'fadeInUp 0.5s ease-out 0.2s both'
            }}
          >
            Event Details
          </h3>
          <p 
            className="mb-4" 
            style={{ 
              color: '#811414',
              animation: 'fadeInUp 0.5s ease-out 0.3s both'
            }}
          >
            {event.short}
          </p>
          <div 
            className="border-t pt-4" 
            style={{ 
              borderColor: '#d4a574',
              animation: 'fadeInUp 0.5s ease-out 0.4s both'
            }}
          >
            <p className="whitespace-pre-line leading-relaxed" style={{ color: '#9d4545' }}>
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
  // Add these new state variables
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleYearClick = (year) => {
    setSelectedYear(year);
  };

  // Add these new handler functions
  const handleReadMoreClick = (event) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedEvent(null);
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
        image: "/assets/events/2024/Saaradhi.png",
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

  // Update your renderEventContent function
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
            className="rounded-xl p-4 w-full sm:w-[45%] lg:w-[30%] transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
            style={{ 
              backgroundColor: '#fbeee1', 
              boxShadow: '0 4px 8px rgba(129, 20, 20, 0.6)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(129, 20, 20, 0.8)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(129, 20, 20, 0.6)';
            }}
          >
            <img
              src={event.image}
              className="w-full h-48 object-cover rounded-md mb-4"
              alt="Event"
            />
            <p className="mb-2" style={{ color: '#811414' }}>{event.short}</p>
            <div className="flex justify-end w-full">
              {(
                <button
                  onClick={() => handleReadMoreClick(event)}
                  className="cursor-pointer font-semibold text-right hover:opacity-80 transition-opacity"
                  style={{ color: '#a55757', background: 'none', border: 'none', padding: 0 }}
                >
                  Read more
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen" style={{backgroundColor: '#fbeee1', color: '#811414'}}>
      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes slideInDown {
          from { 
            opacity: 0; 
            transform: translateY(-30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes modalSlideIn {
          from { 
            opacity: 0; 
            transform: translate(-50%, -60%) scale(0.9); 
          }
          to { 
            opacity: 1; 
            transform: translate(-50%, -50%) scale(1); 
          }
        }
        
        .page-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        
        .navbar-fade-in {
          animation: slideInDown 0.8s ease-out;
        }
        
        .content-fade-in {
          animation: fadeInUp 1s ease-out 0.3s both;
        }
        
        .heading-fade-in {
          animation: fadeInUp 1.2s ease-out 0.5s both;
        }
        
        .years-fade-in {
          animation: fadeInUp 1s ease-out 0.7s both;
        }
        
        .events-fade-in {
          animation: fadeInUp 1s ease-out 0.9s both;
        }
      `}</style>
      
      <div className="navbar-fade-in">
        <Navbar />
      </div>
      
      <main className="pt-20 content-fade-in">
        <section className="flex flex-col items-center justify-center text-center px-4 pt-4">
          <img
            src=""
            alt="Akshara Festival Logo"
            width={400}
            height={400}
            className="mb-4"
            style={{ animation: 'fadeInUp 1s ease-out 0.2s both' }}
          />
          <h1 
            className="text-4xl md:text-5xl font-bold heading-fade-in"
            style={{ animation: 'fadeInUp 1.5s ease-out 0.6s both' }}
          >
            సింటిలేషన్స్
          </h1>
          <p 
            className="mt-2 text-xl font-medium" 
            style={{
              color: '#a55757',
              animation: 'fadeInUp 1.2s ease-out 0.8s both'
            }}
          >
            {selectedYear}
          </p>
        </section>
        
        <div className="flex justify-center gap-4 py-6 years-fade-in">
          {["2025", "2024", "2023", "2022"].map((year) => (
            <button
              key={year}
              onClick={() => handleYearClick(year)}
              className={`px-4 py-2 rounded-full border text-sm font-semibold transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${
                selectedYear === year ? "text-white" : "hover:opacity-80"
              }`}
              style={{
                backgroundColor: selectedYear === year ? '#811414' : '#f5e6d3',
                color: selectedYear === year ? '#fbeee1' : '#811414',
                borderColor: '#d4a574'
              }}
              onMouseEnter={(e) => {
                if (selectedYear !== year) {
                  e.currentTarget.style.backgroundColor = '#e8d5c4';
                  e.currentTarget.style.transform = 'scale(1.1)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(129, 20, 20, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedYear !== year) {
                  e.currentTarget.style.backgroundColor = '#f5e6d3';
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }
              }}
            >
              {year}
            </button>
          ))}
        </div>

        <div className="events-fade-in">
          {renderEventContent()}
        </div>
      </main>
      
      <div style={{ animation: 'fadeIn 1s ease-out 1.2s both' }}>
        <Footer />
      </div>
      
      {/* Add the Modal at the end */}
      <Modal 
        isOpen={modalOpen} 
        onClose={closeModal} 
        event={selectedEvent} 
      />
    </div>
  );
};

export default Akshara;