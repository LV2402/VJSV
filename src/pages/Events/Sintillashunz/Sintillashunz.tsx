import styles from "./Sintillashunz.module.css";
import { useEffect, useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  getSintiEntries,
  subscribeSintiUpdates,
} from "@/lib/sintillashunzEvents";

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
        style={{backgroundColor: 'rgba(222, 172, 172, 0.85)'}}
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
            className="w-full max-h-80 object-contain rounded-md mb-4"
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
          <h3 
            className="mb-4" 
            style={{ 
              color: '#811414',
              animation: 'fadeInUp 0.5s ease-out 0.3s both'
            }}
          >
            {event.short}
          </h3>
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
  const [adminEntries, setAdminEntries] = useState(() => getSintiEntries());

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

  useEffect(() => {
    setAdminEntries(getSintiEntries());
    return subscribeSintiUpdates(setAdminEntries);
  }, []);

  const yearlyEventData = {
    "2025": [
      {
        image: "/assets/events/2025/Sinti/mainposter.png",
        short: "సింటిలేషన్స్",
        long: "ఆట! ఆనందం! ఆహ్లాదం! కోసం ఎదురుచూస్తున్నారా? అయితే సంకోచం ఎందుకు? బ్రహ్మాండమైన ఉత్తేజంతో, మర్చిపోలేని జ్ఞాపకాలతో నిండిన కార్యక్రమాలతో మేము సిద్ధం. మీ ఉత్సాహాన్ని రెట్టింపు చేసుకుని మీరు సిద్ధంగా ఉండండి.",
      },
      {
        image: "/assets/events/2025/Sinti/event1.png",
        short: "శోధించు - సాధించు",
        long: "శోధన ప్రారంభమైంది… నిధి మీకోసం ఎదురు చూస్తోంది! సూచనలను ఛేదించండి, లక్ష్యాన్ని చేరుకోండి! ఆసక్తికరమైన మార్గాలతో మిమ్మల్ని పరీక్షించడానికి మేమొచ్చాం ‘శోధించు సాధించు’తో... సిద్ధంగా ఉన్నారా? ఇక ఆలస్యం ఎందుకు… మొదలు పెట్టండి మీ గెలుపు ప్రయాణం!",
      },
      {
        image: "/assets/events/2025/Sinti/event2.png",
        short: "గళ్ళ గల్లంతు",
        long: "ఒక్కరి జవాబు... అందరినీ ముందుకు తీసుకెళ్తుంది! కలిసి ఆడినా, గెలవడం మాత్రం నీ మెదడుపై ఆధారపడివుంది. ఆసక్తికరమైన ఆట... ఉత్కంఠభరితమైన ప్రయాణం! బృందంగా మొదలుపెట్టిన, చివరికి మిగిలేది ఒక్కరే! మరి మొదలెడదామా?",
      },
      {
        image: "/assets/events/2025/Sinti/event3.png",
        short: "పదవినోదం",
        long: "ఆధారాలను ఛేదించి, సరైన పదాలను కనుగొని, విజేతలవ్వండి! ప్రతీ పజిల్ మీలోని తెలివితేటలను పరీక్షించి, కొత్త పదాలను నేర్చుకునే అద్భుత అవకాశాన్ని అందిస్తూ ఆలోచనలకు కొత్త దారి తీస్తుంది! ప్రతి దశలో ఆసక్తికరమైన సవాళ్లు మరియు అబ్బురపరిచే పదాలు! సిద్ధమేనా? అయితే ఇప్పుడే ఆరంభించండి,మీ సామర్థ్యాన్ని చాటండి!",
      },
    ],
    "2024": [
      {
        image: "/assets/events/2024/Sinti/7.png",
        short: "సింటిలేషన్స్",
        long: "ఆట! ఆనందం! ఆహ్లాదం! కోసం ఎదురుచూస్తున్నారా? అయితే సంకోచం ఎందుకు? బ్రహ్మాండమైన ఉత్తేజంతో, మర్చిపోలేని జ్ఞాపకాలతో నిండిన కార్యక్రమాలతో మేము సిద్ధం. మీ ఉత్సాహాన్ని రెట్టింపు చేసుకుని మీరు సిద్ధంగా ఉండండి. ",
      },
      {
        image: "/assets/events/2024/Sinti/4.png",
        short: "శోధించు - సాధించు",
        long : "శోధించు - సాధించు: సమయం లేదు మిత్రమా...నిధిని వెతకడానికి మీరు సిద్ధమా? 💥💥కొత్త కొత్త చిక్కులతో మీ ముందుకు వచ్చేస్తునాం🔊🔊మొదలు పెట్టండి మీ పరుగుల వేట.... ఇది సాహితీవనం వారి ఆట🔥",
      },
      {
        image: "/assets/events/2024/Sinti/5.png",
        short: "గీతం - సంగీతం",
        long: "సంగీతం అంటే మెచ్చని వారు ఉంటారా? అందుకుగాను మీ అందరి కోసం “గీతం సంగీతం” 🎶 అనే కార్యక్రమంతో ముందుకు వస్తున్నాము. మీ జట్టుతో కలిసి ఈ సప్తస్వరాల మేళాలో పాల్గొని, పాటను కనిపెట్టి, విజేతలుగా నిలవండి!",
      },
      {
        image: "/assets/events/2024/Sinti/6.png",
        short: "ప్రయాస",
        long : "రెండు పావులు...తొమ్మిది గళ్ళు...పది ప్రశ్నలు....ఇది మీరు ఆడని చదరంగం మా సాహితీవనం చదరంగం! రెండు పావుల చదరంగం!! 💥💥",
      },
      {
        image: "/assets/events/2024/Sinti/3.png",
        short: "కథనం",
        long : "వెండి తెరపై కథానాయకుడు, కథానాయిక నటిస్తే అది సినిమా 📽... అదే గుర్తు తెలియని పాత్రలకు మీ ఊహాత్మక కల్పనను జోడిస్తూ అల్లుకుపోయే రచనమే మన సాహితీ వనం కథనం ✨",
      },
      {
        image: "/assets/events/2024/Sinti/2.png",
        short: "ఆటవిడుపు",
        long : "ఆట! ఆనందం! ఆహ్లాదం! కోసం ఎదురుచూస్తున్నారా? అయితే సంకోచం ఎందుకు? బ్రహ్మాండమైన ఉత్తేజంతో, మర్చిపోలేని జ్ఞాపకాలతో నిండిన కార్యక్రమాలతో మేము సిద్ధం. మీ ఉత్సాహాన్ని రెట్టింపు చేసుకుని మీరు సిద్ధంగా ఉండండి. 💥",
      },
    ],
    "2023": [
      {
        image: "/assets/events/2023/Sinti/main.jpg",
        short: "సింటిలేషన్స్",
        long: "సింటిలేషన్స్ - VNRVJIET Annual Fest",
      },
      {
        image: "/assets/events/2023/Sinti/1.jpg",
        short: "గీతం - సంగీతం",
        long: "సంగీత ప్రియులకు ఓ సులువైన పరీక్ష, ఈ ఆట 🎶రాగాన్ని బట్టి పాటని కనిపెట్టి, ఆసక్తికరమైన బహుమానాలు గెలుచుకోండి! 🎁✨",
      },
      {
        image: "/assets/events/2023/Sinti/2.jpg",
        short: "చెలిమి",
        long: "సినిమాలు చూసిన ప్రతిసారీ అందులోని పాత్రల్లో మన స్నేహితులని చూస్కోవడం అందరికీ అలవాటే! అలా మేము మీకు ఇచ్చిన సినీ/ఇతిహాస పాత్రలు మీ స్నేహితుల్లో ఎవరికి దగ్గరిగా ఉంటాయో చెప్తూ, దాని వెనుక ఉన్న కారణాన్ని అందంగా వర్ణించే ఆట - చెలిమి 👭👬",
      },
      {
        image: "/assets/events/2023/Sinti/3.jpg",
        short: "బుగ్గలు పడినయ్ ఆడినం",
        long: "మీ అదృష్టాన్ని, జవాబులిచ్చే వేగాన్ని పరీక్షించే ఆట - బుగ్గలు పడ్డాయి.. ఆడినం 🎈బెలూన్లను పగలగొడుతూ వాటిలో దాగున్న ఓ అంశాన్ని ఎంచుకొని, దానికి సంబంధించిన ప్రశ్నలకు వేగంగా సమాధానాలు ఇస్తే చాలు, ఆసక్తికరమైన నగదు బహుమానం మీ సొంతం! ",
      },
      {
        image: "/assets/events/2023/Sinti/4.jpg",
        short: "కథనం",
        long: "కథనం - మేము మీకిచ్చే పదాల ఆధారంగా మీ సొంత కథలను అల్లి, ఆసక్తికరమైన నగదు బహుమానాలు గెలుచుకునే అవకాశం! 📝✨",
      },
      {
        image: "/assets/events/2023/Sinti/5.jpg",
        short: "మాటరాని మౌనమిది",
        long: "ముఖంలో హావభావాలను పండిస్తూ, మేము మీకు ఇచ్చిన సినిమా/పాట పేరుని మీ మిత్రుల చేత కనిపెట్టించే ఓ సరదా ఆట - మాటరాని మౌనమిది 🎭🎬",
      },
      {
        image: "/assets/events/2023/Sinti/6.jpg",
        short: "వ్యక్తం",
        long: "మీలోని కవిని ప్రపంచానికి పరిచయం చేసేందుకు ఓ చక్కని వేదిక - వ్యక్తం 🗣",
      },
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

  const renderEventContent = () => {
    const events = yearlyEventsWithAdmin[selectedYear];

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
            className="w-full max-h-80 object-contain rounded-md mb-4"
              alt="Event"
            />
            <p className="mb-2 font-bold text-xl" style={{ color: '#811414' }}
            >{event.short}</p>
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
    <div className={styles.root}>
      {/* Add CSS animations */}
      <style>{`
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
            src="/assets/sinti.png"
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
          {yearOptions.map((year) => (
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