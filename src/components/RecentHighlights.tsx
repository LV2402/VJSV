import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Calendar, MapPin, Users } from "lucide-react";
import { useState } from "react";
import eventsImage from "@/assets/events-culture.jpg";
import communityImage from "@/assets/community-writers.jpg";

const highlights = [
  {
    id: 1,
    title: "Akshara 2024 Grand Finale",
    description: "Our flagship literary festival concluded with tremendous success, featuring poetry competitions, storytelling sessions, and cultural performances.",
    date: "March 15, 2024",
    location: "VNRVJIET Auditorium",
    attendees: "500+",
    image: eventsImage,
    category: "Festival"
  },
  {
    id: 2,
    title: "Telugu Poetry Workshop",
    description: "An intensive workshop on traditional and modern Telugu poetry forms, conducted by renowned poets from the region.",
    date: "February 28, 2024",
    location: "Literary Hall",
    attendees: "80+",
    image: communityImage,
    category: "Workshop"
  },
  {
    id: 3,
    title: "Sintilatunz Writing Competition",
    description: "Students showcased their creativity through essays, short stories, and poetry in this inter-college competition.",
    date: "January 20, 2024",
    location: "Multi-purpose Hall",
    attendees: "200+",
    image: eventsImage,
    category: "Competition"
  },
  {
    id: 4,
    title: "Literature Discussion Series",
    description: "Monthly book discussions featuring contemporary Telugu literature and classic works by legendary authors.",
    date: "Ongoing",
    location: "Reading Room",
    attendees: "30+",
    image: communityImage,
    category: "Series"
  }
];

const RecentHighlights = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;
  const maxIndex = Math.max(0, highlights.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="py-16 bg-culture-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Recent <span className="bg-hero-gradient bg-clip-text text-transparent">Highlights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our latest events, workshops, and literary achievements that showcase the vibrant spirit of Telugu literature at VJSV.
          </p>
        </div>

        {/* Carousel Controls */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={prevSlide}
              className="hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={nextSlide}
              className="hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="text-sm text-muted-foreground">
            {currentIndex + 1} - {Math.min(currentIndex + itemsPerView, highlights.length)} of {highlights.length}
          </div>
        </div>

        {/* Highlights Cards */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
          >
            {highlights.map((highlight) => (
              <div 
                key={highlight.id} 
                className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
              >
                <Card className="group hover:shadow-warm transition-smooth border-border bg-card/80 backdrop-blur-sm h-full">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={highlight.image} 
                      alt={highlight.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                        {highlight.category}
                      </span>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                      {highlight.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {highlight.description}
                    </p>
                    
                    <div className="space-y-2 pt-2">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{highlight.date}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{highlight.location}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>{highlight.attendees} participants</span>
                      </div>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full mt-4 hover:bg-primary hover:text-primary-foreground transition-smooth"
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary scale-125' 
                  : 'bg-muted hover:bg-muted-foreground'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentHighlights;