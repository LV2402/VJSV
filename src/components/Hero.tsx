import { BookOpen, Users, Calendar } from "lucide-react";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          // src="/assets/hero-literature.jpg"
          alt="Telugu Literature Heritage"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
          {/* Right: Logo (with blend effect) */}
          <div className="flex-shrink-0">
            <img
              src="/assets/vjsvlogo.png"
              alt="VJSV Club Logo"
              className="w-72 h-72 object-contain opacity-70 mix-blend-lighten drop-shadow-md"
            />
          </div>

          {/* Left: Title + Stats */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(to right, #d02d66, #f06292)",
                    WebkitBackgroundClip: "text",
                  }}
                >
                  విజ్ఞానజ్యోతి
                </span>
                <span className="block mt-4 text-[color:#d02d66]">
                  సాహితీవనం
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                వ్రాతపనిలో వేదనలు, భావాలలో భావనలు - Where Telugu literature blooms and young minds discover the power of words.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-10 pt-8 border-t border-border">
              <StatBox
                icon={<Users className="w-6 h-6" style={{ color: "#d02d66" }} />}
                bg="--primary"
                value="200+"
                label="Active Members"
                delay="0.2s"
              />
              <StatBox
                icon={<Calendar className="w-6 h-6" style={{ color: "#d02d66" }} />}
                bg="--primary"
                value="50+"
                label="Events Hosted"
                delay="0.4s"
              />
              <StatBox
                icon={<BookOpen className="w-6 h-6" style={{ color: "#d02d66" }} />}
                bg="--primary"
                value="5+"
                label="Years Strong"
                delay="0.6s"
              />
              <StatBox
                icon={<BookOpen className="w-6 h-6" style={{ color: "#d02d66" }} />}
                bg="--primary"
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
  bg: string;
}

const StatBox: React.FC<StatBoxProps> = ({ icon, value, label, delay, bg }) => (
  <div
    className="text-center space-y-2 animate-slide-in-right"
    style={{ animationDelay: delay }}
  >
    <div
      className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2"
      style={{ backgroundColor: `hsl(var(${bg}) / 0.1)` }}
    >
      {icon}
    </div>
    <div className="text-2xl font-bold text-[color:#d02d66]">{value}</div>
    <div className="text-sm text-muted-foreground">{label}</div>
  </div>
);

export default Hero;
