import React,{useState} from "react";
function Qus({Question,index,Sub})
{
    const Show=(e)=>{
        var a=(e.target.value === Question.Answer?1:0);
        Sub(a)

    }
   
    return(
        <>
        <br/>
        <div style={{border:"2px double black",width:"390px"}}>
            
          <h1> {Question.title}</h1> 
          <div onChange={Show} style={{fontSize:"20px"}}>
          <input type="radio" name={index} value="A"/>{Question.options[0]}
          <input type="radio"  name={index} value="B"/>{Question.options[1]}
          <input type="radio"  name={index} value="C"/>{Question.options[2]}
          <input type="radio"  name={index} value="D"/>{Question.options[3]}
          </div>
          <br/><br/>
          </div>
      
         

        </>
    )
} 
export default Qus;