import './index.css';
import React ,{useState} from 'react';
function Event()
{
    const [color,setColor]=useState("green")
    const Display=()=>{
        setColor("red")

    }
    const Show=()=>{
        setColor("blue")
    }
    return(
        
        <body className="box" style={{backgroundColor:color}}>
        <button className="one" onClick={Display} onDoubleClick={Show} style={{textAlign:"center",color:"blue",fontSize:"35px"}}>Click</button>
        </body>
        
        
        
    )
}
export default Event;