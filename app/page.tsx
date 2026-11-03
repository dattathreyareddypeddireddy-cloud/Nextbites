


import RecipeGrid from "./components/recipegrid";
import { recipes } from "./data/recipe";

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">YOUR DAILY FOOD INSPIRATION</span>

          <h1>
            Discover food.
            <br />
            <span>Enjoy every bite.</span>
          </h1>

          <p>
            Explore delicious recipes, discover new cuisines,
            and find something amazing to cook today.
          </p>

          <div className="hero-stats">
            <div>
              <strong>{recipes.length}+</strong>
              <span>Recipes</span>
            </div>
            <div>
              <strong>7+</strong>
              <span>Cuisines</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Food love</span>
            </div>
          </div>
        </div>

        <div className="hero-art">
          <span>🍜</span>
          <div className="floating-food food-one">🍕</div>
          <div className="floating-food food-two">🥗</div>
          <div className="floating-food food-three">🍰</div>
        </div>
      </section>

      <section className="recipes-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">EXPLORE OUR COLLECTION</span>
            <h2>Find your next favourite</h2>
          </div>
          <span className="recipe-count">
            {recipes.length} delicious choices
          </span>
        </div>

        <RecipeGrid recipes={recipes} />
      </section>
    </main>
  );
}