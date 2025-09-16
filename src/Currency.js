import React,{useState} from 'react';
function Currency()
{
    const [value,setValue]=useState();
    const [data1,setData1]=useState();
    const [data2,setData2]=useState();
    const Change=(e)=>{
        setValue(e.target.value)
    }
    const Submit=(e)=>{
        e.preventDefault();
        setData1(value/80)

    }
    const Indian=(e)=>{
        e.preventDefault();
        setData2(value*80)


    }
    return(
        <>
        <form  style={{textAlign:"center"}}>
            <h1 style={{color:"green"}}>Currency Convertor</h1>
        <input type="number" onChange={Change} placeholder="Enter USD or INR" style={{fontSize:"25px",backgroundColor:"lightblue"}}/>
        <button onClick={Submit} style={{fontSize:"25px",backgroundColor:"lightgreen",color:"#456789"}}>Convert to USD</button>
        <button onClick={Indian} style={{fontSize:"25px",backgroundColor:"yellow",color:"red"}}>Convert to INR</button>
        
        <br/>
        <h2 style={{color:"green"}}>USD&nbsp;=&nbsp;{data1}$&nbsp;</h2>
        <h2  style={{color:"red"}}>INR&nbsp;=&nbsp;{data2}Rupees&nbsp;</h2>

        </form>

        </>
    )
}
export default Currency;