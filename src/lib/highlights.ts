export const BASE_HIGHLIGHT_URLS: string[] = [];

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
