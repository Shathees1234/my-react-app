import React from "react";
import Hello from "./Hello.js";
const upHello=Hoc(Hello);
const Hoc=(upHello)=>
{
    function New(){
        return 
        
        <div style={{border:"2px solid red",height:"auto",width:"100px"}}>
             <upHello/>
        </div>
        
        return New;
    }
    
}
export default Hoc;