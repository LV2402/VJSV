export type SintiAdminEntry = {
  year: string;
  short: string;
  long: string;
  image: string;
};

export const SINTI_UPDATED_EVENT = "vjsvSintiUpdated";
const SINTI_STORAGE_KEY = "vjsv_sintillashunz_entries";

const isEntry = (entry: unknown): entry is SintiAdminEntry => {
  if (!entry || typeof entry !== "object") return false;
  const candidate = entry as SintiAdminEntry;
  return (
    typeof candidate.year === "string" &&
    typeof candidate.short === "string" &&
    typeof candidate.long === "string" &&
    typeof candidate.image === "string"
  );
};

export const getSintiEntries = (): SintiAdminEntry[] => {
  if (typeof window === "undefined") return [];
  try {
    const stored = window.localStorage.getItem(SINTI_STORAGE_KEY);
    const parsed = stored ? (JSON.parse(stored) as unknown[]) : [];
    return Array.isArray(parsed) ? parsed.filter(isEntry) : [];
  } catch {
    return [];
  }
};

export const saveSintiEntries = (entries: SintiAdminEntry[]) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(SINTI_STORAGE_KEY, JSON.stringify(entries));
  window.dispatchEvent(new Event(SINTI_UPDATED_EVENT));
};

export const addSintiEntry = (entry: SintiAdminEntry) => {
  const nextEntries = [...getSintiEntries(), entry];
  saveSintiEntries(nextEntries);
  return nextEntries;
};

export const removeSintiEntry = (index: number) => {
  const entries = getSintiEntries();
  const nextEntries = entries.filter((_, idx) => idx !== index);
  saveSintiEntries(nextEntries);
  return nextEntries;
};

export const subscribeSintiUpdates = (
  onUpdate: (entries: SintiAdminEntry[]) => void
) => {
  if (typeof window === "undefined") return () => undefined;

  const handleUpdate = () => {
    onUpdate(getSintiEntries());
  };

  window.addEventListener("storage", handleUpdate);
  window.addEventListener(SINTI_UPDATED_EVENT, handleUpdate);

  return () => {
    window.removeEventListener("storage", handleUpdate);
    window.removeEventListener(SINTI_UPDATED_EVENT, handleUpdate);
  };
};
