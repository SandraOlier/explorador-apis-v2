import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { CharacterDetail } from "./components/CharacterDetail";
import { NotFound } from "./components/NotFound";
import { Contacto } from "./pages/Contacto";
import { Favoritos } from "./pages/Favoritos";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/character/:id" element={<CharacterDetail />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/favoritos" element={<Favoritos />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
