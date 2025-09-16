import React,{useEffect,useState} from 'react';
import Axios from "axios";
function SearchFilter()
{
    const [dis,setDis]=useState([]);
    useEffect(()=>{
               Axios.get('https://jsonplaceholder.typicode.com/users')
               .then(res=>setDis(res.data))
    },[])
 return(
    <>
     
     {dis.map(item=>{
        <div>
            {item.name}
        </div>
        
     })}
     
     
    </>


 )
}
export default SearchFilter;