import React,{useState} from "react";
function Digital()
{
    const curtime=new Date().toLocaleTimeString();
    const [time,setTime]=useState(curtime);
    const Update=()=>{
        const curtime=new Date().toLocaleTimeString();
        setTime(curtime)
    }
    setInterval(()=>{
        Update()
    },1000)

    return(
        <>
         <center style={{border:"solid",margin:"150px"}}>
          <h1 style={{color:"red"}}>Digital Clock</h1>
          <h1>{time}</h1>
          </center>
        </>
    )
}
export default Digital;