import React,{useState} from "react";
import Counter from "./Counter.js";
import Timer from "./Timer.js";
function MemoReact()
{
    const [count,setCount]=useState(0);
    const [timer,setTimer]=useState(1);
    const Incraese=()=>{
        setCount(count+1)

    }
    const multiply=()=>{
        setTimer(timer*3)
    }
    return(
        <>
        
        
        <button onClick={Incraese}>Increment</button>
        <button onClick={multiply}>Multiply</button>
        <Counter value={count}/>
        <Timer value2={timer}/>

        </>
    )
}
export default MemoReact;