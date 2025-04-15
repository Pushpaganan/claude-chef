import React from "react"

export default function DummyComponent() {

    const [counter, setCounter] = React.useState(0)

    function addCounter() {
        setCounter(counter + 1)

    }

    function subtractCounter() {
        setCounter(counter - 1)
    }

    return (
        <div>
            <h1 className="title">Count: {counter} </h1>
            <button onClick={subtractCounter}>-</button>
            <button onClick={addCounter}>+</button>
        </div>
    )

}