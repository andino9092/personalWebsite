import styled, {keyframes} from 'styled-components';
/*
    props:
        delay: delay for animation
        letter: string of content in div
        yUp: translation of float up
        yDown: translation of float down
*/




export default function Letter(props){

    var float = keyframes`
        25%{
            transform: translateY(${props.yUp}px);
        }
        75%{
            transform: translateY(${props.yDown}px);
        }
    `;
    
    var Float = styled.div`
        animation-name: ${float} ;
        animation-duration: 3s;
        animation-delay: ${props.delay}s;
        animation-timing-function: ease-out;
        animation-iteration-count: ${props.iterations ? props.iterations : 1};
    `

    return(
        <Float>
            {props.letter}
        </Float>

    )
}
