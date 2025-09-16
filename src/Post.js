import React,{useEffect, useState} from 'react';
import axios from 'axios';
function Post()
{
    const [data,setData]=useState({fname:"",lname:""});
    const Change=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
        
      

    }
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>console.log(res))
       },[])
    function Submit(ev){
        ev.preventDefault()
         
         axios.post('https://jsonplaceholder.typicode.com/users',data).then((res)=>console.log(res)).catch((err)=>console.log(err))
    }
    const Delete=()=>{
        
         
        axios.delete('https://jsonplaceholder.typicode.com/users/1').then((res)=>console.log(res)).catch((err)=>console.log(err))
   }
   const Update=()=>{
     axios.put('https://jsonplaceholder.typicode.com/users').then((res)=>console.log(res)).catch((err)=>console.log(err));
   }
 
    
    return(
        <>
        <form onSubmit={Submit}>
                      Fname:<input type="text" name="fname" onChange={Change} /><br/>
                      Lname:<input type="text" name="lname" onChange={Change}/><br/>
                      
                      <input type="submit" />
                      <button onClick={Delete}>del</button>
                      <button onClick={Update}>Update</button>

        </form>
        

        </>
    )
}
export default Post;