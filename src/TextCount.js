import React,{useState} from 'react';
function TextCount()
{
    const [text,setText]=useState("");
    const Change=(e)=>{
        setText(e.target.value);
    }
    var Lettercount=text.length;

    var Wordcount=text.split(" ").filter(Boolean).length;
    return(
        <>
        <h2 style={{color:"brown",textAlign:"center",marginTop:"50px"}}>Lettercount and WordCount</h2>
        <textarea placeholder='enter the text-->' rows="10" cols="20" onChange={Change} style={{boxShadow:"0px 2px 3px 7px brown",marginLeft:"540px",marginTop:"50px"}}/>
        <h3 style={{marginLeft:"540px",width:"130px",boxShadow:"2px 1px 1px 2px brown"}}>Lettercount:{Lettercount}</h3>
        <h3 style={{marginLeft:"540px",width:"130px",boxShadow:"2px 1px 1px 2px brown"}}>WordCount:{Wordcount}</h3>

        </>
    )
}
export default TextCount;