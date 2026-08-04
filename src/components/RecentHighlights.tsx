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
import { BASE_HIGHLIGHT_URLS } from "@/lib/highlights";

const RecentHighlights = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollSpeed = 0.5;
  const [isHovering, setIsHovering] = useState(false);
  const animationRef = useRef<number | null>(null);
  const [instagramLinks, setInstagramLinks] = useState<string[]>(BASE_HIGHLIGHT_URLS);

  // Load Instagram embed script
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://www.instagram.com/embed.js"]'
    );
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.onload = () => {
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
      };
      document.body.appendChild(script);
    } else {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    }
  }, []);

  useEffect(() => {
    fetchAdminList<{ url: string }[]>("highlights", []).then((data) => {
      if (data && data.length > 0) {
        setInstagramLinks(data.map((item) => item.url));
      }
    });
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      fetchAdminList<{ url: string }[]>("highlights", []).then((data) => {
        if (data && data.length > 0) {
          setInstagramLinks(data.map((item) => item.url));
        }
      });
    }, 10000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    }, 500);
    return () => clearTimeout(timer);
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

  const displayLinks =
    instagramLinks.length > 0 ? instagramLinks : BASE_HIGHLIGHT_URLS;
  const carouselItems = [...displayLinks, ...displayLinks];

  return (
    <section id="highlights" className="py-12">
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
          className="flex gap-6 overflow-x-scroll no-scrollbar items-center py-4 min-h-[420px]"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={() => setIsHovering(true)}
          onTouchEnd={() => setIsHovering(false)}
          style={{ cursor: isHovering ? "pause" : "grab" }}
        >
          {carouselItems.map((link, idx) => (
            <div
              key={idx}
              className="shrink-0 min-w-[300px] max-w-[350px] bg-[#fff9f4] border border-[#e6d4c5] rounded-xl shadow-md p-2 flex items-center justify-center min-h-[400px]"
            >
              <blockquote
                className="instagram-media highlight-card w-full"
                data-instgrm-permalink={link}
                data-instgrm-version="14"
                style={{
                  background: "#FFF",
                  border: 0,
                  borderRadius: "12px",
                  boxShadow:
                    "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
                  margin: "1px",
                  maxWidth: "540px",
                  minWidth: "280px",
                  padding: 0,
                  width: "99.375%",
                }}
              >
                <div style={{ padding: "16px" }}>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#811414] font-medium hover:underline text-center block text-sm"
                  >
                    📷 View post on Instagram →
                  </a>
                </div>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentHighlights;