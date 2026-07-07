import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { Character } from "../types/Character";

interface FavoritesContextType {
  favorites: Character[];
  addFavorite: (character: Character) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

const readFavoritesFromStorage = (): Character[] => {
  if (typeof window === "undefined") {
    return [];
  }

  const storedFavorites = window.localStorage.getItem("favorites");
  if (!storedFavorites) {
    return [];
  }

  try {
    const parsedFavorites = JSON.parse(storedFavorites) as Character[];
    return Array.isArray(parsedFavorites) ? parsedFavorites : [];
  } catch {
    return [];
  }
};

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Character[]>(readFavoritesFromStorage);

  const addFavorite = (character: Character) => {
    setFavorites((prev) => {
      if (prev.some((fav) => fav.id === character.id)) {
        return prev;
      }

      const nextFavorites = [...prev, character];
      if (typeof window !== "undefined") {
        window.localStorage.setItem("favorites", JSON.stringify(nextFavorites));
      }

      return nextFavorites;
    });
  };

  const removeFavorite = (id: number) => {
    setFavorites((prev) => {
      const nextFavorites = prev.filter((fav) => fav.id !== id);
      if (typeof window !== "undefined") {
        window.localStorage.setItem("favorites", JSON.stringify(nextFavorites));
      }
      return nextFavorites;
    });
  };

  const isFavorite = (id: number) => favorites.some((fav) => fav.id === id);

  const value = useMemo(
    () => ({ favorites, addFavorite, removeFavorite, isFavorite }),
    [favorites]
  );

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites debe usarse dentro de FavoritesProvider");
  }
  return context;
}
