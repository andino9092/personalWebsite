import Letter from "./Letter"

/**
 * props: array of delays
 * word: string containing letters
 */

export default function FloatingLetters(props){

    var delays = props.delays

    const word = props.word.split('')

    const letters = word.map((letter, i) => {
        return <Letter letter={letter} delay={delays[i]}/>
    })

    const style = {
        display: "inline-flex",
        flexDirection: "row",
    }
    return(
        <div style={style}>
            {letters}
        </div>
    )
}