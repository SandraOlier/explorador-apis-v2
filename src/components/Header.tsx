import { Link } from "react-router-dom";

interface HeaderProps {
  onSearch: (value: string) => void;
  onReset: () => void;
}

export function Header({ onSearch, onReset }: HeaderProps) {
  return (
    <header className="search-header">
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Buscar personaje..."
          className="search-input"
          onChange={(e) => onSearch(e.target.value)}
        />
        <button className="reset-button" onClick={onReset}>
          Resetear
        </button>
      </div>

      {/* 🔹 Navegación principal */}
      <nav style={{ marginTop: "12px", display: "flex", gap: "16px" }}>
        <Link to="/favoritos" className="card-button remove-fav">Favoritos</Link>
        <Link to="/contacto" className="card-button add-fav">Contacto</Link>
      </nav>
    </header>
  );
}
