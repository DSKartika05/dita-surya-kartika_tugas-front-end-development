"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const FavoriteContext = createContext(undefined);

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("my_favorite_users");
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    } catch (e) {
      console.error(e);
    }
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      try {
        localStorage.setItem("my_favorite_users", JSON.stringify(favorites));
      } catch (e) {
        console.error(e);
      }
    }
  }, [favorites, isHydrated]);

  const isFavorite = (userId) => {
    return favorites.some((user) => user.id === userId);
  };

  const toggleFavorite = (user) => {
    setFavorites((prev) => {
      const exists = prev.some((item) => item.id === user.id);
      if (exists) {
        return prev.filter((item) => item.id !== user.id);
      } else {
        return [...prev, user];
      }
    });
  };

  const removeFavorite = (userId) => {
    setFavorites((prev) => prev.filter((item) => item.id !== userId));
  };

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        favoritesCount: favorites.length,
        isFavorite,
        toggleFavorite,
        removeFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoriteProvider");
  }
  return context;
}

export const useFavorite = useFavorites;
