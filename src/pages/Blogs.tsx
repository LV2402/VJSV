import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const writings = [
  {
    id: 1,
    title: "గుసగుసలాడే అడవి",
    author: "ప్రియా శర్మ",
    type: "కవిత",
    content: `
      గుసగుసలాడే అడవిలో, నీడలు ఆడుకునే చోట,
      ఒక నిశ్శబ్ద రాగం రోజును పలకరిస్తుంది.
      ప్రాచీన వృక్షాలు తమ కొమ్మలతో ఆకాశాన్ని తాకడానికి ప్రయత్నిస్తాయి.
      అక్కడ వేదన ఒక సరళ గీతంగా మారుతుంది,
      ప్రతి అడుగు ఒక కథను చెప్పుతుంది.
      ఎక్కడో పక్షి కూసిన ఆ శబ్దం,
      ఒక మధురమైన గుర్తుగా మనస్సులో నిలుస్తుంది.
    `,
  },
  {
    id: 2,
    title: "ఒక నక్షత్రం ప్రయాణం",
    author: "రామ్ కుమార్",
    type: "కథ",
    content: `
      ఎలారా, ఒక చిన్న నక్షత్రం, తన నక్షత్రమండలం దాటి ప్రపంచాన్ని చూడాలని కలలు కనేది.
      ఒక రాత్రి, ఒక విశ్వపు గాలి ఆమెను దూరంగా తీసుకుపోయింది.
      నక్షత్ర సముద్రాలను చీల్చుకుంటూ, ఆమె ఒక కొత్త ఆశాజ్యోతి అవుతుంది.
      అజ్ఞాత గమ్యాల వైపు ప్రయాణిస్తూ, ప్రతి కాంతి రేఖ ఆమె ఆశయాల ప్రతిబింబంగా మారింది.
      నక్షత్రాల్లో చెలామణి అయిన అనుభవాలు ఆమెను కొత్త విశ్వాన్ని అవగాహన చేసుకునేలా చేశాయి.
    `,
  },
  {
    id: 3,
    title: "వడగాల్పుల సవ్వడి",
    author: "సంధ్య రావు",
    type: "కవిత",
    content: `
      మొదటి చినుకు, స్వర్గం నుండి రాలిన ఒక చిన్న కన్నీరు,
      ఎండిన భూమిని తాకి, ఒక సున్నితమైన నిట్టూర్పు.
      పులకరించి గంధం లేస్తుంది, ఒక సువాసనతో కూడిన వేడుక.
      నీటి చినుకుల్లో దాగిన జ్ఞాపకాలు మళ్లీ మనసును తడుపుతాయి.
      మేఘాల నడుమ దాగిన వెలుతురు ఒక శాంతమైన అభినందనలా.
    `,
  },
  {
    id: 4,
    title: "కాలపయనం",
    author: "అనురాధ శేఖర్",
    type: "కథ",
    content: `
      గడియారపు టిక్ టిక్... రోజులు పరుగు పెడతాయి.
      చిన్నతనం నుండి ముసలితనం వరకూ ప్రతి క్షణం ఒక సంఘటన.
      కాలం మనం గుర్తు పెట్టుకున్నంత మందగా మారుతుంది,
      కానీ ఏ క్షణమైనా తిరిగి రాదు.
      అదే అందులోని అందం, అదే దుఖం.
    `,
  },
  {
    id: 5,
    title: "ఓ మూల చెట్టు",
    author: "వికాస్",
    type: "కవిత",
    content: `
      వానకాలంలో ఊరికి చివర ఉన్న ఓ మూల చెట్టు,
      చెట్లడల వాలిపోయిన చినుకుల మధ్య నిలిచిన శాంతి.
      పసిపిల్లల నవ్వులు, కుర్చోని చెట్లు విన్న కథలు,
      అందరూ మరచిపోయినా, చెట్టు మాత్రం గుర్తు పెట్టుకుంది.
    `,
  },
  {
    id: 6,
    title: "పెనుగాలికి ఎదురైన నౌక",
    author: "లలిత కృష్ణ",
    type: "కథ",
    content: `
      ఒక చిన్న నౌక, ఆకాశాన్ని గెలుచుకుంటూ సాగుతుంది.
      దారిలో తుపానులు, అలల దెబ్బలు.
      కానీ నౌక వంగలేదు. ఎందుకంటే ఆమెకు విశ్వాసం ఉంది.
      విశ్వాసం – తన నావికుడిపై, తన లక్ష్యంపై, తన ప్రయాణంపై.
    `,
  },
  {
    id: 7,
    title: "తల్లిదండ్రుల మౌన పాట",
    author: "నిర్మల శ్రీధర్",
    type: "కవిత",
    content: `
      వారు మాటలకంటే ముందే అర్థమవుతారు,
      వారు కన్నీటిని ముసిపెట్టి ముద్దులు ఇస్తారు.
      వారు చెప్పేది కన్నా చేయేదే ఎక్కువ.
      ఆ మౌనపు ప్రేమ కవిత్వమవుతుంది మన హృదయంలో.
    `,
  },
  {
    id: 8,
    title: "చిలుక కథలు",
    author: "రాజేష్ మాలకొండయ్య",
    type: "కథ",
    content: `
      చిన్న గ్రామంలో, ఒక బుడతడు రోజూ ఒకే చెట్టుకు వెళుతాడు.
      అక్కడ ఒక చిలుక ఉంటుంది. అది అతనికి రోజూ ఒక కథ చెప్తుంది.
      మామూలు కథలు కాదు, ఊహలకు రెక్కలిచ్చే కథలు.
      ఓ రోజు బుడతడు అడిగాడు – "ఇవి నిజమేనా?"
      చిలుక నవ్వింది: "నిజం కంటే కలలు గొప్పవే తమ్ముడూ!"
    `,
  },
  {
    id: 9,
    title: "చీకటి లోని వెలుగు",
    author: "దీపా శిల్పి",
    type: "కవిత",
    content: `
      చీకటి ముసురుతుంది, తారలు మరుగుపడతాయి,
      కానీ అక్కడే చిన్న దీపం వెలుగుతుంది.
      ఆ వెలుగు ఒక్క చీకటిని కాక, మనస్సులోని భయాన్ని కూడా పోగొడుతుంది.
      ప్రతి చీకటి వెనక ఒక వెలుగు ఉందని అది చెబుతుంది.
    `,
  },
];

const Blogs = () => {
  const [selectedWriting, setSelectedWriting] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-24 pb-12">
        <section className="text-center px-6 max-w-5xl mx-auto space-y-6">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            మా సృజనాత్మక రచనలు
          </h1>
          <p className="text-lg text-muted-foreground">
            మా క్లబ్ సభ్యుల కలం నుండి జారిన భావాలు – కవితలు, కథలు, అనుభవాలు.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-rose-400 to-purple-600 mx-auto rounded-full"></div>
        </section>

        <section className="mt-16 px-6 max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {writings.length > 0 ? (
            writings.slice(0, visibleCount).map((writing, index) => (
              <motion.div
                key={writing.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-border p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-semibold bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">
                      {writing.title}
                    </h3>
                    <span className="text-xs font-bold bg-primary text-white px-2 py-1 rounded-full">
                      {writing.type}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">✍️ {writing.author}</p>
                  <p className="mt-4 text-base leading-relaxed line-clamp-4 text-justify">
                    {writing.content.trim()}
                  </p>
                </div>
                <div className="mt-4 text-right">
                  <button
                    onClick={() => setSelectedWriting(writing)}
                    className="text-sm text-blue-600 hover:underline transition"
                  >
                    పూర్తిగా చదవండి →
                  </button>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="col-span-full text-center text-muted-foreground">
              ఇంకా రచనలు లేవు. మీరు మొదటివారిగా రాయవచ్చు!
            </p>
          )}
        </section>

        {/* Load More Button */}
        {visibleCount < writings.length && (
          <div className="text-center mt-10">
            <button
              onClick={handleLoadMore}
              className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/80 transition"
            >
              ఇంకా చూపించు
            </button>
          </div>
        )}
      </main>

      <Footer />

      {/* Modal */}
      {selectedWriting && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm transition-opacity animate-in fade-in"
          onClick={() => setSelectedWriting(null)}
        >
          <div
            className="bg-white dark:bg-zinc-900 text-foreground rounded-xl shadow-lg max-w-xl w-full p-6 m-4 relative animate-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-4 text-gray-500 hover:text-red-600 text-xl font-bold"
              onClick={() => setSelectedWriting(null)}
            >
              ×
            </button>
            <h2 className="text-3xl font-bold mb-2 text-gradient bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
              {selectedWriting.title}
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              ✍️ {selectedWriting.author} | {selectedWriting.type}
            </p>
            <pre className="whitespace-pre-wrap text-base leading-relaxed text-justify">
              {selectedWriting.content.trim()}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;
