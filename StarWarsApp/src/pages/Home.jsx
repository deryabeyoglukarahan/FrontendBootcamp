import { useEffect, useMemo, useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import StarshipCard from "../components/StarShipCard";
import Loading from "../components/Loading";
import ErrorBox from "../components/ErrorBox";
import { fetchStarshipsPage, searchStarships } from "../api/swapi";

export default function Home() {
  const [items, setItems] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);

  const [query, setQuery] = useState("");
  const [mode, setMode] = useState("list"); // "list" | "search"

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function loadInitial() {
    setLoading(true);
    setError("");
    try {
      const data = await fetchStarshipsPage();
      setItems(data.results);
      setNextUrl(data.next);
      setMode("list");
    } catch (e) {
      setError(e.message || "Bir hata oluştu.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadInitial();
  }, []);

  async function handleSearchSubmit(e) {
    e.preventDefault();
    const q = query.trim();
    if (!q) {
      loadInitial();
      return;
    }

    setLoading(true);
    setError("");
    try {
      const data = await searchStarships(q);
      setItems(data.results);
      setNextUrl(null); // SWAPI search’te de next olabilir ama gereksinim “load more” ana liste için yeterli
      setMode("search");
    } catch (e2) {
      setError(e2.message || "Arama sırasında hata.");
    } finally {
      setLoading(false);
    }
  }

  function handleClear() {
    setQuery("");
    loadInitial();
  }

  async function handleLoadMore() {
    if (!nextUrl) return;
    setLoading(true);
    setError("");
    try {
      const data = await fetchStarshipsPage(nextUrl);
      setItems((prev) => [...prev, ...data.results]);
      setNextUrl(data.next);
    } catch (e) {
      setError(e.message || "Daha fazla yüklenemedi.");
    } finally {
      setLoading(false);
    }
  }

  const title = useMemo(() => {
    if (mode === "search") return `Search results (${items.length})`;
    return `Starships`;
  }, [mode, items.length]);

  return (
    <div className="page">
      <div className="bg" />

      <div className="container">
        <Header />

        <SearchBar
          value={query}
          onChange={setQuery}
          onSubmit={handleSearchSubmit}
          onClear={handleClear}
          disabled={loading}
        />

        {error && <ErrorBox message={error} />}
        {loading && items.length === 0 && (
          <Loading text="Starships loading..." />
        )}

        <div className="sectionTitle">{title}</div>

        <div className="grid">
          {items.map((ship) => (
            <StarshipCard key={ship.url} ship={ship} />
          ))}
        </div>

        {mode === "list" && (
          <div className="footerActions">
            <button
              className="btn btnWide"
              onClick={handleLoadMore}
              disabled={!nextUrl || loading}
            >
              {nextUrl
                ? loading
                  ? "Loading..."
                  : "Daha Fazla"
                : "Hepsi yüklendi"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
