import React,{useState} from "react";
import Questions from './Question.json';
import Qus from './Qus'
function Quizs()
{
    const [total,setTotal]=useState(0);
    const Sub=(a)=>{
      
        setTotal( total+a)
      
        
    }
    const Ok=(e)=>{
        e.preventDefault();
        alert("The Total Score Is:"+total+"/5")

    }
    return(
        <div>
         <form onSubmit={Ok}  style={{backgroundColor:"lightpink",width:"395px",textAlign:"center",marginLeft:"460px"}}>
            <h1>Quiz App</h1>
        {Questions.map((Question,index)=>{
            return  <Qus Question={Question} index={index} Sub={Sub}/>
        })}<br/><br/>
        

        <button type="submit" style={{backgroundColor:"black",color:"white",fontSize:"23px"}}>Total</button>
        </form>

        </div>
    )
}
export default Quizs;