import GreenBars from './greenBars';
import BouncingBall from './BouncingBall';
import DecorationLines from './DecorationLines';

import "./workshop.css"

export default function WorkShop(props){
    const flexState = {
        display: "flex",
        gap: "20px"
        
    }

    return(
        <div className='workshop'>
            
            <GreenBars/>
            <div className="split">
                <div className='moneyFloat'>
                    <div className='welcome'>
                        Welcome to my workshop!
                    </div>
                    <div className='subText'>
                        This page is meant for new CSS and React components I am working on just for fun and 
                        perhaps for future use.
                    </div>
                </div>
                <div className='decorationBackground'>
                    <DecorationLines/>
                </div>
            </div>
            <div style={flexState}>
                <BouncingBall form={1}/>
                <BouncingBall form={2}/>
                <BouncingBall form={3}/>
            </div>
        </div>
    )
}