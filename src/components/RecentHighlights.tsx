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
  const totalItems = highlights.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const highlight = highlights[currentIndex];

  return (
    <section className="py-16 bg-culture-gradient">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Recent <span className="bg-hero-gradient bg-clip-text text-transparent">Highlights</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our latest events, workshops, and literary achievements that showcase the vibrant spirit of Telugu literature at VJSV.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center">
          {/* Arrows */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="absolute left-0 z-10 hover:bg-primary hover:text-white rounded-full"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <div className="w-full max-w-4xl transition-all duration-500 ease-in-out">
            <Card className="rounded-2xl overflow-hidden shadow-lg bg-card/80 backdrop-blur border border-border">
              <div className="relative">
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="w-full h-48 object-cover" // reduced height
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {highlight.category}
                  </span>
                </div>
              </div>

              <CardContent className="p-8 space-y-4"> {/* Increased padding */}
                <h3 className="text-2xl font-bold text-foreground">
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

          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="absolute right-0 z-10 hover:bg-primary hover:text-white rounded-full"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {highlights.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary scale-125"
                  : "bg-muted hover:bg-muted-foreground"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentHighlights;
