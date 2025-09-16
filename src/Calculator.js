import React,{useState} from "react";
import './index.css';
function Calculator()
{
  const [input,setInput]=useState('');
  const [result,setResult]=useState(0);
  const Getting=(event)=>{
    setInput(event.target.value)

  }
  const Update=()=>{
    setResult(input)
  }
   return(
    <>
         <center id="good">
            <div className="hi">
                <h1 style={{color:"#452767"}}>Display</h1>
         <input type="text" onChange={Getting} value={input} style={{height:30,width:300,backgroundColor:"lightgreen"}}/><br>
         </br><br/>
         <button id="one" onClick={Update} >click</button>
         <h1 style={{color:"#214356"}}>result:{eval(result)}</h1>
         </div>
         <div className="calc">
            <h1 style={{color:"#324516"}}>key board</h1>
         <button onClick={()=>{setInput(input+"1")}}>1</button>
         <button onClick={()=>{setInput(input+"2")}}>2</button>
         <button onClick={()=>{setInput(input+"3")}}>3</button><br/>
         <button onClick={()=>{setInput(input+"4")}}>4</button>
         <button onClick={()=>{setInput(input+"5")}}>5</button>
         <button onClick={()=>{setInput(input+"6")}}>6</button><br/>
         <button onClick={()=>{setInput(input+"7")}}>7</button>
         <button onClick={()=>{setInput(input+"8")}}>8</button>
         <button onClick={()=>{setInput(input+"9")}}>9</button><br/>
         <button onClick={()=>{setInput(input+"+")}}>+</button>
         <button onClick={()=>{setInput(input+"-")}}>-</button>
         <button onClick={()=>{setInput(input+"*")}}>*</button><br/>
         <button onClick={()=>{setInput(input+"/")}}>/</button>
         <button onClick={()=>{setInput('')}}>Ac</button>
         <button onClick={()=>{setInput('')}}>S</button>
         </div>
         </center>
         
    </>
   )
}
export default Calculator;