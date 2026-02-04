import { Link } from "react-router-dom";
import { getIdFromUrl } from "../api/swapi";

const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=60";

export default function StarshipCard({ ship }) {
  const id = getIdFromUrl(ship.url);

  return (
    <Link to={`/starships/${id}`} className="card">
      <div className="cardImgWrap">
        <img className="cardImg" src={FALLBACK_IMG} alt={ship.name} />
      </div>

      <div className="cardBody">
        <h3 className="cardTitle">{ship.name}</h3>

        <div className="meta">
          <div className="metaRow">
            <span className="metaKey">Model:</span>
            <span className="metaVal">{ship.model}</span>
          </div>
          <div className="metaRow">
            <span className="metaKey">Hyperdrive Rating:</span>
            <span className="metaVal">{ship.hyperdrive_rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
