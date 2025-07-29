import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Calendar } from "lucide-react";
// import heroImage from "@/assets/hero-literature.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/hero-literature.jpg"
          alt="Telugu Literature Heritage" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
                <BookOpen className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">VNRVJIET Literary Society</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-hero-gradient bg-clip-text text-transparent text-center">
                  Vignana Jyothi
                </span>
                <br />
                <span className="text-foreground">Sahithi Vanam</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed text-center">
                వ్రాతపనిలో వేదనలు, భావాలలో భావనలు - Where Telugu literature blooms and young minds discover the power of words.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center space-y-2 animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">200+</div>
                <div className="text-sm text-muted-foreground">Active Members</div>
              </div>
              
              <div className="text-center space-y-2 animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Calendar className="w-6 h-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Events Hosted</div>
              </div>
              
              <div className="text-center space-y-2 animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <BookOpen className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-foreground">5+</div>
                <div className="text-sm text-muted-foreground">Years Strong</div>
              </div>

              <div className="text-center space-y-2 animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <BookOpen className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-foreground">5+</div>
                <div className="text-sm text-muted-foreground">Faculty</div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;