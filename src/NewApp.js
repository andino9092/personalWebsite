import { useState } from "react";
import Card from "./Card";
import { CSSTransition } from "react-transition-group";

export default function NewApp(props){

    const [board, setBoard] = useState([false, false, false, false]) 
    const [click, setClick] = useState(false)

    const onClick = () => {
        setClick(!click)
    }


    return(
        <div className="newApp">
            <CSSTransition in={click} timeout={100} classNames="example">
                <div>
                    IM HERE
                </div>
            </CSSTransition>
            
            <Card bottom={100}>

            </Card>
            <Card z={2} bottom={50}>

            </Card>
            <Card z={3} bottom={0}>

            </Card>
            <Card z={4} bottom={-50}>

            </Card>
            <button onClick={onClick}>
                Hello
            </button>
        </div>
    )
}