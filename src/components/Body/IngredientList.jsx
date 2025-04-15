import CallToAction from "../Body/CallToAction"

export default function IngredientList(props) {

    const ingredientsList = props.ingredientList?.map(item => <li key={item} className="ingredients-display__list-item">{item}</li>)

    return (
        <section className="ingredients-display">
            {(ingredientsList?.length > 0) ? <><h2 className="ingredients-display__title">Ingredients on hand:</h2>
                <ul className="ingredients-display__list"> {ingredientsList} </ul></> : null}
            <CallToAction ingredientList = {props.ingredientList}/>
        </section>
    )
}