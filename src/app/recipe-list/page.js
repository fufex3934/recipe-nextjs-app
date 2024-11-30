import RecipeList from "@/components/recipe-list";

async function fetchListofRecipes() {
  try {
    const response = await fetch("https://dummyjson.com/recipes");
    const data = await response.json();
    return data.recipes;
  } catch (error) {
    console.error("Failed to fetch recipes", error);
    return [];
  }
}

const Recipes = async () => {
  const recipeList = await fetchListofRecipes();
  return <RecipeList recipeList={recipeList} />;
};

export default Recipes;
