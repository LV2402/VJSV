import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, TreePine, Users, Calendar, Leaf, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-nature-tree.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Lush Green Nature Tree" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/75 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full animate-sway">
                <TreePine className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">Rooted in Nature • Growing Together</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-hero-gradient bg-clip-text text-transparent animate-grow">
                  Vignana Jyothi
                </span>
                <br />
                <span className="text-foreground">Sahithi Vanam</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                Where words take root like ancient trees, growing into forests of wisdom and creativity that nurture minds for generations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-hero-gradient hover:opacity-90 transition-smooth shadow-organic hover:shadow-glow group"
              >
                <Link to="/about" className="flex items-center space-x-2">
                  <span>Explore Our Roots</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth shadow-elegant hover:shadow-organic"
              >
                <Link to="/events" className="flex items-center space-x-2">
                  <Leaf className="w-4 h-4" />
                  <span>View Events</span>
                </Link>
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
          <div className="relative animate-sway">
            <div className="relative">
              <div className="absolute inset-0 bg-forest-gradient rounded-3xl opacity-15 blur-xl animate-glow-pulse" />
              <div className="relative bg-card/90 backdrop-blur-md rounded-3xl p-8 border border-border shadow-organic hover:shadow-glow transition-all duration-500">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-grow">
                      <TreePine className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">VJSV</h3>
                    <p className="text-muted-foreground">Literary Forest • Where Words Grow</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 group">
                      <div className="w-3 h-3 bg-primary rounded-full animate-pulse group-hover:scale-125 transition-transform" />
                      <span className="text-sm group-hover:text-primary transition-colors">Poetry & Creative Writing</span>
                    </div>
                    <div className="flex items-center space-x-3 group">
                      <div className="w-3 h-3 bg-accent rounded-full animate-pulse group-hover:scale-125 transition-transform" style={{ animationDelay: '0.2s' }} />
                      <span className="text-sm group-hover:text-accent transition-colors">Cultural Events & Workshops</span>
                    </div>
                    <div className="flex items-center space-x-3 group">
                      <div className="w-3 h-3 bg-secondary rounded-full animate-pulse group-hover:scale-125 transition-transform" style={{ animationDelay: '0.4s' }} />
                      <span className="text-sm group-hover:text-secondary transition-colors">Literary Discussions</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground text-center italic">
                      "Like trees in a forest, we grow stronger together"
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