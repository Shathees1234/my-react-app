import React,{useState} from "react";
function Ladder()
{
    const [val,setVal]=useState();
    const [a,setA]=useState("");
    const [b,setB]=useState("");
    var A=parseInt(a);
    var B=parseInt(b);
    const Submit=(e)=>{
        e.preventDefault();
        if(A > B)
        {
            setVal(" A greater than B");

        }
        else if(A < B)
        {
            setVal(" B greater than A");
        }
        else{
            setVal(" Both are equal");
        }
        setA("");
        setB("");
    }
    return(
        <>
        <input type="text" onChange={(e)=>setA(e.target.value)} placeholder="Enter A" value={a}/><br/><br/>
        <input  type="text" onChange={(e)=>setB(e.target.value)} placeholder="Enter B" value={b}/><br/><br/>
        <button onClick={Submit}>submit</button><br/><br/>
        <h1>{val}</h1>

        </>
    )
}
export default Ladder;