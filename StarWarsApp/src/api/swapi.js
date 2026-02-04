const BASE = "https://swapi.dev/api";

export async function fetchStarshipsPage(url = `${BASE}/starships/?page=1`) {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Starships yüklenemedi.");
  return res.json(); // { count, next, previous, results }
}

export async function searchStarships(query) {
  const q = encodeURIComponent(query.trim());
  const res = await fetch(`${BASE}/starships/?search=${q}`);
  if (!res.ok) throw new Error("Arama başarısız.");
  return res.json();
}

export async function fetchStarshipById(id) {
  const res = await fetch(`${BASE}/starships/${id}/`);
  if (!res.ok) throw new Error("Detay bulunamadı.");
  return res.json();
}

/** SWAPI url alanından id çekmek için */
export function getIdFromUrl(url) {
  // örn: https://swapi.dev/api/starships/10/
  const match = url?.match(/\/starships\/(\d+)\/?$/);
  return match ? match[1] : null;
}
