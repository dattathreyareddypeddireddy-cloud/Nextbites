


"use client";

import { useEffect, useState } from "react";
import RecipeCard from "./recipecard";
import type { Recipe } from "../data/recipe";

type Props = {
  recipes: Recipe[];
};

export default function RecipeGrid({ recipes }: Props) {
  const [query, setQuery] = useState("");
  const [cuisine, setCuisine] = useState("All");
  const [difficulty, setDifficulty] = useState("All");
  const [time, setTime] = useState("All");
  const [sort, setSort] = useState("default");
  const [showFavorites, setShowFavorites] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);

  // Load saved favourites
  useEffect(() => {
    const saved = localStorage.getItem("nextbites-favorites");

    if (saved) {
      try {
        setFavorites(JSON.parse(saved));
      } catch {
        setFavorites([]);
      }
    }
  }, []);

  // Save favourites
  useEffect(() => {
    localStorage.setItem(
      "nextbites-favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  const cuisines = [
    "All",
    ...Array.from(new Set(recipes.map((r) => r.cuisine))),
  ];

  function toggleFavorite(id: string) {
    setFavorites((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  }

  const filteredRecipes = recipes
    .filter((recipe) => {
      const matchesSearch =
        recipe.title.toLowerCase().includes(query.toLowerCase()) ||
        recipe.cuisine.toLowerCase().includes(query.toLowerCase());

      const matchesCuisine =
        cuisine === "All" || recipe.cuisine === cuisine;

      const matchesDifficulty =
        difficulty === "All" || recipe.difficulty === difficulty;

      const matchesTime =
        time === "All" ||
        (time === "20" && recipe.minutes <= 20) ||
        (time === "40" && recipe.minutes <= 40);

      const matchesFavorite =
        !showFavorites || favorites.includes(recipe.id);

      return (
        matchesSearch &&
        matchesCuisine &&
        matchesDifficulty &&
        matchesTime &&
        matchesFavorite
      );
    })
    .sort((a, b) => {
      if (sort === "quickest") return a.minutes - b.minutes;
      if (sort === "longest") return b.minutes - a.minutes;
      if (sort === "name") return a.title.localeCompare(b.title);
      return 0;
    });

  function resetFilters() {
    setQuery("");
    setCuisine("All");
    setDifficulty("All");
    setTime("All");
    setSort("default");
    setShowFavorites(false);
  }

  return (
    <div>
      <div className="search-box">
        <span>🔍</span>
        <input
          type="search"
          placeholder="Search recipes, food, or cuisines..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <button onClick={() => setQuery("")}>✕</button>
        )}
      </div>

      <div className="filter-panel">
        <div className="filter-group">
          <label>Cuisine</label>
          <select
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
          >
            {cuisines.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Difficulty</label>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option>All</option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Cooking time</label>
          <select
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            <option value="All">Any time</option>
            <option value="20">Under 20 minutes</option>
            <option value="40">Under 40 minutes</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Sort by</label>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="default">Recommended</option>
            <option value="quickest">Fastest first</option>
            <option value="longest">Longest first</option>
            <option value="name">Name A–Z</option>
          </select>
        </div>
      </div>

      <div className="results-toolbar">
        <button
          className={showFavorites ? "favorite-filter active" : "favorite-filter"}
          onClick={() => setShowFavorites(!showFavorites)}
        >
          ❤️ My favourites ({favorites.length})
        </button>

        <button className="reset-button" onClick={resetFilters}>
          Reset filters ↻
        </button>
      </div>

      <p className="results-text">
        Showing <strong>{filteredRecipes.length}</strong> recipes
      </p>

      {filteredRecipes.length === 0 ? (
        <div className="empty">
          <span>🍽️</span>
          <h3>No recipes found!</h3>
          <p>Try changing your search or filters.</p>
          <button className="primary-button" onClick={resetFilters}>
            Show all recipes
          </button>
        </div>
      ) : (
        <div className="grid">
          {filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              isFavorite={favorites.includes(recipe.id)}
              onFavorite={() => toggleFavorite(recipe.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}