import React,{useEffect, useState} from "react";
import Axios from 'axios';
function WeatherApp()
{
    const [city,setCity]=useState("");
    const [data,setData]=useState([]);
    const Change=(e)=>{
        setCity(e.target.value)

    }
    const Submit=async(e)=>{
        e.preventDefault();
        Axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=643d6c8f0049d7732aab38687b0f0807&units=metric`).then((res)=>setData("Temparature at"+" "+city+"  "+res.data.list[0].main.temp+" "+" degree celcius"));
        setCity("");
    }
   
    return(
        <>
          
        <div style={{border:"3px solid lightblue",boxShadow:"1px 1px 2px 3px lightgreen",marginLeft:"460px",width:"400px",padding:"30px",backgroundColor:"silver"}}>
        <h1 style={{fontSize:"35px",color:"brown",textAlign:"center",marginTop:"2px",backgroundColor:"white"}}>Wheather App</h1><br/>
        <form onSubmit={Submit}>
            <input type="text" placeholder="Enter City" onChange={Change} value={city} style={{fontSize:"30px",boxShadow:"2px 2px 3px 4px aqua",boxShadow:"1px 1px 4px 3px lightgreen"}}/><br/><br/><br/>
            <button type="submit" style={{fontSize:"25px",backgroundColor:"aqua",color:"brown"}}>Get Temparature</button><br/><br/><br/>
        </form>
        <img src="https://th.bing.com/th/id/R.dc404c7c3562dcecd7b681638236ec4b?rik=TyBtVyC9zFcqag&riu=http%3a%2f%2fmedia.idownloadblog.com%2fwp-content%2fuploads%2f2013%2f12%2fiOS-7-weather-app-icon.png&ehk=hpuVSBLGzEOV6n8HGhGAvbvZ8VTIV2M04qAdwp%2brKX8%3d&risl=&pid=ImgRaw&r=0" alt="img not found" width="50px" height="45px" />
        <h1 style={{display:"inline"}}>{data} &nbsp;</h1>
        </div>
      
      
    


        </>
    )
}
export default Wheather;


