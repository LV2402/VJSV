import React, { useState, useEffect, useRef } from "react";
import { Eye, History, Target, Users, Calendar, BookOpen } from "lucide-react";

const infoBoxes = [
  {
    icon: <Eye className="w-6 h-6 text-blue-600" aria-hidden="true" />,
    title: "మా దృష్టి",
    description:
      "భాషలోని మాధుర్యం ఆస్వాదించడం నుంచి మాటల వెనుక దాగున్న మన భావోద్వేగాల లోతు తెలుసుకునేవరకూ - తెలుగు ఒక భావన, ఒక అనుభూతి. భాషను మెరుగ్గా అర్థం చేసుకోవడం మొదలుపెట్టి, మన రచయితల ప్రబంధాలు, సాహిత్య శైలులు గుర్తించి భాషతో ఉండే బంధాన్ని బలపరిచే నందనవనం - విజ్ఞానజ్యోతి సాహితీవనం  ",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    icon: <History className="w-6 h-6 text-amber-600" aria-hidden="true" />,
    title: "చరిత్ర & మూలం",
    description:
      "2013 వ సంవత్సరంలో స్థాపితమై, విద్యార్థులూ, ఉపాధ్యాయులు, వివిధ రంగాల్లో స్థిరపడ్డ తెలుగు భాషా ప్రియులు సహా మూడు వందల పైచిలుకు సభ్యుల సహకారంతో విజ్ఞానజ్యోతి సాహితీవనం రూపుదిద్దుకుంది. ఇటీవలే తన పది సంవత్సరాల ప్రయాణాన్ని గర్వంగా పూర్తిచేసుకుంది.",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: <Target className="w-6 h-6 text-emerald-600" aria-hidden="true" />,
    title: "మా లక్ష్యం",
    description:
      "నేటి సమాజానికి మాతృభాష ప్రాధాన్యతను, అందులోని మాధుర్యాన్ని తెలుపడంతో పాటు సంస్కృతి, సాహిత్యం మరియు సాంకేతికతకు వారధిగా తెలుగు స్థానాన్ని సుస్థిరం చేసే దిశగా అడుగులు కదపడమే విజ్ఞానజ్యోతి సాహితీవనం లక్ష్యం.",
    gradient: "from-emerald-500 to-teal-600",
  },
];

const stats = [
  {
    icon: <Users className="w-6 h-6 text-white" aria-hidden="true" />,
    value: "300+",
    label: "సభ్యులు",
    bg: "bg-gradient-to-br from-pink-500 to-rose-600",
  },
  {
    icon: <Calendar className="w-6 h-6 text-white" aria-hidden="true" />,
    value: "50+",
    label: "కార్యక్రమాలు",
    bg: "bg-gradient-to-br from-indigo-500 to-purple-600",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-white" aria-hidden="true" />,
    value: "10+",
    label: "ఏళ్ళ వారసత్వం",
    bg: "bg-gradient-to-br from-cyan-500 to-blue-600",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-white" aria-hidden="true" />,
    value: "8+",
    label: "ఆచార్యులు",
    bg: "bg-gradient-to-br from-violet-500 to-purple-600",
  },
];

function Boxes() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [visibleBoxes, setVisibleBoxes] = useState<boolean[]>(
    Array(infoBoxes.length).fill(false)
  );
  const [visibleStats, setVisibleStats] = useState<boolean[]>(
    Array(stats.length).fill(false)
  );

  const headerRef = useRef<HTMLDivElement>(null);
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === headerRef.current) {
            setIsHeaderVisible(entry.isIntersecting);
          } else if (entry.target === statsRef.current) {
            if (entry.isIntersecting) {
              // Animate stats with stagger
              stats.forEach((_, i) => {
                const t = setTimeout(() => {
                  setVisibleStats((prev) => {
                    const newState = [...prev];
                    newState[i] = true;
                    return newState;
                  });
                }, i * 200);
                timeouts.push(t);
              });
            }
          } else {
            // Handle box animations
            boxRefs.current.forEach((ref, i) => {
              if (entry.target === ref && entry.isIntersecting) {
                const t = setTimeout(() => {
                  setVisibleBoxes((prev) => {
                    const newState = [...prev];
                    newState[i] = true;
                    return newState;
                  });
                }, 200);
                timeouts.push(t);
              }
            });
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    if (statsRef.current) observer.observe(statsRef.current);
    boxRefs.current.forEach((ref) => ref && observer.observe(ref));

    // Initial animation trigger
    const initialTimeout = setTimeout(() => setIsHeaderVisible(true), 300);
    timeouts.push(initialTimeout);

    return () => {
      observer.disconnect();
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <section className="relative py-16 overflow-hidden ">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-24 h-24 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-[floatSlow_8s_ease-in-out_infinite]"></div>
        <div className="absolute top-32 right-16 w-20 h-20 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-[floatSlow_10s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute bottom-16 left-1/4 w-22 h-22 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-[floatSlow_12s_ease-in-out_infinite]"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-[drift_15s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-[drift_18s_ease-in-out_infinite_reverse]"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 transform transition-all duration-1200 ease-out ${
            isHeaderVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4 animate-[textShimmer_3s_ease-in-out_infinite]">
            మా గురించి
          </h2>
          <p
            className={`text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium transform transition-all duration-1000 ease-out ${
              isHeaderVisible ? "delay-300" : ""
            }`}
          >
            తెలుగు సాహిత్య అభివృద్ధి పథంలో విజ్ఞానజ్యోతి సాహితీవనం చేసిన
            ప్రయాణం
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-12 mb-16">
          {infoBoxes.map((box, i) => (
            <div
              key={i}
              ref={(el) => (boxRefs.current[i] = el)}
              className={`flex items-start gap-8 ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Circle */}
              <div className="hidden lg:flex flex-col items-center flex-shrink-0">
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${box.gradient} rounded-full flex items-center justify-center shadow-xl transform transition-all duration-800 ease-out ${
                    visibleBoxes[i]
                      ? "scale-100 rotate-0 opacity-100"
                      : "scale-75 rotate-45 opacity-0"
                  } hover:scale-110 hover:shadow-2xl`}
                >
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center transform transition-all duration-300 hover:scale-95">
                    <div
                      className={`w-8 h-8 transform transition-all duration-500 ${
                        visibleBoxes[i] ? "rotate-0" : "rotate-180"
                      }`}
                    >
                      {box.icon}
                    </div>
                  </div>
                </div>
                {i < infoBoxes.length - 1 && (
                  <div
                    className={`w-1 h-24 bg-gradient-to-b from-gray-300 to-gray-100 mt-6 rounded-full transform transition-all duration-1000 ease-out ${
                      visibleBoxes[i]
                        ? "scale-y-100 opacity-100"
                        : "scale-y-0 opacity-0"
                    }`}
                    style={{ transformOrigin: "top" }}
                  ></div>
                )}
              </div>

              {/* Timeline Content */}
              <div
                className={`flex-1 bg-white/95 backdrop-blur-sm border border-white/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-700 group hover:scale-[1.01] transform ${
                  visibleBoxes[i]
                    ? "translate-x-0 opacity-100"
                    : i % 2 === 0
                    ? "translate-x-8 opacity-0"
                    : "-translate-x-8 opacity-0"
                }`}
              >
                {/* Mobile Icon */}
                <div className="lg:hidden mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${box.gradient} rounded-xl flex items-center justify-center shadow-lg transform transition-all duration-600 ${
                      visibleBoxes[i]
                        ? "scale-100 rotate-0"
                        : "scale-75 rotate-45"
                    }`}
                  >
                    <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center">
                      <div className="w-8 h-8">{box.icon}</div>
                    </div>
                  </div>
                </div>

                {/* Gradient Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${box.gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                <div className="relative">
                  <h3
                    className={`text-2xl md:text-3xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-all duration-500 transform ${
                      visibleBoxes[i]
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }`}
                    style={{ transitionDelay: "200ms" }}
                  >
                    {box.title}
                  </h3>
                  <p
                    className={`text-gray-600 leading-relaxed text-lg md:text-xl group-hover:text-gray-700 transition-all duration-500 transform ${
                      visibleBoxes[i]
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }`}
                    style={{ transitionDelay: "400ms" }}
                  >
                    {box.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="relative" ref={statsRef}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-500 transform ${
                  visibleStats[i]
                    ? "translate-y-0 opacity-100 scale-100"
                    : "translate-y-8 opacity-0 scale-95"
                } hover:scale-[1.02]`}
              >
                <div
                  className={`${stat.bg} p-6 text-center relative overflow-hidden`}
                >
                  {/* Background Blobs */}
                  <div className="absolute top-0 right-0 w-12 h-12 bg-white/8 rounded-full -translate-y-6 translate-x-6 animate-[float_6s_ease-in-out_infinite]"></div>
                  <div className="absolute bottom-0 left-0 w-10 h-10 bg-white/8 rounded-full translate-y-5 -translate-x-5 animate-[float_8s_ease-in-out_infinite_reverse]"></div>

                  {/* Shimmer */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ${
                      visibleStats[i] ? "animate-[shimmer_2s_ease-out]" : ""
                    }`}
                  ></div>

                  <div className="relative z-10 space-y-2">
                    <div
                      className={`w-12 h-12 mx-auto bg-white/15 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 transform ${
                        visibleStats[i]
                          ? "scale-100 rotate-0"
                          : "scale-75 rotate-45"
                      }`}
                    >
                      {stat.icon}
                    </div>

                    <div
                      className={`text-3xl md:text-4xl font-bold text-white drop-shadow-sm transform transition-all duration-600 ${
                        visibleStats[i] ? "scale-100" : "scale-75"
                      }`}
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      {visibleStats[i] && (
                        <CountUpAnimation
                          end={parseInt(stat.value.replace(/\D/g, ""))}
                          suffix={stat.value.replace(/\d/g, "")}
                          duration={1000}
                          delay={i * 200}
                        />
                      )}
                    </div>

                    <div
                      className={`text-white/95 font-medium text-base md:text-lg transform transition-all duration-500 ${
                        visibleStats[i]
                          ? "translate-y-0 opacity-100"
                          : "translate-y-2 opacity-0"
                      }`}
                      style={{ transitionDelay: `${i * 100 + 300}ms` }}
                    >
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-15px) translateX(10px); }
          50% { transform: translateY(8px) translateX(-8px); }
          75% { transform: translateY(-10px) translateX(15px); }
        }
        
        @keyframes drift {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          33% { transform: translateX(30px) translateY(-20px); }
          66% { transform: translateX(-20px) translateY(25px); }
        }
        
        @keyframes textShimmer {
          0%, 100% { background-position: -200% center; }
          50% { background-position: 200% center; }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-10px) translateX(5px); }
        }
      `}</style>
    </section>
  );
}

// Counter Animation
const CountUpAnimation: React.FC<{
  end: number;
  suffix: string;
  duration: number;
  delay: number;
}> = ({ end, suffix, duration, delay }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      let startTime: number | null = null;
      const animate = (timestamp: number) => {
        if (startTime === null) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);

        const easeOut = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(easeOut * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timer);
  }, [end, duration, delay]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

export default Boxes;
