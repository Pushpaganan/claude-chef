import React from "react";

export default function JokesComponent(props) {
    const [isShown, SetIsShown] = React.useState(false)

    function toggleSwitch() {
        SetIsShown(prevShown => !prevShown)
    }

    console.log('Toggled Value: ' + isShown)
    return (
        <div>
            <h3>{props.setup}</h3>
            {isShown ? <p>{props.punchline}</p> : null}
            <button onClick={toggleSwitch}>{!isShown ? 'Show Punch Line' : 'Hide Punch Line'}</button>
            <hr />
        </div>
    )
}
