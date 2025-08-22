import styles from "./Akshara.module.css";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Modal component as provided
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
  const [modalOpen, setModalOpen] = useState(false);
  const [modalEvent, setModalEvent] = useState(null);

  const handleYearClick = (year) => {
    setSelectedYear(year);
    setModalOpen(false); // Close modal when year changes
    setModalEvent(null);
  };

  const yearlyEventData = {
    "2025": [
      {
        image: "/assets/events/2025/event1.png",
        short: "రెండు పావుల చదరంగం",
        registerUrl: "https://forms.gle/bnirGRkSNXbwnoBt6",
      },
      {
        image: "/assets/events/2025/event2.png",
        short: "వికీవిహారం",
        registerUrl: "https://forms.gle/7CQYULRs5L7diX4V9",
      },
      {
        image: "/assets/events/2025/event3.png",
        short: "గీతం-సంగీతం",
        registerUrl: "https://forms.gle/gKLWm9DhGMZkuQY26",
      },
      {
        image: "/assets/events/2025/event4.png",
        short: "అక్షరాన్వేషణ",
        registerUrl: "https://forms.gle/UHivKXTJzqwiN53R9",
      },
      {
        image: "/assets/events/2025/event5.png",
        short: "సాహితీవనం వారి పాట",
        registerUrl: "https://forms.gle/HeGfY7b1TiB86a1E7",
      },
      {
        image: "/assets/events/2025/event6.png",
        short: "వాదం-ప్రతివాదం",
        registerUrl: "https://forms.gle/EVVfGaekmPqhwP6w9",
      },
      {
        image: "/assets/events/2025/event7.png",
        short: "పుస్తక ప్రదర్శన",
        registerUrl: "#",
      },
      {
        image: "/assets/events/2025/event8.png",
        short: "ఆటవిడుపు",
        registerUrl: "#",
      },
      /*{
        image: "/assets/events/2025/event.png",
        short: "వేచి చూడండి....",
        registerUrl: "#",
      },
      {
        image: "/assets/events/2025/event.png",
        short: "వేచి చూడండి....",
        registerUrl: "#",
      },
      {
        image: "/assets/events/2025/event.png",
        short: "వేచి చూడండి....",
        registerUrl: "https://lekhini.org/",
      },*/
    ],
    "2024": [
      {
        image: "/assets/events/2024/first.png",
        short: "ప్రారంభ వేడుక",
        long: "ప్రారంభ వేడుక",
      },
      {
        image: "/assets/events/2024/guest1.png",
        short: "ముఖ్య అతిథి - డా || తనికెళ్ళ భరణి",
        long: "సాహితీలోకంలో ఆయన రచనా శైలితో పాఠకులను కదిలించి, ఆయన నటనతో ప్రేక్షకులను మెప్పించి, ఆయనకంటూ ఒక ప్రత్యేకతను ఏర్పరచుకున్న డా॥ తనికెళ్ళ భరణి గారికి అక్షర మహోత్సవానికి విచ్చేసారు.",
      },
      {
        image: "/assets/events/2024/guest2.png",
        short: "ముఖ్య అతిథులు - కృష్ణ చైతన్య, ప్రవర్ష్ చిత్రక",
        long: "“కృష్ణుడి వారసులంతా” నుంచి “ఇంతలో ఎన్నెన్ని వింతలో” వరకు యువత మనసులకు నచ్చిన పాటలు అందించి, ఇటీవలి కాలం లో అధిక ప్రజాదరణ పొందిన “ఛల్ మొహన్ రంగ”, “గాంగ్స్ ఆఫ్ గోదావరి” చిత్రాల దర్శకులు శ్రీ కృష్ణ చైతన్య గారికి మరియు మా ప్రియమైన సీనియర్, నేడు “అభినిర్యాణం” పుస్తక రచయితగా 📽️ భాషాప్రియులెరిగిన శ్రీ “ప్రవర్ష్ చిత్రక” గారిని 🖋️ఆహ్వానించడానికి మేము సిద్ధం. వీరితో పరస్పర చర్చకు “అక్షర” వేడుకలో భాగమవ్వండి!!🌳",
      },
      {
        image: "/assets/events/2024/event1.png",
        short: "వైకుంఠపాళి",
        long: "ఈ ఆటలో ఒక జట్టు మాత్రమే ఆడుతారు. జట్టుకు ఇద్దరు సభ్యులు ఉంటారు.వైకుంఠపాళి ఆటలో మొదటి పది అవకాశాల్లో గమ్యానికి అత్యంత చేరువుగా వెళ్తారో వారే విజేత.ఒక్కో గడి దాటేందుకు ప్రశ్న అడగబడును.సరైన సమాధానం చెప్పినవారు ముందుకి వెళ్తారు,తప్పు సమాధానం చెప్పనివారికి టాస్క్ ఇవ్వబడును.ప్రశ్నకు సమాధానం జట్టులో ఎవరైనా చెప్పవచ్చు.నిచ్చెన వచ్చినప్పుడు ఒక ఆటగాడు తన సహచారికి చిత్రరూపంలో ఇతిహాస ఘట్టాన్ని చెప్పవలసి ఉంటుంది.సరైన సమాధానం చెప్తే నిచ్చెన ఎక్కే అవకాశం ఉంటుంది.పాము వస్తే కిందికి వెళ్ళిపోవాల్సి ఉంటుంది.పూర్తి ఆటను పాచికలతో ఆడవలసి ఉంటుంది.",
      },
      {
        image: "/assets/events/2024/event2.png",
        short: "సిత్రలహరి",
        long: "ఈ ఆట రెండు రౌండ్లుగా ఆడుతారు.ఒక జట్టు లో నలుగురు వరకు ఆడవచ్చు.మొదటి రౌండు లో పాటకి సంబంధించిన చిత్రాలు చూపించడం జరుగుతుంది. ఆ చిత్రాలను ఆధారంగా పాటను గుర్తించాల్సి ఉంటుంది.రెండవ రౌండులో పాటలో ఒక భాగాన్ని మ్యూట్ చేసి చూపించడం జరుగుతుంది. ఆ భాగంలోని పాట యొక్క చరణాలను గుర్తించాలి.విజేతను నిర్ధారించు విధానం:సరైన సమాధానం చెప్పినవారికి పది(10) పాయింట్లు ఇవ్వబడును,తప్పు సమాధానం చెప్పినవరికి అయిదు(5) పాయింట్లు తీసివెయ్యబడును , ప్రశ్న ను పాస్ చేసినవాళ్ళకి రెండు(2) పాయింట్లు తీసివెయ్యబడును.ఇలా ఎవరికైతే ఎక్కువ పాయింట్లు వస్తాయో వాళ్ళు విజేతలు.",
      },
      {
        image: "/assets/events/2024/event3.png",
        short: "రెండు పావుల చదరంగం.",
        long: "ఈ ఆట ఒకేసారి రెండు జట్లు ఆడుతారు. ఒక జట్టులో ఇద్దరు సభ్యులు ఉంటారు.ఈ ఆట మూడు రౌండ్లలో జరుగుతుంది. ఇరు జట్టుల్లో ఒక జట్టును ఒక ప్రశ్న అడగడం జరుగుతుంది. వారు సరైన సమాధానం చెబితే X గానీ O గానీ వారికి నచ్చిన గడిలో పెట్టవచ్చు.వారు సమాధానం చెప్పలేకపోయినా లేదా తప్పు చెప్పినా అదే ప్రశ్న అవతల జట్టు వద్దకు వెళ్తుంది. ఇప్పుడు ఏ జట్టుని అడిగిన ప్రశ్నకు సరైన సమాధానం చెప్తే, వారు  వారి X గాని O గాని నచ్చిన గడిలో పెట్టవచ్చు  లేదా అవతల జట్టు వారి X గాని O గాని గడిలోంచి తీసేయవచ్చు. ఇలా పావులని తీసేయడానికి ఇరు జట్టులకు 2 అవకాశలు ఇవ్వబడతాయి. ఇలా ఎవరైతే ఆట పూర్తి చేస్తారో వాళ్లు ఆ రౌండ్ విజేత. ఎవరైతే తక్కువ ప్రశ్నలకు సమాధానాలు చెప్పి ఎక్కువ రౌండ్లు గెలుస్తారో, ఆ జట్టుని విజేతగా ప్రకటించడం జరుగుతుంది.",
      },
      {
        image: "/assets/events/2024/event4.png",
        short: "వాఙ్మయం",
        long: "ఈ పోటీలో పాల్గొనేవారు వారికి నచ్చిన అంశం గురించి కథ రూపం లో నాలుగు నిముషాలు మాట్లాడాలి. విజేతను నిర్ధారించు విధానం : ఇందులో స్పష్టత మరియు , సృజనాత్మకంగా ప్రేక్షకులని ఆకట్టుకునేవిధంగా కథ చెప్తారో,అలాగే ఆంగ్ల పదాలు ఎంత తక్కువగా వాడుతున్నారో అనే దాని ఆధారంగా విజేతను ప్రకటిస్తాం. ",
      },
      {
        image: "/assets/events/2024/event5.png",
        short: "ఘుంగ్రూ(Ghungroo)",
        long: "అన్ని జట్లు కలిసి ఒకేసారి ఆటను ప్రారంభిస్తారు. జట్టుకు 3-4 సభ్యులు ఉంటారు. జె ఏస్ కె (JSK) వద్ద వివిధ ప్రదేశాల్లో గజ్జలను దాచడం జరుగుతుంది. గజ్జలు ఉన్న ప్రదేశాలను కనుక్కోవడానికి ప్రశ్నలు అడగడం జరుగుతుంది. సరైన సమాధానం చెప్పిన జట్టుకి గజ్జలు ఉన్న ప్రదేశం గురించి ఆధారం ఇవ్వడం జరుగుతుంది. ఇచ్చిన సమయం లో ఎవరైతే ఎక్కువ గజ్జలను వెతికి పట్టుకొస్తారో వారే విజేత.",
      },
      {
        image: "/assets/events/2024/event6.png",
        short: "పుస్తక ప్రదర్శన",
        long: "ఒక మంచి పుస్తకం మీతో ఉంటే వంద మంది స్నేహితులు మీతో ఉన్నట్టే. సాహిత్యం, విజ్ఞానం, శాస్త్రం, చరిత్ర, సృజనాత్మకత రచనలు, కవిత్వం, నవలలు ఇంకా ఎన్నో. ఈ పుస్తక ప్రదర్శన విజ్ఞాన వేదిక....రండి పాల్గొనండి జ్ఞాన పయనం లో మీరు పాలుపంచుకోండి.",
      },
      {
        image: "/assets/events/2024/event7.png",
        short: "'అ ఆ!' (అక్షరాలతో ఆటవిడుపు)",
        long: "'అ ఆ!' (అక్షరాలతో ఆటవిడుపు) సాహిత్యం మరియు విజ్ఞానం నుంచి చిన్న విరామం తీసుకుని, మీకు వినోదాన్ని అందించాలన్న ఉద్దేశంతో పుట్టిన కార్యక్రమం. రకరకాల ఆటలు, భాషా సవాళ్ళు, మరియు మరెన్నో వినోదాత్మక కార్యక్రమాలతో మేము సిద్ధంగా ఉన్నాము! సరదాగా ఆడడానికి, సవాళ్ళను ఎదుర్కొనడానికి సిద్ధంగా ఉండండి!",
      },
      {
        image: "/assets/events/2024/last.png",
        short: "ముగింపు వేడుక",
        long: "ముగింపు వేడుక",
      },
    ],
    "2023": [
      {
        image: "/assets/events/2023/first.png",
        short: "ప్రారంభ వేడుక",
        long: "ప్రారంభ వేడుక",
      },
      {
        image: "/assets/events/2023/guest1.png",
        short: "ముఖ్య అతిథి - కడలి సత్యనారాయణ",
        long: "'కడలి' అంత లోతైన భావాలతో కవిత్వం రాయగల వ్యక్తి మన కడలి గారు. ప్రముఖ గేయ రచయిత్రి అయిన కడలి సత్యనారాయణ గారు 9వ తేదీన మన అక్షర ప్రారంభోత్సవ వేడుకకు విచ్చేయనున్నారు. ఎన్నో మధురమైన మాటలు మీకై వేచి చూస్తున్నాయి సిద్ధంగా ఉండండి!!! ",
      },
      {
        image: "/assets/events/2023/guest2.png",
        short: "కవనమాలి గారు, ఆకెళ్ళ రాఘవేంద్ర గారు",
        long: "కవనమాలి గారు, ఆకెళ్ళ రాఘవేంద్ర గారు",
      },
      {
        image: "/assets/events/2023/event1.png",
        short: "గమ్యం",
        long: "వైకుంఠపాళి.. అదే snake and ladder.. ఆడే ఉంటారుగా! గమ్యం కూడా అంతే. ప్రశ్నలే మీ నిచ్చెన, కానీ ఇక్కడ పాములు ఉండవు, ప్రశ్నలకు మించి fun tasks ఉంటాయి. మీ గమ్యాన్ని చేరటానికి వస్తారు కదా?! సిద్ధంకండి!!!",
      },
      {
        image: "/assets/events/2023/event2.png",
        short: "సాహితీవనం X డ్రమాట్రిక్స్",
        long: "ఎన్నో యాసల సమ్మేళనం మన తెలుగు భాష నిర్మాణం...ప్రతీ యాస విభిన్నమైనదే...ప్రతీ పదం వినసొంపు అయినదే...మా అక్షర '23 లో ఈ నాటక ప్రదర్శన రెండు తెలుగు రాష్ట్రాలు ఒకే చోట ఉన్నట్టు ఉంటుంది. విన్న ప్రతీ పదం వినోదం పంచుతుంది. విచ్చేయండి!!",
      },
      {
        image: "/assets/events/2023/event3.png",
        short: "గీతం సంగీతం",
        long: "మనం తరచూ ఏదో ఒక పాటకు కూని రాగం తీస్తూనే ఉంటాం. అంటే మీకు ఆ పాట తెలిస్తే, దాన్ని పట్టేస్తారు. మరి అలా ఎన్ని పాటలు గుర్తున్నాయో చూద్దామా? అయితే 'గీతం సంగీతం' కి రండి!!",
      },
      {
        image: "/assets/events/2023/event4.png",
        short: "ఇతిహాసం",
        long: "2మన భారతదేశ ఇతిహాసం గురించి తెలిసిందే కదా! ఎంత లోతు వెళ్లినా, ఇంకా తెలుసుకోవాలన్న ఉత్సాహం ఉంటుంది. మీకు మన ఇతిహాసాలపై ఎంత అవగాహన ఉందో తెలుసుకోవాలనుకుంటున్నారా?!... అయితే ఇదే సరైన అవకాశం. రండి, ఇతిహాసాన్ని ఓ పట్టు పట్టేయండి!",
      },
      {
        image: "/assets/events/2023/event5.png",
        short: "సాహితీవనం వారి పాట",
        long: "వేలంపాట గురించి తెలిసిందే కదా.. ఒక వస్తువు మీద అందరూ పోటీ పడతారు. వాళ్ళకి దక్కేంత వరకు వదలరు. మన సాహితీవనం వారి పాట కూడా అంతే. కాకపోతే ఇక్కడ వస్తువు మీద కాకుండా, మీకు ఉన్న జ్ఞానం మీద ఉంటుంది.వచ్చేయండి, పాట పాడేసేయండి మరి.. అదే.. సాహితీవనం వారి పాట!! 🔔",
      },
      {
        image: "/assets/events/2023/event6.png",
        short: "కవితా పటిమ",
        long: "మీ సాహిత్యాన్ని ప్రదర్శించాలని అనుకునేవారికి, మా కవితపటిమ స్వాగతం పలుకుతోంది. కవిత్వం అనేది సరస్వతి కటాక్షం ఉంటే వస్తుందని పెద్దవారి భావన. మరి అంతటి గొప్ప కళ మీలో ఉందనుకుంటే ఈ అవకాశాన్ని వదులుకోకండి. మా కవితాపటిమకి వస్తారని ఆశిస్తున్నాము.",
      },
      {
        image: "/assets/events/2023/event7.png",
        short: "పుస్తక ప్రదర్శన",
        long: "ఒక మంచి పుస్తకం మీతో ఉంటే వంద మంది స్నేహితులు మీతో ఉన్నట్టే. సాహిత్యం, విజ్ఞానం, శాస్త్రం, చరిత్ర, సృజనాత్మకత రచనలు, కవిత్వం, నవలలు ఇంకా ఎన్నో. ఈ పుస్తక ప్రదర్శన విజ్ఞాన వేదిక....రండి పాల్గొనండి జ్ఞాన పయనం లో మీరు పాలుపంచుకోండి.",
      },
      {
        image: "/assets/events/2023/event8.png",
        short: "ఆటవిడుపు",
        long: "ఆటవిడుపు సాహిత్యం మరియు విజ్ఞానం నుంచి చిన్న విరామం తీసుకుని, మీకు వినోదాన్ని అందించాలన్న ఉద్దేశంతో పుట్టిన కార్యక్రమం. రకరకాల ఆటలు, భాషా సవాళ్ళు, మరియు మరెన్నో వినోదాత్మక కార్యక్రమాలతో మేము సిద్ధంగా ఉన్నాము! సరదాగా ఆడడానికి, సవాళ్ళను ఎదుర్కొనడానికి సిద్ధంగా ఉండండి!",
      },
      {
        image: "/assets/events/2023/last.png",
        short: "ముగింపు వేడుక",
        long: "ముగింపు వేడుక",
      },
    ],
    "2022": [
      {
        image: "/assets/events/2022/guest1.png",
        short: "ముఖ్య అతిథి - అజయ్ (ఏయ్ జూడ్)",
        long:  "ముఖ్య అతిథి - అజయ్ (ఏయ్ జూడ్)",
      },
      {
        image: "/assets/events/2022/event1.png",
        short: "కవితా పటిమ",
        long: "కవితా పటిమ",
      },
      {
        image: "/assets/events/2022/event2.png",
        short: "రంగస్థలం",
        long: "సాహితీవనం X డ్రమాట్రిక్స్",
      },
      {
        image: "/assets/events/2022/event3.png",
        short: "ఇతిహాసం",
        long: "ఇతిహాసం",
      },
      {
        image: "/assets/events/2022/event4.png",
        short: "రారండోయ్ వంటలు చేద్దాం",
        long: "రారండోయ్ వంటలు చేద్దాం",
      },
      {
        image: "/assets/events/2022/event5.png",
        short: "వర్ణన",
        long: "వర్ణన",
      },
      {
        image: "/assets/events/2022/event6.png",
        short: "డిజిటల్ మాధ్యమాలలో తెలుగు",
        long: "డిజిటల్ మాధ్యమాలలో తెలుగు",
      },
      {
        image: "/assets/events/2022/event7.png",
        short: "సృజనాత్మక రచన",
        long: "సృజనాత్మక రచన",
      },
      {
        image: "/assets/events/2022/event8.png",
        short: "పుస్తక ప్రదర్శన",
        long: "ఒక మంచి పుస్తకం మీతో ఉంటే వంద మంది స్నేహితులు మీతో ఉన్నట్టే. సాహిత్యం, విజ్ఞానం, శాస్త్రం, చరిత్ర, సృజనాత్మకత రచనలు, కవిత్వం, నవలలు ఇంకా ఎన్నో. ఈ పుస్తక ప్రదర్శన విజ్ఞాన వేదిక....రండి పాల్గొనండి జ్ఞాన పయనం లో మీరు పాలుపంచుకోండి.",
      },
      {
        image: "/assets/events/2022/event9.png",
        short: "సాహితీవనం వారి పాట",
        long: "సాహితీవనం వారి పాట",
      },
      {
        image: "/assets/events/2022/last.png",
        short: "ముగింపు వేడుక",
        long: "ముగింపు వేడుక",
      },

    ],
  };

  const handleReadMore = (event) => {   
    setModalEvent(event);
    setModalOpen(true);
  };

  const renderEventContent = () => {
    const events = yearlyEventData[selectedYear];
    if (!events || events.length === 0) {
      return (
        <p className="text-center py-10" style={{ color: '#811414' }}>
          No events found for {selectedYear}.
        </p>
      );
    }
    return (
      <>
        <div className="flex justify-center gap-6 mb-6">
  <div
    className="rounded-xl p-5 overflow-hidden flex flex-col items-center"
    style={{
      backgroundColor: '#fbeee1',
      boxShadow: '0 4px 8px rgba(129, 20, 20, 0.6)',
      maxWidth: '400px'
    }}
  >
    <img
      src={`/assets/events/${selectedYear}/mainposter.png`}
      alt={`Akshara ${selectedYear}`}
      className="w-full h-auto object-contain"
    />
    <div className="w-full flex justify-center py-4">
      <button
        className="px-6 py-2 bg-red-700 text-white font-semibold rounded-lg hover:bg-red-800 transition"
      >
        <a 
        href = "https://lnk.bio/vjsv_akshara25"
        target="_blank"
        style={{textDecoration: 'none' }} >
        Register Now</a> 
      </button>
    </div>
  </div>
</div>
        <div className="flex flex-wrap justify-center gap-6">
          {events.map((event, i) => (
            <div
              key={i}
              className="rounded-xl p-4 w-full sm:w-[45%] lg:w-[30%] transform transition-transform duration-300 hover:scale-105"
              style={{
                backgroundColor: '#fbeee1',
                boxShadow: '0 4px 8px rgba(129, 20, 20, 0.6)'
              }}
            >
              <img
                src={event.image}
                alt={`Event ${i + 1}`}
                className="w-full object-contain rounded-md mb-4"
              />
              <p className="mb-2 font-bold text-xl" style={{ color: '#811414' }}>
                {event.short}
              </p>
              <div className="flex justify-end w-full">
                {selectedYear === '2025' ? (
                  <a
                    href={event.registerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer font-semibold text-right"
                    style={{ color: '#a55757', textDecoration: 'none' }}
                  >
                  Register here
                  </a>
                ) : (
                  event.long && (
                    <button
                      onClick={() => handleReadMore(event)}
                      className="cursor-pointer font-semibold text-right px-4 py-2 rounded hover:opacity-80"
                      style={{ color: '#a55757', background: 'none', border: 'none' }}
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
      src="/assets/aksharalogo_cropped.png"
      alt="Akshara Festival Logo"
      style={{ width: '460px', height: 'auto', marginBottom: '0' }}
    />
    <h1 className="text-4xl md:text-5xl font-bold mt-0">
      అతిపెద్ద తెలుగు సాహిత్య వేడుక - అక్షర
    </h1>
    <br></br>
    <p className="mt-0 text-xl font-bold" style={{ color: '#6c2121ff' }}>
      {selectedYear}
    </p>
    </section>
      <section className="text-center px-4 pt-0 pb-4">
        <p className="text-2xl max-w-xl mx-auto font-bold" style={{ color: '#6c2121ff' }}>
        29th ఆగస్టు నుంచి 9th సెప్టెంబరు వరకు
        </p>
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
      <br></br>
      <Footer />
    </div>
  );
};

export default Akshara;
