const ENV_API_BASE = import.meta.env.VITE_API_BASE_URL?.replace(/\/+$/, "");
const FALLBACK_API_BASE =
  typeof window !== "undefined" &&
  (window.location.hostname === "www.vjsahithivanam.in" ||
    window.location.hostname === "vjsahithivanam.in")
    ? "https://vjsv-backend.onrender.com"
    : "";
const API_BASE = ENV_API_BASE || FALLBACK_API_BASE;

const withBase = (url: string) => {
  if (/^https?:\/\//i.test(url)) return url;
  if (!API_BASE) return url;
  const prefix = url.startsWith("/") ? "" : "/";
  return `${API_BASE}${prefix}${url}`;
};

export const resolveAdminAssetUrl = (url: string) => withBase(url);

const fetchJson = async <T,>(url: string, fallback: T): Promise<T> => {
  try {
    const response = await fetch(withBase(url));
    if (!response.ok) return fallback;
    return (await response.json()) as T;
  } catch {
    return fallback;
  }
};

export const fetchAdminList = async <T,>(fileName: string, fallback: T) =>
  fetchJson<T>(
    `/assets/admin-data/${fileName}.json?ts=${Date.now()}`,
    fallback
  );

export const postForm = async <T,>(url: string, formData: FormData) => {
  const response = await fetch(withBase(url), {
    method: "POST",
    body: formData,
  });
  if (!response.ok) {
    throw new Error("Request failed");
  }
  return (await response.json()) as T;
};

export const deleteItem = async <T,>(url: string) => {
  const response = await fetch(withBase(url), {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Request failed");
  }
  return (await response.json()) as T;
};
