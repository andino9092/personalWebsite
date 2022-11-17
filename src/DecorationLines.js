import styled, {keyframes} from "styled-components"

import "./workshop.css"

export default function DecorationLines(props){



    return(
        <div className="backMovement">
            <div className="lineContainer">
                <div className="line"/>
            </div>
            <div className="lineContainer rotate45">
                <div className="line"/>
            </div>
        </div>
    )
}