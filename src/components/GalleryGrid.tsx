import React, { useEffect, useMemo, useState } from "react";
import {
  getGalleryImages,
  subscribeGalleryUpdates,
} from "@/lib/galleryImages";

const GalleryGrid = () => {
  const baseImages = [
    "/assets/gallery_kosam/1.JPG",
    "/assets/gallery_kosam/2.jpg",
    "/assets/gallery_kosam/4.JPG",
    "/assets/gallery_kosam/5.JPG",
    "/assets/gallery_kosam/13.jpg",
    "/assets/gallery_kosam/15.jpg",
    "/assets/gallery_kosam/17.JPG",
    "/assets/gallery_kosam/6.JPG",
    "/assets/gallery_kosam/7.JPG",
    "/assets/gallery_kosam/12.JPG",
    "/assets/gallery_kosam/11.jpg",
    "/assets/gallery_kosam/8.JPG",
    "/assets/gallery_kosam/10.jpg",
    "/assets/gallery_kosam/19.jpg",


    "/assets/gallery_kosam/14.jpg",
    "/assets/gallery_kosam/21.jpg",
    "/assets/gallery_kosam/16.jpg",
    "/assets/gallery_kosam/18.JPG",
    "/assets/gallery_kosam/20.jpg",
  ];

  const [adminImages, setAdminImages] = useState(() => getGalleryImages());

  useEffect(() => {
    setAdminImages(getGalleryImages());
    return subscribeGalleryUpdates(setAdminImages);
  }, []);

  const images = useMemo(
    () => [...baseImages, ...adminImages.map((entry) => entry.src)],
    [adminImages]
  );

  return (
    <section className="py-4 bg-background">
      <div className="container mx-auto px-4">
        {/* Masonry Layout */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
          {images.map((src, idx) => (
            <div key={idx} className="mb-4 break-inside-avoid">
              <img
                src={src}
                alt={`Gallery ${idx + 1}`}
                className="w-full rounded-lg shadow-md hover:opacity-90 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryGrid;
