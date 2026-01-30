const API_BASE = import.meta.env.VITE_API_BASE_URL?.replace(/\/+$/, "");

const withBase = (url: string) => {
  if (/^https?:\/\//i.test(url)) return url;
  if (!API_BASE) return url;
  const prefix = url.startsWith("/") ? "" : "/";
  return `${API_BASE}${prefix}${url}`;
};

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
