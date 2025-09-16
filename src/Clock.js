import React,{useState} from "react";
function Clock()
{
    const [time,setTime]=useState();
    const current=new Date().toLocaleTimeString();
    const Update=()=>{
        const current=new Date().toLocaleTimeString();
        setTime(current)

    }
    setInterval(() => {
        Update()
    },1000);
    return(
        <>
        <h1>{time}</h1>


        </>
    )
}
export default Clock;