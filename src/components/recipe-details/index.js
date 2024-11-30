import React from "react";
import Link from "next/link";
const RecipeDetailsItem = ({ recipeDetails }) => {
  return (
    <div>
        <Link href={'/recipe-list'}>Go to recipe List</Link>
      <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="w-full lg:sticky top-0 sm:flex gap-2">
            <img
              src={recipeDetails.image}
              name={recipeDetails.name}
              className="w-4/5 rounded object-cover"
            />
          </div>
        </div>
        <h2 className="text-3xl font-extrabold text-gray-950">
          {recipeDetails.name}
        </h2>
        <div className=" gap-4 mt-5">
          <p className="text-2xl  text-gray-700">{recipeDetails.mealType[0]}</p>
        </div>
        <div className="mt-5">
          <p className="text-xl  text-gray-800">{recipeDetails.cuisine}</p>
        </div>
        <div className="mt-5">
          <h3 className="text-lg font-bold text-gray-700">
            Ingredients
          </h3>
          <ul className="space-y-3 list-disc mt-4 text-sm text-gray-700">
            {recipeDetails.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailsItem;
