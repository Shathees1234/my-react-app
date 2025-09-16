import React,{useState,useEffect} from 'react';
import axios from 'axios';
function Http()
{
    const [data,setData]=useState([]);
  
    useEffect(()=>{
     axios.get('https://jsonplaceholder.typicode.com/users').then(response=>setData(response.data))

    },[])
  
    return(
        <>
             <input type="text" onChange={event=>setData(event.target.value)} value={name}/>
             
             {data.map(item=><li key={item.id}>{item.name.includes(name)?item.name:""}</li>)}
            
        </>
    )
}
export default Http;
