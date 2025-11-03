import { blueGrey } from '@mui/material/colors';
import React,{useState} from 'react';
function EmiSystem()
{
    const [principle,setPrinciple]=useState();
    const [interest,setInterest]=useState();
    const [year,setYear]=useState();
    const [res,setRes]=useState();
    const [err,setErr]=useState();
    const [err1,setErr1]=useState();
    const [err2,setErr2]=useState();
    const Handle=(e)=>{
        var value=e.target.value;
        var name=e.target.name;
        if(name === "principle")
        {
            setPrinciple(value);
            if(!Number(value))
            {
                setErr("must  principle is a number input");

            }
            else{
                setErr("");
            }
        }
        else if(name ===  "interest")
        {
            setInterest(value);
            if(!Number(value))
                {
                    setErr1(" interest must be a valid number input");
    
                }
                else{
                    setErr1("");
                }
        }
        else if(name === "year")
        {
            setYear(value);
            if(!Number(value))
                {
                    setErr2("year must  is a number input");
    
                }
                else{
                    setErr2("");
                }
        }

    }
    const Submit=(e)=>{
        e.preventDefault();
        var r=interest/12/100;
        var p=principle;
        //emi=p(r(1+r)^n/(1+r)^n -1)
        var power=Math.pow(1+r,year*12);
        var result=p*((r*power))/(power-1);
        setRes(result);
        setPrinciple("");
        setInterest("");
        setYear("");

    }
    return(
        <>
        <div style={{textAlign:"center",marginTop:"80px",background:"linear-gradient(blue,#254732,#090316,#216789,lightpink)",border:"1px dotted blue"}}>
            <h1 style={{backgroundColor:"rgb(22,125,6)",color:"black"}}>Emi Calculator</h1>
            <form onSubmit={Submit}>
               
                <input type="text" name="principle" placeholder='Enter Principle' style={{fontSize:"25px",boxShadow:"1px 1px 2px 2px aqua"}} onChange={Handle} value={principle} required/> <p style={{color:"brown",fontSize:"30px"}}>{err}</p><br/><br/>
              
                <input type="text" name="interest" placeholder='Enter  Interest' style={{fontSize:"25px",boxShadow:"1px 1px 2px 2px aqua"}} onChange={Handle} value={interest} required/><p style={{color:"brown",fontSize:"30px"}}>{err1} </p><br/><br/>
              
                <input type="text" name="year" placeholder='Enter  Year'  style={{fontSize:"25px",boxShadow:"1px 1px 2px 2px aqua"}} onChange={Handle} value={year} required/><p style={{color:"brown",fontSize:"30px"}}>{err2} </p><br/><br/>
                <button type="submit"  style={{fontSize:"25px",backgroundColor:"black",color:"pink",boxShadow:"1px 1px 1px 2px white"}}>Calculate Emi</button>
            </form>
               <h2 style={{backgroundColor:"rgb(232,45,6)",color:"black"}}>Emi(Rupees):{Math.ceil(res)}</h2>
        </div>
        </>
    )

}
export default Emi;
