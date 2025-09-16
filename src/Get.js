import React,{useEffect,useState} from "react";
import axios from "axios";
function Get()
{
    const [datas,setDatas]=useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>setDatas(res.data))
       },[])
    return(
        <>
        <h1>Get data from Api</h1>
        {

             datas.map((item)=>{
                return <li key={item.id}>{item.name}</li>
             })

        }

        </>
    )
}
export default Get;