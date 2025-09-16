import React,{useState} from 'react';
function Basic()
{
    const [name,setName]=useState(""); 
    const [res,setRes]=useState("");
    const Submit=(e)=>{
        e.preventDefault();
        setRes("Name:"+name);
        setName("");
       
        


    }
    const InputValue=(e)=>{
        setName(e.target.value);

    }
   
    return(
        <>
        <form onSubmit={Submit}>
        <input type="text" placeholder="Enter Name" onChange={InputValue} required value={name}/><br/><br/>
        <button type="submit">Submit</button>

        </form>
        <h2>{res}</h2>
        
       

        </>
    )
}
export default Basic;