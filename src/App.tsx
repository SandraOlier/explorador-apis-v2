import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { FavoritesProvider } from "./context/FavoritesContext";
import CharacterDetail from "./pages/CharacterDetail";
import Contacto from "./pages/Contacto";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <FavoritesProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
        <Route path="/item/:id" element={<CharacterDetail />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </FavoritesProvider>
  );
}

export default App;
