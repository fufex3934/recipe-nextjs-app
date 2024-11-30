import RecipeDetailsItem from '@/components/recipe-details'
import React from 'react'


async function fetchRecipesDetails(currentRecipeId){
  const response = await fetch(`https://dummyjson.com/recipes/${currentRecipeId}`)
  const data = await response.json()
  return data
}
const RecipeDetails = async({params}) => {
  const {details} = params;
  const recipeDetails = await fetchRecipesDetails(details)

  return <RecipeDetailsItem recipeDetails={recipeDetails}/>
}

export default RecipeDetails