import { BookOpen, Users, Calendar } from "lucide-react";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden font-telugu">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/bg1.png"
          alt="Telugu Literature Heritage"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8 lg:gap-12">
          
          {/* Right: Logo */}
          <div className="flex-shrink-0">
            <img
              src="/assets/vjsvlogo.png"
              alt="VJSV Club Logo"
              className="w-48 h-48 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-contain drop-shadow-md"
            />
          </div>

          {/* Left: Title + Stats */}
          <div className="flex flex-col justify-center w-full text-center lg:text-left space-y-10 animate-fade-in">
            
            {/* Title + Tagline */}
            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #811414ff, #d21421e0)",
                    WebkitBackgroundClip: "text",
                  }}
                >
                  విజ్ఞానజ్యోతి
                </span>{" "}
                <span className="text-[#811414ff]">
                  సాహితీవనం
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto lg:mx-0">
                వ్రాతపనిలో వేదనలు, భావాలలో భావనలు - Where Telugu literature blooms
                and young minds discover the power of words.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-6 border-t border-border">
              <StatBox
                icon={<Users className="w-6 h-6" style={{ color: "#191013ff" }} />}
                value="200+"
                label="Active Members"
                delay="0.2s"
              />
              <StatBox
                icon={<Calendar className="w-6 h-6" style={{ color: "#190b10ff" }} />}
                value="50+"
                label="Events Hosted"
                delay="0.4s"
              />
              <StatBox
                icon={<BookOpen className="w-6 h-6" style={{ color: "#1a1416ff" }} />}
                value="5+"
                label="Years Strong"
                delay="0.6s"
              />
              <StatBox
                icon={<BookOpen className="w-6 h-6" style={{ color: "#201519ff" }} />}
                value="5+"
                label="Faculty"
                delay="0.8s"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface StatBoxProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: string;
}

const StatBox: React.FC<StatBoxProps> = ({ icon, value, label, delay }) => (
  <div
    className="text-center space-y-2 animate-slide-in-right"
    style={{ animationDelay: delay }}
  >
    <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2 bg-primary/10">
      {icon}
    </div>
    <div className="text-2xl font-bold text-[#d02d66]">{value}</div>
    <div className="text-sm text-muted-foreground">{label}</div>
  </div>
);

export default Hero;
