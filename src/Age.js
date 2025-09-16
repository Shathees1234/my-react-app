import React,{useState} from 'react';
function Age()
{
    const [age,setAge]=useState("");
    const [dis,setDis]=useState();
  
    var value1=parseInt(age);
    var value=2024-value1;
    const Submit=(e)=>{
        e.preventDefault();
    if(value >=18)
    {
        setDis("Elligible for Vote!!!");

    }
    else{
        setDis("Not  Elligible for Vote!!!");
    }
    setAge("");
}

    return(
        <>
        <input type="date" placeholder="birth year" onChange={(e)=>setAge(e.target.value)} value={age}/>
        <button onClick={Submit}>submit</button>
        <h1>{dis}</h1>
        </>
    )
}
export default Age;