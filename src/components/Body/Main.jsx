import AddIngredient from "./AddIngredient"
import IngredientList from "./IngredientList"
import CallToAction from "../Body/CallToAction"
import RecipeSteps from "../Body/RecipeSteps"

export default function Main() {
    return (
        <main>
            <AddIngredient />
            <IngredientList/>
            <CallToAction/>
            <RecipeSteps/>
        </main>
    )
}