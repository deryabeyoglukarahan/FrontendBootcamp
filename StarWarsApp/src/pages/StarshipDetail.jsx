import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Loading from "../components/Loading";
import ErrorBox from "../components/ErrorBox";
import { fetchStarshipById } from "../api/swapi";

const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=60";

export default function StarshipDetail() {
  const { id } = useParams();
  const [ship, setShip] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function run() {
      setLoading(true);
      setError("");
      try {
        const data = await fetchStarshipById(id);
        setShip(data);
      } catch (e) {
        setError(e.message || "Detay yüklenemedi.");
      } finally {
        setLoading(false);
      }
    }
    run();
  }, [id]);

  return (
    <div className="page">
      <div className="bg" />

      <div className="container">
        <Header />

        <div className="detailTop">
          <Link className="btn btnGhost" to="/">
            ← Back
          </Link>
        </div>

        {error && <ErrorBox message={error} />}
        {loading && <Loading text="Detail loading..." />}

        {ship && (
          <div className="detailCard">
            <h2 className="detailTitle">{ship.name}</h2>

            <div className="detailImageWrap">
              <img className="detailImage" src={FALLBACK_IMG} alt={ship.name} />
            </div>

            <div className="detailGrid">
              <DetailRow label="Model" value={ship.model} />
              <DetailRow
                label="Hyperdrive Rating"
                value={ship.hyperdrive_rating}
              />
              <DetailRow label="Passengers" value={ship.passengers} />
              <DetailRow
                label="Max Atmosphering Speed"
                value={ship.max_atmosphering_speed}
              />
              <DetailRow label="Manufacturer" value={ship.manufacturer} />
              <DetailRow label="Crew" value={ship.crew} />
              <DetailRow label="Cargo Capacity" value={ship.cargo_capacity} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function DetailRow({ label, value }) {
  return (
    <div className="detailRow">
      <span className="detailKey">{label}:</span>
      <span className="detailVal">{value}</span>
    </div>
  );
}
