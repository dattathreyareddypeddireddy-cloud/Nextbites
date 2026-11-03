








import Link from "next/link";
import type { Recipe } from "../data/recipe";

type Props = {
  recipe: Recipe;
  isFavorite: boolean;
  onFavorite: () => void;
};

export default function RecipeCard({
  recipe,
  isFavorite,
  onFavorite,
}: Props) {
  return (
    <article className="card">
      <div className="card-art" data-cuisine={recipe.cuisine}>
        <span>{recipe.emoji}</span>

        <button
          className="heart-button"
          onClick={onFavorite}
          aria-label={
            isFavorite ? "Remove from favourites" : "Add to favourites"
          }
          title="Save recipe"
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>

        <span className="cuisine-tag">{recipe.cuisine}</span>
      </div>

      <div className="card-body">
        <div className="card-meta">
          <span>⏱ {recipe.minutes} min</span>
          <span>•</span>
          <span>{recipe.difficulty}</span>
        </div>

        <h3>{recipe.title}</h3>

        <p className="card-blurb">{recipe.blurb}</p>

        <Link href={`/recipe/${recipe.id}`} className="card-link">
          View recipe <span>→</span>
        </Link>
      </div>
    </article>
  );
}