import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Catalog from "./pages/CatalogPage/Catalog";
import Favorites from "./pages/FavoritesPage/Favorites";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
