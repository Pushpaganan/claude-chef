import React from "react"
import AddIngredient from "./AddIngredient"

export default function Main() {
    const [ingredientList, setingredientList] = React.useState([])    

    function addIngredient(ingredient){
        setingredientList(prevList => [...prevList, ingredient])
        console.log(ingredientList)
    }

    return (
        <main>
            <AddIngredient ingredients={ingredientList} ingredientFunction = {addIngredient}/>           
        </main>
    )
}