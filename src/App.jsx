import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Catalog from "./pages/CatalogPage/Catalog";
import Favorites from "./pages/FavoritesPage/Favorites";
import Navigation from "./components/Navigation/Navigation";
import Loader from "./components/Loader/Loader";
import { useSelector } from "react-redux";
import { selectIsLoading } from "./redux/selectors";

function App() {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <Navigation />
      {isLoading && <Loader />}
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
