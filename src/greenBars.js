

export default function GreenBars(props){
    const underBar ={
        width: "100%",
        height: "5px",
        top: "15px",
        borderRadius: "10%",
        backgroundColor: "green",
        position: "absolute",
      }

    return(
        <div className="greenBars">
            <div className='bars1'/>
            <div className='bars2'/>
            <div className='bars3'/>
            <div style={underBar}/>
        </div>
    )
}