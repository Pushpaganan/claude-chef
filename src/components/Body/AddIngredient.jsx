import IngredientList from "./IngredientList"
import CallToAction from "../Body/CallToAction"
import RecipeSteps from "../Body/RecipeSteps"

export default function AddIngredient(props) {   

    function onSubmit(formData) {
        const newIngredient = formData.get('ingredient')
        props.ingredientFunction(newIngredient)     
    }

    return (
        <div>
            <form className="form" action={onSubmit}>
                <input
                    aria-label="Add Ingredient"
                    type="text"
                    name="ingredient"
                    className="form__input"
                    placeholder="e.g. Broccoli"
                />
                <button className="form__button">
                    Add ingredient
                </button>
            </form>
            
            <IngredientList ingredientList = {props.ingredients}/>            
        </div>
    )
}