import styled from "styled-components"

import "./workshop.css"

var Line = styled.div`
    width: 25px;
    height: 500px;
    opacity: .5;
    position: absolute;
    border-radius: 50px;
    background-color: ${props => props.color || "green"};
    border-width: 1px;
    animation: dissappear 1s ease-out infinite;
`

export default function DecorationLines(props){



    return(
        <div className="backMovement">
            <div className="lineContainer">
                <Line color="yellow"/>
            </div>
        </div>
    )
}