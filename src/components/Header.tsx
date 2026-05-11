<<<<<<< HEAD
import { useState } from "react";

interface HeaderProps {
  onSearch: (term: string) => void;
  onReset: () => void;
}

export function Header({ onSearch, onReset }: HeaderProps) {
  const [value, setValue] = useState("");

  return (
    <header className="search-header">
      <div className="search-wrapper">
        <input
          className="search-input"
          type="text"
          placeholder="Buscar personaje..."
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setValue(e.target.value);
            onSearch(e.target.value);
          }}
          autoFocus
        />
        <button
          className="reset-button"
          type="button"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            e.stopPropagation();
            setValue("");
            onReset();
          }}
        >
          ✕ Limpiar
        </button>
      </div>
    </header>
  );
=======
import { useState } from "react";

interface HeaderProps {
  onSearch: (term: string) => void;
  onReset: () => void;
}

export function Header({ onSearch, onReset }: HeaderProps) {
  const [value, setValue] = useState("");

  return (
    <header className="search-header">
      <div className="search-wrapper">
        <input
          className="search-input"
          type="text"
          placeholder="Buscar personaje..."
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setValue(e.target.value);
            onSearch(e.target.value);
          }}
          autoFocus
        />
        <button
          className="reset-button"
          type="button"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            e.stopPropagation();
            setValue("");
            onReset();
          }}
        >
          ✕ Limpiar
        </button>
      </div>
    </header>
  );
>>>>>>> 80ee51d20a06fddce60da0a7b0a5016afb21d675
}