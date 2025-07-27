import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-literature.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
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
                <span className="bg-hero-gradient bg-clip-text text-transparent">
                  Vignana Jyothi
                </span>
                <br />
                <span className="text-foreground">Sahithi Vanam</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                వ్రాతపనిలో వేదనలు, భావాలలో భావనలు - Where Telugu literature blooms and young minds discover the power of words.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-hero-gradient hover:opacity-90 transition-smooth shadow-warm hover:shadow-glow animate-glow-pulse"
              >
                <Link to="/about" className="flex items-center space-x-2">
                  <span>Explore Our Journey</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <Link to="/events">View Events</Link>
              </Button>
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
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-hero-gradient rounded-3xl opacity-20 blur-xl animate-glow-pulse" />
              <div className="relative bg-card/80 backdrop-blur-md rounded-3xl p-8 border border-border shadow-elegant">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-2">VJSV</h3>
                    <p className="text-muted-foreground">Telugu Literature Club</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                      <span className="text-sm">Poetry & Creative Writing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                      <span className="text-sm">Cultural Events & Workshops</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                      <span className="text-sm">Literary Discussions</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground text-center">
                      "సాహిత్యం సంస్కృతి సంరక్షణకు"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;