

export default function BouncingBall(props){

    const form = () =>{
        const init = "bouncingBall "
        if (props.form === 1){
            return init + "b1"
        }
        else if (props.form === 2){
            return init + "b2"
        }
        else if (props.form === 3){
            return init + "b3"
        }
    }


    return(
        <div style={{ height: "200px"}}>
            <div className={form()}>

            </div>

        </div>
    )
}