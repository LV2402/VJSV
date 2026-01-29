import styles from "./Convergence.module.css";
import { useEffect, useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  getConvergenceEntries,
  subscribeConvergenceUpdates,
} from "@/lib/convergenceEvents";

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
        <div className={styles.root}>
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
  const [adminEntries, setAdminEntries] = useState(() =>
    getConvergenceEntries()
  );

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
    setAdminEntries(getConvergenceEntries());
    return subscribeConvergenceUpdates(setAdminEntries);
  }, []);

  const yearlyEventData = {
    "2025": [
        {
        image: "/assets/events/2025/RRR/Adugula_Adhipathi.png",
        short: "RRR - అడుగుల అధిపతి",
        long: "ఈ ఆటలో ఒక జట్టు మాత్రమే ఆడుతారు. జట్టుకు ఇద్దరు సభ్యులు ఉంటారు.వైకుంఠపాళి ఆటలో మొదటి పది అవకాశాల్లో గమ్యానికి అత్యంత చేరువుగా వెళ్తారో వారే విజేత.ఒక్కో గడి దాటేందుకు ప్రశ్న అడగబడును.సరైన సమాధానం చెప్పినవారు ముందుకి వెళ్తారు,తప్పు సమాధానం చెప్పనివారికి టాస్క్ ఇవ్వబడును.ప్రశ్నకు సమాధానం జట్టులో ఎవరైనా చెప్పవచ్చు.నిచ్చెన వచ్చినప్పుడు ఒక ఆటగాడు తన సహచారికి చిత్రరూపంలో ఇతిహాస ఘట్టాన్ని చెప్పవలసి ఉంటుంది.సరైన సమాధానం చెప్తే నిచ్చెన ఎక్కే అవకాశం ఉంటుంది.పాము వస్తే కిందికి వెళ్ళిపోవాల్సి ఉంటుంది.పూర్తి ఆటను పాచికలతో ఆడవలసి ఉంటుంది.",
      },
      {
        image: "/assets/events/2025/RRR/Chathurvyuham.png",
        short: "RRR - చతుర్వ్యూహం",
        long: "ఈ ఆట రెండు రౌండ్లుగా ఆడుతారు.ఒక జట్టు లో నలుగురు వరకు ఆడవచ్చు.మొదటి రౌండు లో పాటకి సంబంధించిన చిత్రాలు చూపించడం జరుగుతుంది. ఆ చిత్రాలను ఆధారంగా పాటను గుర్తించాల్సి ఉంటుంది.రెండవ రౌండులో పాటలో ఒక భాగాన్ని మ్యూట్ చేసి చూపించడం జరుగుతుంది. ఆ భాగంలోని పాట యొక్క చరణాలను గుర్తించాలి.విజేతను నిర్ధారించు విధానం:సరైన సమాధానం చెప్పినవారికి పది(10) పాయింట్లు ఇవ్వబడును,తప్పు సమాధానం చెప్పినవరికి అయిదు(5) పాయింట్లు తీసివెయ్యబడును , ప్రశ్న ను పాస్ చేసినవాళ్ళకి రెండు(2) పాయింట్లు తీసివెయ్యబడును.ఇలా ఎవరికైతే ఎక్కువ పాయింట్లు వస్తాయో వాళ్ళు విజేతలు.",
      },
      {
        image: "/assets/events/2025/RRR/PuraanaMedalu.png",
        short: "RRR - పురాణ మేడలు",
        long: "2024 Event 1 long extended description. ".repeat(10),
      },
      {
        image: "/assets/events/2025/Saaradhi/Budget_Sessions.png",
        short: "సారథి - BUDGET SESSIONS",
        long: "2024 Event 2 long extended description. ".repeat(10),
      },
      {
        image: "/assets/events/2025/Saaradhi/Kathana_Kuthulam.png",
        short: "సారథి - కథన కుతూహలం",
        long: "2024 Event 1 long extended description. ".repeat(10),
      },
      {
        image: "/assets/events/2025/Saaradhi/Telugu_Taavi.png",
        short: "సారథి - తెలుగు తావి",
        long: "2024 Event 2 long extended description. ".repeat(10),
      },
    ],
    "2023'R": [
      {
        image: "/assets/events/2023/RRR/4.png",
        short: "RRR - కురుక్షేత్రం లో రావణసంహారం",
        long: "RRR ఆధ్వర్యంలో, విజ్ఞానజ్యోతి సాహితీవనం వారు వినూత్నంగా నిర్వహిస్తున్న కార్యక్రమం - కురుక్షేత్రం లో రావణ సంహారం!!",
      },
      {
        image: "/assets/events/2023/RRR/5.png",
        short: "RRR - పదవ్యూహం",
        long: "ఆధ్వర్యంలో, విజ్ఞానజ్యోతి సాహితీవనం వారు వినూత్నంగా నిర్వహిస్తున్న కార్యక్రమం - పదవ్యూహం !!",
      },
      {
        image: "/assets/events/2023/RRR/6.png",
        short: "RRR - లక్ష్య ప్రశ్నలు",
        long: "ఆధ్వర్యంలో, విజ్ఞానజ్యోతి సాహితీవనం వారు వినూత్నంగా నిర్వహిస్తున్న కార్యక్రమం-లక్ష్య ప్రశ్నలు!!",
      },
      {
        image: "/assets/events/2023/Saradhi/1.png",
        short: "సారథి - BUDGET SESSIONS",
        long: "సారథి ఆధ్వర్యంలో, విజ్ఞానజ్యోతి సాహితీవనం వారు వినూత్నంగా నిర్వహిస్తున్న కార్యక్రమం Budget Sessions!! ఇందులో భాగంగా అలా మీరు కూడా కాసేపు అధికారంలోకి వచ్చి ఒక స్ఫూర్తిదాయక బడ్జెట్ ని రూపొందించి మన రాష్ట్రానికి మరింత అభివృద్ధి పథం చూపించే వినూత్న అవకాశం.",
      },
      {
        image: "/assets/events/2023/Saradhi/2.png",
        short: "సారథి - Voice For Nation",
        long: "సారథి ఆధ్వర్యంలో, విజ్ఞానజ్యోతి సాహితీవనం వారు వినూత్నంగా నిర్వహిస్తున్న కార్యక్రమం Voice for Nation!! ఇందులో భాగంగా మన భారత దేశాన్ని వివిధ సామాజిక, ఆర్థిక మరియు సాంస్కృతిక అంశాలలో ఇతర దేశాలతో పోల్చి మన దేశం ఎందుకు గొప్పో మీరు వివరించాలి.",
      },
      {
        image: "/assets/events/2023/Saradhi/3.png",
        short: "సారథి - ప్రకటన - ప్రచారం",
        long: "సారథి ఆధ్వర్యంలో, విజ్ఞానజ్యోతి సాహితీవనం వారు వినూత్నంగా నిర్వహిస్తున్న కార్యక్రమం ప్రకటన- ప్రచారం!!ప్రకటన-ప్రచారం అనే ఈ కార్యక్రమం ఎన్నికల గురించి, ఎన్నికల ప్రకటన(మేనిఫెస్టో) గురించి అవగాహన తీసుకొని రావడమే ప్రధాన లక్ష్యం.",
      },
      {
        image: "/assets/events/2023/Saradhi/7.png",
        short: "సారథి - తెలుగు తావి",
        long: "ఈ Convergence లో భాగంగా విజ్ఞానజ్యోతి సాహితీవనం తరపున తెలుగు తావి అనే స్టాల్ ని ఏర్పాటు చేస్తున్నాం. ఈ స్టాల్ యొక్క ముఖ్య ఉద్దేశ్యం మన తెలుగు వారు ఇంజనీర్లుగా మారి ప్రపంచంలో ప్రభావవంతమైన వ్యక్తులుగా ఎటువంటి విప్లవాత్మకమైన మార్పులు తీసుకువచ్చారో, తెలియపరచడం, మరియు వివిధ యాసలు, సామ్రాజ్యాలు, అష్టాదశపురాణాల గురించి ప్రదర్శనలు ఏర్పాటు చేసి విద్యార్థులకు అవగాహన కల్పించడం!!",
      },
    ],
    "2023": [
      {
        image: "/assets/events/2023/RRR/1r.png",
        short: "RRR - సాహితీవనం వారి పాట",
        long :"సినిమాలంటే అందరికీ ఇష్టమే! మీకే కనుక ఒక సినిమాని రూపొందించే అవకాశం వస్తే? ఒక అందమైన సినిమాని నిర్మించడానికి కావాల్సిన సాంకేతిక బృందాన్ని వేలంపాట ద్వారా ఎన్నుకునే ఆసక్తికరమైన ఆటే ఈ సాహితీవనం వారి పాట 🔔",
      },
      {
        image: "/assets/events/2023/RRR/2r.png",
        short: "RRR - ఆట - వేట",
        long: "రోజూ తిరిగే కాలేజీనే..ఎప్పుడూ చుసే ప్రదేశాలే..కానీ చమత్కారమైన తెలుగు పొడుపు కథలు మరియు క్లిష్టమైన ప్రశ్నలకు జవాబులు వెతికి, ఆ ప్రదేశాలు కనుక్కోవడానికి స్నేహితులతో కలిసి ఒక ఆట ఆడితే? అదే *ఆట - వేట*📍",
      },
      {
        image: "/assets/events/2023/RRR/3r.png",
        short: "RRR - ప్రశ్నావినోదము",
        long: "పరీక్షల్లో ప్రశ్నలకి జవాబులు రాసి రాసి విసిగెత్తిపోయారా? అయితే ఈసారి సరదాగా జవాబులకి ప్రశ్నలు సృష్టించండి, ప్రశ్నావినోదములో పాల్గొనండి!",
      },
      {
        image: "/assets/events/2023/RRR/4r.png",
        short: "సాహిత్య సందడి",
        long: "మన రాష్ట్రంలో ఎంతో మంది కవులు ఎంతో మంది సంఘసంస్కర్తలు... ఇంతేనా? ఇతిహాసాలైన మహాభారత, భాగవత, రామాయణ మధ్య సంబంధాలు... ఇంతేనా? ఇంకెన్నో వినోదభరితమైన ఆటలు, పాటలు... అన్ని ఒకటే చోటుంటే ఇంకేమైన ఉందా... వినోదమే వినోదము!! వీటన్నింటి గురించి తెలుసుకోవాలంటే Convergence’23 లో భాగమైన సారధిలోని *సాహిత్య సందడి* లో పాల్గొనండి … 🎉",
      },
      {
        image: "/assets/events/2023/Saradhi/1r.png",
        short: "సారథి - సభాపర్వం",
        long : "యుధ్ధానికి కావలసింది బాహు బలం....కానీ మాటల యుధ్ధానికి కావలసింది వాదనా గుణం. మీ గొంతుతో పాటు మీ మాటల ప్రవాహాన్ని పెంచి ఒక మలుపుకి లేదా మార్పుకి కారణం అవ్వాలంటే సాహితీవనం వారు నిర్వహించే సభాపర్వం లో పాల్గొనండి.",
      },
      {
        image: "/assets/events/2023/Saradhi/2r.png",
        short: "సారథి - YOUTH PARLIAMENT",
        long : "YOUTH PARLIAMENT",
      },
      {
        image: "/assets/events/2023/Saradhi/3r.png",
        short: "సారథి - జిజ్ఞాస",
        long : "దేశంలో ఉన్న ప్రతి పౌరుడికి ఉండే హక్కులు మానవహక్కులు. మానవహక్కులు గురించి తెలుసుకోవడం ఎంతో ముఖ్యమైంది. జిజ్ఞాసలో పాల్గొని మీ జ్ఞ్యానాన్ని పరీక్షించుకొండి. తగిన బహుమానాలు పొందండి.",
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

  // Update your renderEventContent function
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
              className="w-full object-contain rounded-md mb-4"
              alt="Event"
            />
            <p className="mb-2 font-bold text-xl" style={{ color: '#811414' }}
            >{event.short}</p>
            <div className="flex justify-end w-full">
              {(
                <button
                  onClick={() => handleReadMoreClick(event)}
                  className="cursor-pointer font-semibold text-right px-4 py-2 rounded hover:opacity-80"
                  style={{ color: '#a55757', background: 'none', border: 'none' }}
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
      <div className={styles.root}>
      <div className="navbar-fade-in">
        <Navbar />
      </div>
      
      <main className="pt-20 content-fade-in">
        <section className="flex flex-col items-center justify-center text-center px-4 pt-4">
          <img
            src="/assets/conv.png"
            alt="LOGO"
            width={600}
            height={100}
            className="mb-4"
            style={{ animation: 'fadeInUp 1s ease-out 0.2s both' }}
          />
          <h1 
            className="text-4xl md:text-5xl font-bold heading-fade-in"
            style={{ animation: 'fadeInUp 1.5s ease-out 0.6s both' }}
          >
            కన్వర్జెన్స్
          </h1>
          <br />
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