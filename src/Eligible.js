import  React,{useState} from 'react';
function Eligible()
{
    const [age,setAge]=useState();
    const [ans,setAns]=useState(""); 
    const [err,setErr]=useState("");
    const InputValue=(e)=>{
        if(Number(e.target.value)){
          setAge(e.target.value);
          setErr("");
        }
        else{
            setErr("Age Must Be Number");
        }
      // setAge(e.target.value);
        
        
    } 
    const Submit=(e)=>{
        e.preventDefault();
        if(age >=18){
            setAns("Eligible for vote");
            setAge("");
        }
        else{
            setAns("Not Eligible for vote");
            setAge("");
        

        }
       
        
    }


    return(
        <div style={{textAlign:"center",marginTop:"200px",background:"linear-Gradient(#320176,#129076)",border:"2px solid green"}}>
            <h1 style={{fontSize:"30px",backgroundColor:" brown"}}>Voter Eligibility </h1>
        <form onSubmit={Submit} >
        <input type="text"  placeholder="Enter Age" onChange={InputValue} value={age} style={{fontSize:"30px",backgroundColor:"#346721",boxShadow:"1px 1px 2px 3px pink}"}}/><h2 style={{color:"black"}}>{err}</h2><br/>
        <button type="submit" style={{fontSize:"30px",backgroundColor:"black",color:"white"}}>Check for vote</button>
        </form>
        <h2 style={{fontSize:"35px"}}>{ans}</h2>

        </div>
    )
}
export default Eligible;