import "./App.css"
import { Link } from "react-router-dom"

export default function NavBar(props){

    const navStyle = {
        height: "150px",
        width: "100%",
        backgroundColor: "black",
        position: "absolute",
        top: "0",
        display: "inline-flex",
        flexDirection: "row-reverse",
        padding: "5px",
    }

    return(
        <div style={navStyle}>
            <div className="navText">
                    Hello
            </div>
            <div className="navText">
                    No
            </div>
            <div className="navText">
                bish
            </div>
            <Link className="navLink" to="/workshop">Workshop</Link>
        </div>


    )
}
