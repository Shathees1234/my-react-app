import React,{useState} from 'react';
function Support(){
    const [count,setCount]=useState(0);
    const [time,setTime]=useState(1);
    const increase=()=>{
        setCount((count)=>count+1)
    }
    const decrease=()=>{
        setCount((count)=>count-1)
    }
    const reset=()=>{
        setCount(0)
    }
    const Timing=()=>{
         setTime((time)=>time+1)
    }
    
   
    return(
        <>
        <h1>Count :{count}</h1>
        <h1>Time:{time}</h1>
        <button onClick={increase}>Increment</button>
        <button onClick={decrease}>Decrement</button>
        <button onClick={reset}>reset</button><br></br>
        <button onClick={Timing}>time</button>
       
        </>
    )
}
export default Support;