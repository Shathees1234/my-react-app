import React,{useState,useEffect} from 'react';
function Dictionary()
{
    const [ini,setIni]=useState("");
    const [data,setData]=useState([]);

     const Change=(event)=>{
           setIni(event.target.value)
     }
     const Clicked=async()=>{
        var Api=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${ini}`);
        var JsonData= await Api.json();
        console.log(JsonData);
        setData(JsonData);
        setIni("");
     }
    



    return(
        <>
        <div style={{textAlign:"center",border:"2px ridge lightgreen",boxShadow:"2px 1px 3px 5px brown",width:"600px",marginLeft:"340px",backgroundColor:"silver"}}>
        <h1 style={{fontSize:"38px",color:"white",backgroundColor:"black"}}>Dictionary</h1>
        <input type="text" onChange={Change} placeholder="Enter Word" value={ini} style={{fontSize:"30px",boxShadow:"0px 0px 0px 2px lightgreen"}}/>&nbsp;
        <button onClick={Clicked} style={{fontSize:"32px",backgroundColor:"black",color:"yellow"}}>click</button>
        {data.map((item,index)=>{
            return(
                <div key={index}>
                <h1 style={{color:"brown"}}>Word:{item.word}</h1>
                <h1 style={{color:"#345612"}}>part Of Speech:{item.meanings[0].partOfSpeech}</h1>
                <h1 style={{color:"#376890"}}>synonyms:{item.meanings[0].synonyms[0]}</h1>
                <h1 style={{color:"#341256"}}>definiton:{item.meanings[0].definitions[0].definition}</h1>
                <button onClick={()=>window.open(item.sourceUrls[0],"_blank")} style={{fontSize:"25px",backgroundColor:"black",color:"yellow"}}>More Reference</button>
                </div>
            )
        })}
        </div>

        </>
    )
}
export default Dictionary;
