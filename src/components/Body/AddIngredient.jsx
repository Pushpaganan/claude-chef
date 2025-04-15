import { useState } from "react"

export default function AddIngredient() {

    const [ingredientList, setingredientList] = useState([])

    const ingredientsList = ingredientList.map(item => <li key={item} className="ingredients-display__list-item">{item}</li>)

    let Cta = <div className="cta">
        <div className="cta__content">
            <h3 className="cta__content-title">Ready for a recipe?</h3>
            <p className="cta__content-para">Generate a recipe from your list of ingredients</p>
        </div>
        <button className="cta__button">Get a receipe</button>
    </div>

    function onSubmit(formData) {
        const newIngredient = formData.get('ingredient')
        setingredientList(prevList => [...prevList, newIngredient])
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
            <section className="ingredients-display">
                {(ingredientsList.length > 0) ? <><h2 className="ingredients-display__title">Ingredients on hand:</h2>
                    <ul className="ingredients-display__list"> {ingredientsList} </ul></> : null}
                {(ingredientList.length > 3) ? Cta : null}
            </section>
        </div>
    )
}