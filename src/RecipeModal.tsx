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
            <div>
                <button onClick={onClose}>
                    Fechar
                </button>
                <h3>
                    {recipeData.strMeal}
                </h3>
                <img src={recipeData.strMealThumb} alt="" />
                <div>          
                    {recipeData.strArea}
                </div>
                <div>
                    {recipeData.strCategory}
                </div>
                <div>
                    <ul>
                        {validData.map((item) => <li key={item.id}> 
                        {item.measure} - {item.ingredient}
                        </li>)} 
                    </ul>
                </div>
                <div>
                    {recipeData.strInstructions}
                </div>
          </div>
    )
}

export default RecipeModal