import type { Recipe } from "./types.ts"

type RecipeModalProps = {
    recipeData: Recipe,
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

    const stepInstruc = recipeData.strInstructions.split(/\r\n|\r|\n/)

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

            <div className="relative max-w-md lg:max-w-3xl w-full max-h[80vh]">                
                <button className="bg-olive/80 py-1 px-1.5 rounded-lg text-white/90 absolute -top-8 right-1"
                onClick={onClose}>
                    Close x
                </button>
                <div className="bg-olive-50/70 px-6 lg:px-15 lg:pb-5 max-h-[80vh] overflow-y-auto relative">
                <h2 className="text-lime-900 text-5xl lg:text-7xl font-[Dancing_Script] text-center mt-5 lg:mt-10 font-bold">
                    {recipeData.strMeal}
                </h2>
                <img src={recipeData.strMealThumb} alt="" 
                    className="rounded-lg w-full h-auto mt-10"
                />
                <div className="mt-5 flex justify-between">
                <h3>          
                    {recipeData.strArea}
                </h3>
                <h3>
                    {recipeData.strCategory}
                </h3>
                </div>
                <div className="bg-olive-50/40 p-2 my-5 rounded-sm text-justify">
                    <ul>
                        {validData.map((item) => <li key={item.id}> 
                        {item.measure} - {item.ingredient}
                        </li>)} 
                    </ul>
                </div>
                <div className="my-5">
                    <p className="bg-olive-50/40 p-2 rounded-sm text-justify">
                    {stepInstruc.map((step:string) => <p key={step}>{step}</p>)}
                    </p>
                </div>
          </div>
            </div>            
        </div>
    )
}

export default RecipeModal