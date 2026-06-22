import { useState, useEffect } from "react";
import type { Recipe } from "./types.ts"
import RecipeModal from "./RecipeModal.tsx";


function App() {

   const [recipesList, setRecipesList] = useState<Recipe[]>([])
   const [error, setError] = useState(null)

   const [selectedRec, setSelectedRec] = useState<Recipe | null>(null)

   useEffect(() => {

    async function fetchRecipes() {

      try {
        setError(null)
        const response = await fetch(import.meta.env.VITE_API_URL) // espera a resposta chegar
        const returnRecipe = await response.json() // espera o coro ser convertido para JSON

        console.log(returnRecipe);
        


        if(returnRecipe.meals === null) {
          throw new Error ('Recipe not found')
        }

        setRecipesList(returnRecipe.meals)

      } catch(error) {
        setError(error.message)
      }
      
    }

    fetchRecipes()

   }, [])


  return (
    <>
    <header>
      <h1>Recipe</h1>
    </header>
      <main>
        <div>
          <form action="">
            <label htmlFor="">Recipe: </label>
            <input type="text" name="" id="" placeholder="Type the kind of recipe you want"/>
            <button type="submit">Search</button>
          </form>
        </div>
  
      <div id="modalRecipe"> 
        { selectedRec ? <RecipeModal recipeData={selectedRec} onClose={() => setSelectedRec(null)}/> : null}
      </div> 

      <div>{ recipesList.map((rec) => 
      (
        <div key={rec.idMeal}>
          <button onClick={() => setSelectedRec(rec)}>
            <h2>
            {rec.strMeal}
            </h2>
            <img src={rec.strMealThumb} alt="" />
            <div>          
            {rec.strArea}
            </div>
            <div>
            {rec.strCategory}
            </div>
          </button>
        </div>
      ))}</div>

      </main>
    </>
  )
}

export default App


