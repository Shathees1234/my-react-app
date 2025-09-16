function Display(props)
{
    return(
        <>
             <div className="display" style={{border:"2px solid red",height:"558px",width:"220px",marginLeft:"500px",marginTop:"70px"}}>
                {props.children}
             </div>
            
        </>
    )
}
export default Display;