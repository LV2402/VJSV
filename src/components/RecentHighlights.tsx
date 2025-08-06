import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
  Users,
} from "lucide-react";
import { useState } from "react";

const highlights = [
  {
    id: 1,
    title: "Akshara 2024 Grand Finale",
    description:
      "Our flagship literary festival concluded with tremendous success, featuring poetry competitions, storytelling sessions, and cultural performances.",
    date: "March 15, 2024",
    location: "VNRVJIET Auditorium",
    attendees: "500+",
    image: "/assets/community-writers.jpg",
    category: "Festival",
  },
  {
    id: 2,
    title: "Telugu Poetry Workshop",
    description:
      "An intensive workshop on traditional and modern Telugu poetry forms, conducted by renowned poets from the region.",
    date: "February 28, 2024",
    location: "Literary Hall",
    attendees: "80+",
    image: "/assets/events-culture.jpg",
    category: "Workshop",
  },
  {
    id: 3,
    title: "Sintilatunz Writing Competition",
    description:
      "Students showcased their creativity through essays, short stories, and poetry in this inter-college competition.",
    date: "January 20, 2024",
    location: "Multi-purpose Hall",
    attendees: "200+",
    image: "/assets/vjsvlogo.jpg",
    category: "Competition",
  },
  {
    id: 4,
    title: "Literature Discussion Series",
    description:
      "Monthly book discussions featuring contemporary Telugu literature and classic works by legendary authors.",
    date: "Ongoing",
    location: "Reading Room",
    attendees: "30+",
    image: "/assets/vjsvlogo.jpg",
    category: "Series",
  },
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
    <section className="py-16 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-4">
  <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
    <span
      className="bg-clip-text text-transparent"
      style={{
        backgroundImage: "linear-gradient(to right, #811414, #d21421)",
        WebkitBackgroundClip: "text",
      }}
    >
      Recent Highlights
    </span>
  </h2>
  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
    Discover our latest events, workshops, and literary achievements
    that showcase the vibrant spirit of Telugu literature at VJSV.
  </p>
</div>


        <div className="relative flex items-center justify-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="absolute left-0 z-10 hover:bg-muted/30 hover:text-primary rounded-full transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <div className="w-full max-w-4xl transition-all duration-500 ease-in-out">
            <Card className="rounded-2xl overflow-hidden shadow-elegant bg-card/80 backdrop-blur border border-border">
              <div className="relative h-96">
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                  <div className="space-y-2">
                    <span className="inline-block bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      {highlight.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white">
                      {highlight.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-white/90 text-sm">
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{highlight.date}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{highlight.location}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {highlight.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{highlight.attendees} participants</span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:bg-primary hover:text-primary-foreground transition-smooth"
                  >
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="absolute right-0 z-10 hover:bg-muted/30 hover:text-primary rounded-full transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

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
