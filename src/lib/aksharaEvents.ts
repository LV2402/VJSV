export type AksharaAdminEntry = {
  year: string;
  short: string;
  image: string;
  registerUrl: string;
};

export const AKSHARA_UPDATED_EVENT = "vjsvAksharaUpdated";
const AKSHARA_STORAGE_KEY = "vjsv_akshara_entries";

const isEntry = (entry: unknown): entry is AksharaAdminEntry => {
  if (!entry || typeof entry !== "object") return false;
  const candidate = entry as AksharaAdminEntry;
  return (
    typeof candidate.year === "string" &&
    typeof candidate.short === "string" &&
    typeof candidate.image === "string" &&
    typeof candidate.registerUrl === "string"
  );
};

export const getAksharaEntries = (): AksharaAdminEntry[] => {
  if (typeof window === "undefined") return [];
  try {
    const stored = window.localStorage.getItem(AKSHARA_STORAGE_KEY);
    const parsed = stored ? (JSON.parse(stored) as unknown[]) : [];
    return Array.isArray(parsed) ? parsed.filter(isEntry) : [];
  } catch {
    return [];
  }
};

export const saveAksharaEntries = (entries: AksharaAdminEntry[]) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(AKSHARA_STORAGE_KEY, JSON.stringify(entries));
  window.dispatchEvent(new Event(AKSHARA_UPDATED_EVENT));
};

export const addAksharaEntry = (entry: AksharaAdminEntry) => {
  const nextEntries = [...getAksharaEntries(), entry];
  saveAksharaEntries(nextEntries);
  return nextEntries;
};

export const removeAksharaEntry = (index: number) => {
  const entries = getAksharaEntries();
  const nextEntries = entries.filter((_, idx) => idx !== index);
  saveAksharaEntries(nextEntries);
  return nextEntries;
};

export const subscribeAksharaUpdates = (
  onUpdate: (entries: AksharaAdminEntry[]) => void
) => {
  if (typeof window === "undefined") return () => undefined;

  const handleUpdate = () => {
    onUpdate(getAksharaEntries());
  };

  window.addEventListener("storage", handleUpdate);
  window.addEventListener(AKSHARA_UPDATED_EVENT, handleUpdate);

  return () => {
    window.removeEventListener("storage", handleUpdate);
    window.removeEventListener(AKSHARA_UPDATED_EVENT, handleUpdate);
  };
};
