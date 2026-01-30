// Tell TypeScript about window.instgrm
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

import { useEffect, useRef, useState } from "react";
import { fetchAdminList } from "@/lib/adminApi";

const RecentHighlights = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollSpeed = 0.5;
  const [isHovering, setIsHovering] = useState(false);
  const animationRef = useRef<number | null>(null);
  const [instagramLinks, setInstagramLinks] = useState<string[]>([]);

  // Load Instagram embed script once
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    fetchAdminList<{ url: string }[]>("highlights", []).then((data) => {
      setInstagramLinks(data.map((item) => item.url));
    });
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      fetchAdminList<{ url: string }[]>("highlights", []).then((data) => {
        setInstagramLinks(data.map((item) => item.url));
      });
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [instagramLinks]);

  // Continuous scrolling
  useEffect(() => {
    const scroll = () => {
      if (containerRef.current && !isHovering) {
        containerRef.current.scrollLeft += scrollSpeed;

        // Seamless loop
        if (
          containerRef.current.scrollLeft >=
          containerRef.current.scrollWidth / 2
        ) {
          containerRef.current.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isHovering]);

  return (
    <section className="  ">
      <div className="max-w-6xl mx-auto px-4">
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
            Our latest Instagram moments
          </p>
        </div>

        {/* Carousel */}
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-scroll no-scrollbar items-center"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={() => setIsHovering(true)}   // 👈 pause on touch
          onTouchEnd={() => setIsHovering(false)}    // 👈 resume on release
          style={{ cursor: isHovering ? "pause" : "grab" }}
        >
          {[...instagramLinks, ...instagramLinks].map((link, idx) => (
            <blockquote
              key={idx}
              className="instagram-media highlight-card"
              data-instgrm-permalink={link}
              data-instgrm-version="14"
              aria-label="Instagram post highlight"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentHighlights;