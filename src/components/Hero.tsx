import React, { useState, useEffect } from "react";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center text-center font-telugu overflow-hidden">
      {/* Background Image with Ken Burns Effect */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/akshara.jpg"
          alt="VJSV Group"
          className="w-full h-full object-cover md:object-center transform scale-105 animate-[kenBurns_20s_ease-in-out_infinite_alternate] mt-16"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 animate-[fadeIn_1.5s_ease-out]" />
      </div>

      {/* Floating Particles Background */}
      <div className="absolute inset-0 z-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-[float_6s_ease-in-out_infinite]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Content with Staggered Animations */}
      <div className="relative z-10 max-w-4xl px-4 sm:px-6">
        <h1 
          className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-2xl leading-tight transform transition-all duration-1000 ease-out ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-12 opacity-0'
          }`}
        >
          <span className="inline-block animate-[slideInUp_0.8s_ease-out_0.3s_both]">విజ్ఞానజ్యోతి</span>{" "}
          <span className="inline-block animate-[slideInUp_0.8s_ease-out_0.6s_both]">సాహితీవనం</span>
        </h1>
        
        <p 
          className={`mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 font-medium leading-relaxed transform transition-all duration-1000 ease-out delay-500 ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'
          }`}
        >
          <span className="inline-block animate-[fadeInUp_1s_ease-out_0.9s_both]">తెలుగు సాహిత్యం</span>
          <span className="inline-block mx-2 animate-[pulse_2s_ease-in-out_infinite]">·</span>
          <span className="inline-block animate-[fadeInUp_1s_ease-out_1.1s_both]">సంస్కృతి</span>
        </p>
        
        {/* Mobile readability section with slide-in animation */}
        <div className="mt-8 sm:hidden">
          <div 
            className={`inline-block bg-black/30 backdrop-blur-sm rounded-lg px-6 py-3 transform transition-all duration-800 ease-out delay-1000 ${
              isVisible 
                ? 'translate-y-0 opacity-100 scale-100' 
                : 'translate-y-4 opacity-0 scale-95'
            }`}
          >
            <p className="text-sm text-gray-200">
              సాహిత్య సేవలో మా ప్రయాణం
            </p>
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center animate-[bounce_2s_infinite]">
          <div className="w-1 h-8 bg-white/50 rounded-full animate-[grow_2s_ease-in-out_infinite]"></div>
          <div className="w-2 h-2 bg-white/70 rounded-full mt-2 animate-[pulse_2s_ease-in-out_infinite_0.5s]"></div>
        </div>
      </div>

      {/* Decorative animated border elements */}
      <div className="absolute top-20 left-4 w-12 h-12 border-2 border-white/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
      <div className="absolute top-32 right-8 w-8 h-8 border border-white/20 rotate-45 animate-[pulse_3s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-20 left-8 w-6 h-6 bg-white/20 rounded-full animate-[float_4s_ease-in-out_infinite]"></div>

      <style>{`
        @keyframes kenBurns {
          0% { transform: scale(1.05) translateX(0px) translateY(0px); }
          100% { transform: scale(1.1) translateX(-10px) translateY(-5px); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-10px) translateX(5px); }
          50% { transform: translateY(5px) translateX(-5px); }
          75% { transform: translateY(-5px) translateX(10px); }
        }
        
        @keyframes grow {
          0%, 100% { height: 2rem; opacity: 0.5; }
          50% { height: 2.5rem; opacity: 0.8; }
        }
      `}</style>
    </section>
  );
};

export default Hero;