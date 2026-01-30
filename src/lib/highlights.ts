export const BASE_HIGHLIGHT_URLS = [
  "https://www.instagram.com/p/DN7AlVwD3lH/?img_index=1",
  "https://www.instagram.com/p/DN518pRkuYS/",
  "https://www.instagram.com/p/DN5kLbvEVfh/",
  "https://www.instagram.com/p/DN46BM2Edth/",
  "https://www.instagram.com/p/DN4qJDyEfi_/",
  "https://www.instagram.com/p/DNyHCpcYjjj/",
  "https://www.instagram.com/p/DNvLG915sIU/",
  "https://www.instagram.com/p/DNs-XJw4uf7/",
  "https://www.instagram.com/p/DNqXHvMx8Jb/",
  "https://www.instagram.com/p/DNntpgBxUFI/",
  "https://www.instagram.com/p/DNlFlSSxLmz/",
  "https://www.instagram.com/p/DNibMPlxLi1/",
  "https://www.instagram.com/reel/DNLUBNxxkfi/",
  "https://www.instagram.com/p/DMPSdaiTb6e/",
  "https://www.instagram.com/p/DLuoEBixveO/",
  "https://www.instagram.com/p/DH6Gb1nxi8P/?img_index=1",
  "https://www.instagram.com/p/DHqk6nOzc6K/",
  "https://www.instagram.com/p/DGTT8f_zuCr/",
];

export const HIGHLIGHTS_STORAGE_KEY = "vjsv_highlight_urls";
export const HIGHLIGHTS_UPDATED_EVENT = "vjsvHighlightsUpdated";

export const getHighlightUrls = (): string[] => {
  if (typeof window === "undefined") return BASE_HIGHLIGHT_URLS;

  try {
    const stored = window.localStorage.getItem(HIGHLIGHTS_STORAGE_KEY);
    const parsed = stored ? (JSON.parse(stored) as string[]) : [];
    const merged = Array.from(
      new Set([...(Array.isArray(parsed) ? parsed : []), ...BASE_HIGHLIGHT_URLS])
    );

    if (!stored) {
      window.localStorage.setItem(
        HIGHLIGHTS_STORAGE_KEY,
        JSON.stringify(merged)
      );
    }

    return merged;
  } catch {
    return BASE_HIGHLIGHT_URLS;
  }
};

export const saveHighlightUrls = (urls: string[]) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(HIGHLIGHTS_STORAGE_KEY, JSON.stringify(urls));
  window.dispatchEvent(new Event(HIGHLIGHTS_UPDATED_EVENT));
};

export const addHighlightUrl = (url: string) => {
  const nextUrls = Array.from(new Set([...getHighlightUrls(), url]));
  saveHighlightUrls(nextUrls);
  return nextUrls;
};

export const subscribeHighlightUpdates = (
  onUpdate: (urls: string[]) => void
) => {
  if (typeof window === "undefined") return () => undefined;

  const handleUpdate = () => {
    onUpdate(getHighlightUrls());
  };

  window.addEventListener("storage", handleUpdate);
  window.addEventListener(HIGHLIGHTS_UPDATED_EVENT, handleUpdate);

  return () => {
    window.removeEventListener("storage", handleUpdate);
    window.removeEventListener(HIGHLIGHTS_UPDATED_EVENT, handleUpdate);
  };
};
