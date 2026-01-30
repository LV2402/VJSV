export type WorkshopAdminEntry = {
  year: string;
  short: string;
  long: string;
  image: string;
};

export const WORKSHOPS_UPDATED_EVENT = "vjsvWorkshopsUpdated";
const WORKSHOPS_STORAGE_KEY = "vjsv_workshops_entries";

const isEntry = (entry: unknown): entry is WorkshopAdminEntry => {
  if (!entry || typeof entry !== "object") return false;
  const candidate = entry as WorkshopAdminEntry;
  return (
    typeof candidate.year === "string" &&
    typeof candidate.short === "string" &&
    typeof candidate.long === "string" &&
    typeof candidate.image === "string"
  );
};

export const getWorkshopEntries = (): WorkshopAdminEntry[] => {
  if (typeof window === "undefined") return [];
  try {
    const stored = window.localStorage.getItem(WORKSHOPS_STORAGE_KEY);
    const parsed = stored ? (JSON.parse(stored) as unknown[]) : [];
    return Array.isArray(parsed) ? parsed.filter(isEntry) : [];
  } catch {
    return [];
  }
};

export const saveWorkshopEntries = (entries: WorkshopAdminEntry[]) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(WORKSHOPS_STORAGE_KEY, JSON.stringify(entries));
  window.dispatchEvent(new Event(WORKSHOPS_UPDATED_EVENT));
};

export const addWorkshopEntry = (entry: WorkshopAdminEntry) => {
  const nextEntries = [...getWorkshopEntries(), entry];
  saveWorkshopEntries(nextEntries);
  return nextEntries;
};

export const removeWorkshopEntry = (index: number) => {
  const entries = getWorkshopEntries();
  const nextEntries = entries.filter((_, idx) => idx !== index);
  saveWorkshopEntries(nextEntries);
  return nextEntries;
};

export const subscribeWorkshopUpdates = (
  onUpdate: (entries: WorkshopAdminEntry[]) => void
) => {
  if (typeof window === "undefined") return () => undefined;

  const handleUpdate = () => {
    onUpdate(getWorkshopEntries());
  };

  window.addEventListener("storage", handleUpdate);
  window.addEventListener(WORKSHOPS_UPDATED_EVENT, handleUpdate);

  return () => {
    window.removeEventListener("storage", handleUpdate);
    window.removeEventListener(WORKSHOPS_UPDATED_EVENT, handleUpdate);
  };
};
