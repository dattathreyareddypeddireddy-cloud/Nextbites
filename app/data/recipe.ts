export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  cuisine: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  blurb: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    cuisine: "Italian",
    minutes: 35,
    difficulty: "Medium",
    blurb: "Blistered crust, San Marzano sauce, melty mozzarella, fresh basil.",
    ingredients: [
      "1 pizza dough ball",
      "1/2 cup tomato sauce",
      "125g fresh mozzarella",
      "Fresh basil leaves",
      "Olive oil, salt",
    ],
    steps: [
      "Heat the oven as hot as it goes with a tray inside.",
      "Stretch the dough thin and spread the sauce.",
      "Tear mozzarella over the top and drizzle oil.",
      "Bake 7 to 9 minutes until the crust is charred.",
      "Finish with basil and a pinch of salt.",
    ],
  },
  {
    id: "paneer-tikka",
    title: "Paneer Tikka",
    emoji: "🧆",
    cuisine: "Indian",
    minutes: 40,
    difficulty: "Medium",
    blurb: "Smoky, spiced paneer cubes grilled with peppers and onion.",
    ingredients: [
      "250g paneer, cubed",
      "1/2 cup thick yogurt",
      "2 tsp tikka masala",
      "1 bell pepper, 1 onion",
      "Lemon, oil, salt",
    ],
    steps: [
      "Mix yogurt, masala, lemon and salt into a marinade.",
      "Coat the paneer and veg, rest 20 minutes.",
      "Thread onto skewers.",
      "Grill or broil until charred at the edges.",
      "Squeeze lemon over and serve hot.",
    ],
  },
  {
    id: "cold-brew",
    title: "Cold Brew Coffee",
    emoji: "☕",
    cuisine: "Drinks",
    minutes: 10,
    difficulty: "Easy",
    blurb: "Smooth, low-acid coffee steeped slow overnight.",
    ingredients: [
      "1 cup coarse ground coffee",
      "4 cups cold water",
      "Ice",
      "Milk or syrup (optional)",
    ],
    steps: [
      "Stir coffee and water in a jar.",
      "Cover and steep in the fridge 12 to 18 hours.",
      "Strain through a paper filter.",
      "Pour over ice and dilute to taste.",
    ],
  },
  {
    id: "veg-burger",
    title: "Veg Burger",
    emoji: "🍔",
    cuisine: "American",
    minutes: 30,
    difficulty: "Easy",
    blurb: "Crispy spiced patty, soft bun, tangy sauce, crunchy veg.",
    ingredients: [
      "2 burger buns",
      "1 cup mashed potato and peas",
      "Breadcrumbs, spices",
      "Lettuce, tomato, onion",
      "Mayo and ketchup",
    ],
    steps: [
      "Mix potato, peas, spices and shape patties.",
      "Coat in breadcrumbs and pan-fry until golden.",
      "Toast the buns.",
      "Layer sauce, patty and veg.",
      "Close and serve warm.",
    ],
  },
  {
    id: "masala-fries",
    title: "Masala Fries",
    emoji: "🍟",
    cuisine: "Snacks",
    minutes: 25,
    difficulty: "Easy",
    blurb: "Golden fries tossed in chaat masala and chilli.",
    ingredients: [
      "3 potatoes, cut into fries",
      "2 tbsp oil",
      "1 tsp chaat masala",
      "1/2 tsp chilli powder",
      "Salt, coriander",
    ],
    steps: [
      "Soak the cut fries 15 minutes, then dry well.",
      "Toss in oil and roast or air-fry until crisp.",
      "Sprinkle chaat masala and chilli.",
      "Toss with coriander and serve.",
    ],
  },
  {
    id: "lemon-iced-tea",
    title: "Lemon Iced Tea",
    emoji: "🧋",
    cuisine: "Drinks",
    minutes: 15,
    difficulty: "Easy",
    blurb: "Bright, fizzy, lightly sweet, perfect for a hot day.",
    ingredients: [
      "2 black tea bags",
      "2 cups hot water",
      "2 tbsp sugar",
      "1 lemon, juiced",
      "Ice, mint",
    ],
    steps: [
      "Steep tea in hot water 4 minutes, remove bags.",
      "Stir in sugar until dissolved.",
      "Add lemon juice and cool.",
      "Pour over ice and garnish with mint.",
    ],
  },
  {
    id: "chocolate-mug-cake",
    title: "Chocolate Mug Cake",
    emoji: "🍫",
    cuisine: "Dessert",
    minutes: 5,
    difficulty: "Easy",
    blurb: "Warm, gooey single-serve cake from the microwave.",
    ingredients: [
      "4 tbsp flour",
      "2 tbsp cocoa",
      "3 tbsp sugar",
      "3 tbsp milk, 2 tbsp oil",
      "A few chocolate chips",
    ],
    steps: [
      "Whisk everything in a large mug.",
      "Drop in a few chocolate chips.",
      "Microwave 70 to 90 seconds.",
      "Let it rest a minute, then dig in.",
    ],
  },
  {
    id: "greek-salad",
    title: "Greek Salad",
    emoji: "🥗",
    cuisine: "Mediterranean",
    minutes: 15,
    difficulty: "Easy",
    blurb: "Crisp cucumber, tomato, olives and feta in olive oil.",
    ingredients: [
      "2 tomatoes, 1 cucumber",
      "1/2 red onion",
      "Handful of olives",
      "100g feta",
      "Olive oil, oregano, lemon",
    ],
    steps: [
      "Chop tomato, cucumber and onion into chunks.",
      "Add olives and cubed feta.",
      "Dress with olive oil, lemon and oregano.",
      "Toss gently and serve cold.",
    ],
  },
];

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}