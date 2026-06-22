import type { Recipe } from "./types.ts"

type RecipeModalProps = {
    recipeData: Recipe | null,
    onClose: () => void      
}



function RecipeModal({ recipeData, onClose }:RecipeModalProps ) {

    const measIng = []

    for(let i = 1; i <= 20; i++) {
        measIng.push({
            id: i,
            measure: recipeData[`strMeasure${i}`],
            ingredient: recipeData[`strIngredient${i}`]
        })
    }

    const validData = measIng.filter((item) =>
        (item.measure !== null && item.measure !== "") && (item.ingredient !== null && item.ingredient !== "")
    )

    return (
        <div className="fixed my-10 mx-5 inset-0 bg-olive-700/80 flex items-center justify-center z-50">
                <button className="bg-olive/80 py-1 px-1.5 rounded-lg text-white/90 absolute top-0 right-0"
                onClick={onClose}>
                    Close x
                </button>
            
            <div className="bg-lime-100 rounded-lg px-6 max-w-md w-full max-h-[80vh] overflow-y-auto">
                <h2 className="text-2xl">
                    {recipeData.strMeal}
                </h2>
                <img src={recipeData.strMealThumb} alt="" 
                    className="rounded-lg w-full h-auto my-10"
                />
                <div className="flex justify-between">
                <h3>          
                    {recipeData.strArea}
                </h3>
                <h3>
                    {recipeData.strCategory}
                </h3>
                </div>
                <div className="my-5">
                    <ul>
                        {validData.map((item) => <li key={item.id}> 
                        {item.measure} - {item.ingredient}
                        </li>)} 
                    </ul>
                </div>
                <div className="my-5">
                    <p className="text-justify">
                    {recipeData.strInstructions}
                    </p>
                </div>
          </div>
        </div>
    )
}

export default RecipeModal