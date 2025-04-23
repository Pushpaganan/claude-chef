import React from 'react'
import parse from 'html-react-parser';
import GetRecipe from '../../services/ai/OpenAI'
import RecipeSteps from './RecipeSteps'
export default function CallToAction(props) {

    const [showRecipe, setshowRecipe] = React.useState(false)
    const [recipeSteps, setrecipeSteps] = React.useState()
    async function showRecipeToggle() {
        try {            
            const AIRecipeSteps = await GetRecipe(props.ingredientList.join());
            setrecipeSteps(AIRecipeSteps);
            setshowRecipe(showRecipe => !showRecipe)
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    let Cta = <div className="cta">
        <div className="cta__content">
            <h3 className="cta__content-title">Ready for a recipe?</h3>
            <p className="cta__content-para">Generate a recipe from your list of ingredients</p>
        </div>
        <button className="cta__button" onClick={showRecipeToggle}>Get a receipe</button>
    </div>

    return (
        <>{(props.ingredientList?.length > 3) ? Cta : null}
            {recipeSteps!=null && <div><h1>Chef Claude Recommends:</h1>{parse(recipeSteps)}</div>}
        </>
    )
}