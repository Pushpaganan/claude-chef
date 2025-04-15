import React from 'react'
import RecipeSteps from './RecipeSteps'
export default function CallToAction(props){

    const[showRecipe,setshowRecipe] = React.useState(false)
    function showRecipeToggle(){
        setshowRecipe(showRecipe => !showRecipe)
    }

    let Cta = <div className="cta">
        <div className="cta__content">
            <h3 className="cta__content-title">Ready for a recipe?</h3>
            <p className="cta__content-para">Generate a recipe from your list of ingredients</p>
        </div>
        <button className="cta__button" onClick={showRecipeToggle}>Get a receipe</button>
    </div>

    return(
        <>{(props.ingredientList?.length > 3) ? Cta : null}
        {showRecipe && <RecipeSteps/>}     
        </>
    )
}