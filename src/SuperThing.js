import React,{useState} from "react";
function SuperThing(Component)
{
    function SmartWork()
    {
        const [counts,setCounts]=useState(0);
        const Inc=()=>{
        setCounts(counts+1)
         }
        return(
            <center>
                    <div style={{color:"#564567",backgroundColor:"lightblue",border:"3px double green"}}>
                     <Component />
                    <h1>Count is :{counts}</h1>
                    <button onClick={Inc}>Increase</button>
               
            </div>
            </center>
           
        )
    }
    return SmartWork

}
export default SuperThing;