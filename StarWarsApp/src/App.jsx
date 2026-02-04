import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import StarshipDetail from "./pages/StarShipDetail";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/starships/:id" element={<StarshipDetail />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
