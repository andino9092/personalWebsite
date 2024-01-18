
import "./NewUI.css"

export default function Card(props){

    const style = {
        "zIndex": props.z,
        "bottom": `${props.bottom}px`,
        "backgroundColor": props.color || "white",
    }


    return (
        <div className="card" style={style}>
        </div>   
    )
}