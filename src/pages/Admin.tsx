import { useEffect, useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./Admin.module.css";
import { addHighlightUrl, getHighlightUrls } from "@/lib/highlights";
import {
  addAksharaEntry,
  getAksharaEntries,
  removeAksharaEntry,
} from "@/lib/aksharaEvents";
import {
  addGalleryImages,
  getGalleryImages,
  removeGalleryImage,
} from "@/lib/galleryImages";

const ADMIN_USERNAME = "vj.sahitivanam";
const ADMIN_PASSWORD = "VJSVwebsite";

const sections = [
  {
    title: "Akshara",
    description: "Manage Akshara content, schedules, and announcements.",
  },
  {
    title: "Sintillashunz",
    description: "Manage Sintillashunz events, posters, and descriptions.",
  },
  {
    title: "Convergence",
    description: "Manage Convergence event details and updates.",
  },
  {
    title: "Workshops",
    description: "Manage workshop listings and information.",
  },
  {
    title: "Gallery",
    description: "Manage gallery images and highlights.",
  },
  {
    title: "Highlights",
    description: "Manage highlights and featured content.",
  }
  
];

const Admin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [highlightModalOpen, setHighlightModalOpen] = useState(false);
  const [highlightUrl, setHighlightUrl] = useState("");
  const [highlightError, setHighlightError] = useState("");
  const [highlightUrls, setHighlightUrls] = useState<string[]>([]);
  const [aksharaModalOpen, setAksharaModalOpen] = useState(false);
  const [aksharaYear, setAksharaYear] = useState("2025");
  const [aksharaShort, setAksharaShort] = useState("");
  const [aksharaImageFile, setAksharaImageFile] = useState<File | null>(null);
  const [aksharaRegisterUrl, setAksharaRegisterUrl] = useState("");
  const [aksharaError, setAksharaError] = useState("");
  const [aksharaEntries, setAksharaEntries] = useState(
    getAksharaEntries()
  );
  const [galleryModalOpen, setGalleryModalOpen] = useState(false);
  const [galleryFiles, setGalleryFiles] = useState<FileList | null>(null);
  const [galleryError, setGalleryError] = useState("");
  const [galleryImages, setGalleryImages] = useState(() => getGalleryImages());

  const canSubmit = useMemo(
    () => username.trim().length > 0 && password.trim().length > 0,
    [username, password]
  );

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    const normalizedUsername = username.trim();
    const normalizedPassword = password.trim();

    if (
      normalizedUsername === ADMIN_USERNAME &&
      normalizedPassword === ADMIN_PASSWORD
    ) {
      setIsAuthenticated(true);
      setError("");
      return;
    }

    setError("Invalid username or password.");
  };

  useEffect(() => {
    setHighlightUrls(getHighlightUrls());
  }, []);

  useEffect(() => {
    setAksharaEntries(getAksharaEntries());
  }, []);

  useEffect(() => {
    setGalleryImages(getGalleryImages());
  }, []);

  const handleAddHighlight = (event: React.FormEvent) => {
    event.preventDefault();
    const trimmed = highlightUrl.trim();

    if (!trimmed) {
      setHighlightError("Please enter a URL.");
      return;
    }

    const isInstagram =
      /^https?:\/\/(www\.)?instagram\.com\/(p|reel|tv)\//i.test(trimmed);

    if (!isInstagram) {
      setHighlightError("Please enter a valid Instagram post or reel URL.");
      return;
    }

    const nextUrls = addHighlightUrl(trimmed);
    setHighlightUrls(nextUrls);
    setHighlightUrl("");
    setHighlightError("");
  };

  const readFileAsDataUrl = (file: File) =>
    new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result));
      reader.onerror = () => reject(new Error("Failed to read image."));
      reader.readAsDataURL(file);
    });

  const handleAddAksharaEntry = async (event: React.FormEvent) => {
    event.preventDefault();

    const trimmedShort = aksharaShort.trim();
    const trimmedUrl = aksharaRegisterUrl.trim();

    if (!trimmedShort) {
      setAksharaError("Please enter a short title.");
      return;
    }

    if (!aksharaImageFile) {
      setAksharaError("Please upload an image.");
      return;
    }

    if (!trimmedUrl) {
      setAksharaError("Please enter a registration URL.");
      return;
    }

    try {
      const imageDataUrl = await readFileAsDataUrl(aksharaImageFile);
      const nextEntries = addAksharaEntry({
        year: aksharaYear,
        short: trimmedShort,
        image: imageDataUrl,
        registerUrl: trimmedUrl,
      });

      setAksharaEntries(nextEntries);
      setAksharaShort("");
      setAksharaImageFile(null);
      setAksharaRegisterUrl("");
      setAksharaError("");
    } catch {
      setAksharaError("Unable to read the image. Please try again.");
    }
  };

  const handleDeleteAksharaEntry = (index: number) => {
    const nextEntries = removeAksharaEntry(index);
    setAksharaEntries(nextEntries);
  };

  const readFilesAsDataUrls = async (files: FileList) => {
    const fileArray = Array.from(files);
    const results = await Promise.all(
      fileArray.map(
        (file) =>
          new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(String(reader.result));
            reader.onerror = () => reject(new Error("Failed to read image."));
            reader.readAsDataURL(file);
          })
      )
    );

    return results.map((src) => ({ src }));
  };

  const handleAddGalleryImages = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!galleryFiles || galleryFiles.length === 0) {
      setGalleryError("Please upload at least one image.");
      return;
    }

    try {
      const entries = await readFilesAsDataUrls(galleryFiles);
      const nextImages = addGalleryImages(entries);
      setGalleryImages(nextImages);
      setGalleryFiles(null);
      setGalleryError("");
    } catch {
      setGalleryError("Unable to read images. Please try again.");
    }
  };

  const handleDeleteGalleryImage = (index: number) => {
    const nextImages = removeGalleryImage(index);
    setGalleryImages(nextImages);
  };

  return (
    <div className={`${styles.root} page-fade-in`}>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .page-fade-in { animation: fadeIn 0.8s ease-out; }
        .navbar-fade-in { animation: slideInDown 0.8s ease-out; }
        .content-fade-in { animation: fadeInUp 1s ease-out 0.3s both; }
        .heading-fade-in { animation: fadeInUp 1.2s ease-out 0.5s both; }
        .cards-fade-in { animation: fadeInUp 1s ease-out 0.7s both; }
      `}</style>

      <div className="navbar-fade-in">
        <Navbar />
      </div>
      {isAuthenticated ? (
        <button
          onClick={() => {
            setIsAuthenticated(false);
            setUsername("");
            setPassword("");
          }}
          className="fixed top-3 right-4 z-50 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 hover:scale-105"
          style={{
            border: "1px solid #811414",
            color: "#811414",
            backgroundColor: "#fbeee1",
            boxShadow: "0 4px 10px rgba(129, 20, 20, 0.2)",
          }}
        >
          Log out
        </button>
      ) : null}

      <main className="pt-20 pb-16 content-fade-in">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1
              className="text-4xl md:text-5xl font-bold heading-fade-in"
              style={{ animation: "fadeInUp 1.5s ease-out 0.6s both" }}
            >
              Admin Panel
            </h1>
            <p
              className="mt-3 text-lg"
              style={{
                color: "#a55757",
                animation: "fadeInUp 1.2s ease-out 0.8s both",
              }}
            >
              Manage Akshara, Sintillashunz, Convergence, Gallery, and Highlights.
            </p>
          </div>

          {!isAuthenticated ? (
            <div
              className="max-w-md mx-auto rounded-xl p-6 sm:p-8"
              style={{
                backgroundColor: "#fbeee1",
                boxShadow: "0 6px 16px rgba(129, 20, 20, 0.6)",
              }}
            >
              <h2 className="text-2xl font-semibold mb-6 text-center">
                Admin Login
              </h2>
              <form className="space-y-5" onSubmit={handleLogin}>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Username
                  </label>
                  <input
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    className="w-full rounded-xl border border-[#d4a574] bg-white/70 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#811414]"
                    placeholder="Enter admin username"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="w-full rounded-xl border border-[#d4a574] bg-white/70 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#811414]"
                    placeholder="Enter password"
                  />
                </div>
                {error ? (
                  <p className="text-sm text-[#b3261e] font-medium">{error}</p>
                ) : null}
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="w-full rounded-full font-semibold py-2.5 transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: "#811414",
                    color: "#fbeee1",
                    boxShadow: "0 4px 10px rgba(129, 20, 20, 0.4)",
                    opacity: canSubmit ? 1 : 0.6,
                  }}
                >
                  Sign In
                </button>
              </form>
            </div>
          ) : (
            <div className="space-y-8 cards-fade-in">
              <div className="flex flex-wrap justify-center gap-6">
                {sections.map((section) => (
                  <button
                    key={section.title}
                    type="button"
                    onClick={
                      section.title === "Highlights"
                        ? () => setHighlightModalOpen(true)
                        : section.title === "Akshara"
                        ? () => setAksharaModalOpen(true)
                        : section.title === "Gallery"
                        ? () => setGalleryModalOpen(true)
                        : undefined
                    }
                    className="rounded-xl p-5 w-full sm:w-[45%] lg:w-[30%] text-left transform transition-all duration-300 hover:scale-105"
                    style={{
                      backgroundColor: "#fbeee1",
                      boxShadow: "0 4px 8px rgba(129, 20, 20, 0.6)",
                    }}
                  >
                    <h3 className="text-xl font-semibold mb-2">
                      {section.title}
                    </h3>
                    <p className="text-sm" style={{ color: "#9d4545" }}>
                      {section.description}
                    </p>
                  </button>
                ))}
              </div>

            </div>
          )}
        </section>
      </main>

      {highlightModalOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ animation: "fadeIn 0.2s ease-out" }}
        >
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(222, 172, 172, 0.85)" }}
            onClick={() => setHighlightModalOpen(false)}
          />
          <div
            className="relative w-full max-w-xl max-h-[80vh] overflow-y-auto rounded-xl p-6 mx-4"
            style={{
              backgroundColor: "#fbeee1",
              boxShadow: "0 8px 24px rgba(129, 20, 20, 0.8)",
              animation: "fadeInUp 0.3s ease-out",
            }}
          >
            <button
              onClick={() => setHighlightModalOpen(false)}
              className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center font-bold text-lg hover:opacity-80 transition-opacity"
              style={{ backgroundColor: "#811414", color: "#fbeee1" }}
              title="Close"
            >
              ×
            </button>
            <h2 className="text-2xl font-semibold mb-2">Highlights Form</h2>
            <p className="text-sm mb-6" style={{ color: "#9d4545" }}>
              Add an Instagram post or reel URL to the highlights list.
            </p>
            <form className="space-y-4" onSubmit={handleAddHighlight}>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Instagram URL
                </label>
                <input
                  type="url"
                  value={highlightUrl}
                  onChange={(event) => setHighlightUrl(event.target.value)}
                  className="w-full rounded-xl border border-[#d4a574] bg-white/70 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#811414]"
                  placeholder="https://www.instagram.com/p/..."
                />
              </div>
              {highlightError ? (
                <p className="text-sm text-[#b3261e] font-medium">
                  {highlightError}
                </p>
              ) : null}
              <button
                type="submit"
                className="rounded-full font-semibold py-2.5 px-6 transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: "#811414",
                  color: "#fbeee1",
                  boxShadow: "0 4px 10px rgba(129, 20, 20, 0.4)",
                }}
              >
                Add URL
              </button>
            </form>

            {highlightUrls.length > 0 ? (
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3">Saved URLs</h3>
                <ul className="space-y-2 text-sm" style={{ color: "#9d4545" }}>
                  {highlightUrls.map((url) => (
                    <li key={url} className="break-all">
                      {url}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}

      {galleryModalOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ animation: "fadeIn 0.2s ease-out" }}
        >
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(222, 172, 172, 0.85)" }}
            onClick={() => setGalleryModalOpen(false)}
          />
          <div
            className="relative w-full max-w-xl max-h-[80vh] overflow-y-auto rounded-xl p-6 mx-4"
            style={{
              backgroundColor: "#fbeee1",
              boxShadow: "0 8px 24px rgba(129, 20, 20, 0.8)",
              animation: "fadeInUp 0.3s ease-out",
            }}
          >
            <button
              onClick={() => setGalleryModalOpen(false)}
              className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center font-bold text-lg hover:opacity-80 transition-opacity"
              style={{ backgroundColor: "#811414", color: "#fbeee1" }}
              title="Close"
            >
              ×
            </button>
            <h2 className="text-2xl font-semibold mb-2">Gallery Upload</h2>
            <p className="text-sm mb-6" style={{ color: "#9d4545" }}>
              Upload photos to add them to the Gallery page.
            </p>
            <form className="space-y-4" onSubmit={handleAddGalleryImages}>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Images
                </label>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(event) => setGalleryFiles(event.target.files)}
                  className="w-full rounded-xl border border-[#d4a574] bg-white/70 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#811414]"
                />
              </div>
              {galleryError ? (
                <p className="text-sm text-[#b3261e] font-medium">
                  {galleryError}
                </p>
              ) : null}
              <button
                type="submit"
                className="rounded-full font-semibold py-2.5 px-6 transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: "#811414",
                  color: "#fbeee1",
                  boxShadow: "0 4px 10px rgba(129, 20, 20, 0.4)",
                }}
              >
                Upload Photos
              </button>
            </form>

            {galleryImages.length > 0 ? (
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3">Saved Photos</h3>
                <ul className="space-y-2 text-sm" style={{ color: "#9d4545" }}>
                  {galleryImages.map((entry, index) => (
                    <li
                      key={`${entry.src}-${index}`}
                      className="flex items-center justify-between gap-3"
                    >
                      <span>Photo {index + 1}</span>
                      <button
                        type="button"
                        onClick={() => handleDeleteGalleryImage(index)}
                        className="text-xs font-semibold rounded-full px-3 py-1 transition-opacity hover:opacity-80"
                        style={{
                          color: "#811414",
                          border: "1px solid #811414",
                          backgroundColor: "#fbeee1",
                        }}
                      >
                        Delete
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}

      {aksharaModalOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ animation: "fadeIn 0.2s ease-out" }}
        >
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(222, 172, 172, 0.85)" }}
            onClick={() => setAksharaModalOpen(false)}
          />
          <div
            className="relative w-full max-w-xl max-h-[80vh] overflow-y-auto rounded-xl p-6 mx-4"
            style={{
              backgroundColor: "#fbeee1",
              boxShadow: "0 8px 24px rgba(129, 20, 20, 0.8)",
              animation: "fadeInUp 0.3s ease-out",
            }}
          >
            <button
              onClick={() => setAksharaModalOpen(false)}
              className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center font-bold text-lg hover:opacity-80 transition-opacity"
              style={{ backgroundColor: "#811414", color: "#fbeee1" }}
              title="Close"
            >
              ×
            </button>
            <h2 className="text-2xl font-semibold mb-2">Akshara Form</h2>
            <p className="text-sm mb-6" style={{ color: "#9d4545" }}>
              Add a new Akshara item with year, short title, and registration
              URL.
            </p>
            <form className="space-y-4" onSubmit={handleAddAksharaEntry}>
              <div>
                <label className="block text-sm font-medium mb-2">Year</label>
                <select
                  value={aksharaYear}
                  onChange={(event) => setAksharaYear(event.target.value)}
                  className="w-full rounded-xl border border-[#d4a574] bg-white/70 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#811414]"
                >
                  {Array.from(
                    { length: new Date().getFullYear() - 2022 + 1 },
                    (_, idx) => `${2022 + idx}`
                  )
                    .reverse()
                    .map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Short</label>
                <input
                  type="text"
                  value={aksharaShort}
                  onChange={(event) => setAksharaShort(event.target.value)}
                  className="w-full rounded-xl border border-[#d4a574] bg-white/70 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#811414]"
                  placeholder="Enter short title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(event) =>
                    setAksharaImageFile(event.target.files?.[0] ?? null)
                  }
                  className="w-full rounded-xl border border-[#d4a574] bg-white/70 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#811414]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Register URL
                </label>
                <input
                  type="url"
                  value={aksharaRegisterUrl}
                  onChange={(event) => setAksharaRegisterUrl(event.target.value)}
                  className="w-full rounded-xl border border-[#d4a574] bg-white/70 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#811414]"
                  placeholder="https://..."
                />
              </div>
              {aksharaError ? (
                <p className="text-sm text-[#b3261e] font-medium">
                  {aksharaError}
                </p>
              ) : null}
              <button
                type="submit"
                className="rounded-full font-semibold py-2.5 px-6 transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: "#811414",
                  color: "#fbeee1",
                  boxShadow: "0 4px 10px rgba(129, 20, 20, 0.4)",
                }}
              >
                Add Akshara Item
              </button>
            </form>

            {aksharaEntries.length > 0 ? (
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3">Saved Items</h3>
                <ul className="space-y-2 text-sm" style={{ color: "#9d4545" }}>
                  {aksharaEntries.map((entry, index) => (
                    <li
                      key={`${entry.year}-${entry.short}-${index}`}
                      className="flex items-center justify-between gap-3"
                    >
                      <span>
                        {entry.year} — {entry.short}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleDeleteAksharaEntry(index)}
                        className="text-xs font-semibold rounded-full px-3 py-1 transition-opacity hover:opacity-80"
                        style={{
                          color: "#811414",
                          border: "1px solid #811414",
                          backgroundColor: "#fbeee1",
                        }}
                      >
                        Delete
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}

      <div style={{ animation: "fadeIn 1s ease-out 1.2s both" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Admin;
