
import BouncingBall from "./BouncingBall"

export default function Introduction(props){

    return(

        <div className="intro">
            <div className="introBalls">
                <BouncingBall form={1}/>
                <BouncingBall form={2}/>
                <BouncingBall form={3}/>
            </div>
        </div>
    )
}