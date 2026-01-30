export type ConvergenceAdminEntry = {
  year: string;
  short: string;
  long: string;
  image: string;
};

export const CONVERGENCE_UPDATED_EVENT = "vjsvConvergenceUpdated";
const CONVERGENCE_STORAGE_KEY = "vjsv_convergence_entries";

const isEntry = (entry: unknown): entry is ConvergenceAdminEntry => {
  if (!entry || typeof entry !== "object") return false;
  const candidate = entry as ConvergenceAdminEntry;
  return (
    typeof candidate.year === "string" &&
    typeof candidate.short === "string" &&
    typeof candidate.long === "string" &&
    typeof candidate.image === "string"
  );
};

export const getConvergenceEntries = (): ConvergenceAdminEntry[] => {
  if (typeof window === "undefined") return [];
  try {
    const stored = window.localStorage.getItem(CONVERGENCE_STORAGE_KEY);
    const parsed = stored ? (JSON.parse(stored) as unknown[]) : [];
    return Array.isArray(parsed) ? parsed.filter(isEntry) : [];
  } catch {
    return [];
  }
};

export const saveConvergenceEntries = (entries: ConvergenceAdminEntry[]) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(
    CONVERGENCE_STORAGE_KEY,
    JSON.stringify(entries)
  );
  window.dispatchEvent(new Event(CONVERGENCE_UPDATED_EVENT));
};

export const addConvergenceEntry = (entry: ConvergenceAdminEntry) => {
  const nextEntries = [...getConvergenceEntries(), entry];
  saveConvergenceEntries(nextEntries);
  return nextEntries;
};

export const removeConvergenceEntry = (index: number) => {
  const entries = getConvergenceEntries();
  const nextEntries = entries.filter((_, idx) => idx !== index);
  saveConvergenceEntries(nextEntries);
  return nextEntries;
};

export const subscribeConvergenceUpdates = (
  onUpdate: (entries: ConvergenceAdminEntry[]) => void
) => {
  if (typeof window === "undefined") return () => undefined;

  const handleUpdate = () => {
    onUpdate(getConvergenceEntries());
  };

  window.addEventListener("storage", handleUpdate);
  window.addEventListener(CONVERGENCE_UPDATED_EVENT, handleUpdate);

  return () => {
    window.removeEventListener("storage", handleUpdate);
    window.removeEventListener(CONVERGENCE_UPDATED_EVENT, handleUpdate);
  };
};
