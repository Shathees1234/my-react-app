import React,{useState} from "react";
function Array()
{
    const [name,setName]=useState("");

    const [res,setRes]=useState([]);
    const InputValue=(e)=>{
        setName(e.target.value);

    }
    

    const Submit=(e)=>{
        e.preventDefault();
        var store=[...res,name];
       
        setRes(store);
        setName("");
    }
    return(
        <>
           <form onSubmit={Submit}>
                <input type="text" placeholder="ENTER NAME" onChange={InputValue} value={name} /><br/><br/>
                <button type="submit">submit</button>
           </form>
          <h2> <ul>{res.map((value)=>(
            
                <li>{"name:"+value}</li>
            
           ))}</ul></h2>

        </>
    )
}
export default Array;
