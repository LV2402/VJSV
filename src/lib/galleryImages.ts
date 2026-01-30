export type GalleryImageEntry = {
  src: string;
};

export const GALLERY_UPDATED_EVENT = "vjsvGalleryUpdated";
const GALLERY_STORAGE_KEY = "vjsv_gallery_images";

const isEntry = (entry: unknown): entry is GalleryImageEntry => {
  if (!entry || typeof entry !== "object") return false;
  const candidate = entry as GalleryImageEntry;
  return typeof candidate.src === "string";
};

export const getGalleryImages = (): GalleryImageEntry[] => {
  if (typeof window === "undefined") return [];
  try {
    const stored = window.localStorage.getItem(GALLERY_STORAGE_KEY);
    const parsed = stored ? (JSON.parse(stored) as unknown[]) : [];
    return Array.isArray(parsed) ? parsed.filter(isEntry) : [];
  } catch {
    return [];
  }
};

export const saveGalleryImages = (entries: GalleryImageEntry[]) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(GALLERY_STORAGE_KEY, JSON.stringify(entries));
  window.dispatchEvent(new Event(GALLERY_UPDATED_EVENT));
};

export const addGalleryImages = (entries: GalleryImageEntry[]) => {
  const nextEntries = [...getGalleryImages(), ...entries];
  saveGalleryImages(nextEntries);
  return nextEntries;
};

export const removeGalleryImage = (index: number) => {
  const entries = getGalleryImages();
  const nextEntries = entries.filter((_, idx) => idx !== index);
  saveGalleryImages(nextEntries);
  return nextEntries;
};

export const subscribeGalleryUpdates = (
  onUpdate: (entries: GalleryImageEntry[]) => void
) => {
  if (typeof window === "undefined") return () => undefined;

  const handleUpdate = () => {
    onUpdate(getGalleryImages());
  };

  window.addEventListener("storage", handleUpdate);
  window.addEventListener(GALLERY_UPDATED_EVENT, handleUpdate);

  return () => {
    window.removeEventListener("storage", handleUpdate);
    window.removeEventListener(GALLERY_UPDATED_EVENT, handleUpdate);
  };
};
