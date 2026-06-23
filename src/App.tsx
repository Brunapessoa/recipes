import { useState, useEffect } from "react";
import type { Recipe } from "./types.ts"
import RecipeModal from "./RecipeModal.tsx";
import SearchForm from "./SearchForm.tsx";

function App() {

   const [recipesList, setRecipesList] = useState<Recipe[]>([])
   const [error, setError] = useState<string | null>(null)

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

      } catch(error: unknown) {
        if(error instanceof Error){
          setError(error.message)
        }
      }
      
    }

    fetchRecipes()

   }, [])


  async function handleSearch(term:string) {
  
    try {
      setError(null)
        
      const responseTerm = await fetch(`${import.meta.env.VITE_API_URL}${term}`)
      const returnTerm = await responseTerm.json()

        if(returnTerm.meals === null) {
          throw new Error ('Recipe not found with this term')
        }
        setRecipesList(returnTerm.meals)
      
      } catch(error: unknown) {
        if(error instanceof Error){
          setError(error.message)
        }
      }
      }  

      useEffect(() => {
        
        if(selectedRec) {
          document.body.style.overflow = "hidden"
        } else {
          document.body.style.overflow = ""
        }
      }, [selectedRec])

  return (
    <>
    <header className="text-center my-5 py-15 lg:py-20">
      <h1 className="text-7xl lg:text-9xl text-lime-800 font-[Dancing_Script] font-bold shadow-black text-shadow-lg">Favorite Recipe</h1>
    </header>
      <main>
        <div>
          <SearchForm submitTerm={handleSearch}/>
        </div>
      <div>
        {error && <p className="my-5 py-2 text-center text-lg rounded-2xl bg-olive-50/70 w-90 m-auto text-red-600">{error}</p>}  
      </div>    
  
      <div id="modalRecipe"> 
        { selectedRec ? <RecipeModal recipeData={selectedRec} onClose={() => setSelectedRec(null)}/> : null}
      </div> 

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-5">{ recipesList.map((rec) => 
      (
        <div className="p-10 max-w-sm mx-auto" key={rec.idMeal}>
          <button className="bg-lime-900/50 rounded-xl p-5" 
            onClick={() => setSelectedRec(rec)}>
            <h2 className="text-lime-50 text-2xl font-extrabold mb-5 shadow-black text-shadow-lg">
            {rec.strMeal}
            </h2>
            <img className="rounded-4xl" 
            src={rec.strMealThumb} alt="" />
            <div className="flex justify-between my-2 mx-5 text-lime-50 font-bold shadow-black text-shadow-lg">
              <div>          
                {rec.strArea}
              </div>
              <div>
                {rec.strCategory}
              </div>
            </div>
          </button>
        </div>
      ))}</div>

      </main>
      <footer className="text-center text-lime-50 bg-lime-900/50 py-1">
        Bruna Pessoa - Software Developer
      </footer>
    </>
  )
}

export default App


