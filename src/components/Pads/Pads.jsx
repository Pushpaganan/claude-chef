export default function Pads(props) {

    const style = {
        backgroundColor: props.on ? props.color : "#cccccc"
    };
    return (
        <button id={props.id} className="button-grid button" style={style} onClick={() => props.onClickEvent(props.id)}>
        </button>
    )
}