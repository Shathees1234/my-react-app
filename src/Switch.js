import React,{useState} from "react";
function Switch()
{
    const [val,setVal]=useState("");
    const [upd,setUpd]=useState();
    var Option=parseInt(val);
    const Submit=(e)=>{
        e.preventDefault();

    switch(Option)
    {
        case 1:
            setUpd("Monday");
            break;
        case 2:
            setUpd("Tuesday");
            break;
        case 3:
            setUpd("Wednesday");
            break;
        case 4:
            setUpd("thursday");
            break;
        case 5:
            setUpd("friday");
            break;
        case 6:
            setUpd("saturday");
            setVal("");
            break;
            
        case 7:
            setUpd("Sonday");
            break;
            setVal("");
        default:
            alert("please Enter (1 to 7)");
            break;
      



    }   setVal("");}
   
    return(
        <>
        <input type="text" placeholder="Enter 1-7" onChange={(e)=>setVal(e.target.value)} value={val}/><br/><br/>
        <button onClick={Submit}>submit</button><br/><br/>
        {upd}
        </>
    )
}
export  default Switch;