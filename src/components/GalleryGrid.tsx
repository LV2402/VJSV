import { useState } from "react";
import { Heart, Share2, Download, Users, Code, Lightbulb, TreePine, Monitor, Presentation } from "lucide-react";

const GalleryGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const galleryItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800",
      title: "Nature Workshop",
      description: "Environmental awareness session in the campus gardens",
      category: "Workshop",
      icon: TreePine,
      likes: 42,
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800",
      title: "Green Innovation Summit",
      description: "Annual sustainability and technology conference",
      category: "Event",
      icon: Lightbulb,
      likes: 68,
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
      title: "Collaborative Coding",
      description: "Team programming session for eco-friendly apps",
      category: "Tech Session",
      icon: Code,
      likes: 35,
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800",
      title: "Digital Display Setup",
      description: "Setting up interactive displays for Earth Day",
      category: "Teamwork",
      icon: Monitor,
      likes: 53,
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800",
      title: "Java Programming Workshop",
      description: "Building sustainable software solutions",
      category: "Tech Session",
      icon: Code,
      likes: 29,
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
      title: "Team Planning Session",
      description: "Strategic planning for upcoming green initiatives",
      category: "Teamwork",
      icon: Users,
      likes: 41,
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800",
      title: "Presentation Skills",
      description: "Learning to present sustainable solutions effectively",
      category: "Workshop",
      icon: Presentation,
      likes: 37,
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
      title: "Innovation Brainstorming",
      description: "Creative session for eco-tech solutions",
      category: "Event",
      icon: Lightbulb,
      likes: 56,
    }
  ];

  return (
    <section className="py-16 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Club <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our vibrant community through moments of innovation, collaboration, 
            and environmental consciousness. Every image tells a story of growth and impact.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {["All", "Workshop", "Tech Session", "Event", "Teamwork"].map((category) => (
              <button
                key={category}
                className="px-6 py-2 bg-card border border-gallery-border rounded-full 
                         text-muted-foreground hover:text-primary hover:border-primary 
                         hover:bg-gallery-hover transition-all duration-300 
                         hover:shadow-soft"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="group relative bg-card rounded-2xl overflow-hidden shadow-soft 
                         hover:shadow-large transition-all duration-500 hover:-translate-y-2
                         border border-gallery-border hover:border-primary/30"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 
                             group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-gallery-overlay/80 
                                 via-gallery-overlay/20 to-transparent transition-opacity 
                                 duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                    
                    {/* Action Buttons */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                      <button className="p-2 bg-primary-foreground/90 rounded-full shadow-medium 
                                       hover:bg-primary-foreground hover:scale-110 transition-all 
                                       duration-200 group/btn">
                        <Heart className="h-4 w-4 text-primary group-hover/btn:text-accent" />
                      </button>
                      <button className="p-2 bg-primary-foreground/90 rounded-full shadow-medium 
                                       hover:bg-primary-foreground hover:scale-110 transition-all 
                                       duration-200 group/btn">
                        <Share2 className="h-4 w-4 text-primary group-hover/btn:text-accent" />
                      </button>
                      <button className="p-2 bg-primary-foreground/90 rounded-full shadow-medium 
                                       hover:bg-primary-foreground hover:scale-110 transition-all 
                                       duration-200 group/btn">
                        <Download className="h-4 w-4 text-primary group-hover/btn:text-accent" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-1.5 bg-primary/10 rounded-lg">
                      <IconComponent className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-xs font-medium text-primary bg-primary/10 
                                   px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>

                  {/* Title and Description */}
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary 
                               transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Heart className="h-4 w-4" />
                      <span className="text-sm">{item.likes}</span>
                    </div>
                    <button className="text-xs text-primary hover:text-accent 
                                     font-medium transition-colors duration-200">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-primary text-primary-foreground px-8 py-3 
                           rounded-full font-medium hover:shadow-glow transition-all 
                           duration-300 hover:scale-105">
            Load More Images
          </button>
        </div>
      </div>
    </section>
  );
};

export default GalleryGrid;