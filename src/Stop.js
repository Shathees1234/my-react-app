import React,{useState} from 'react';
import Displaying from './Displaying';
function Stop()
{
    const [time,setTime]=useState({ms:0,s:0,m:0,h:0});
    const [intel,setIntel]=useState();
    var UpdatedMs=time.ms,UpdatedS=time.s,UpdatedM=time.m,UpdatedH=time.h;
    const start=()=>{
        run();
        setIntel(setInterval(run,10));
    }
    const run=()=>{
        if(UpdatedMs === 1000)
        {
            UpdatedS++;
            UpdatedMs=0;

        }
        if(UpdatedS === 60)
        {
            UpdatedM++;
            UpdatedS=0;
        }
        if(UpdatedM === 60)
        {
            UpdatedH++;
            UpdatedM=0;

        }
        UpdatedMs++;
        return setTime({ms:UpdatedMs,s:UpdatedS,m:UpdatedM,h:UpdatedH})

    }
    const Reset=()=>{
        clearInterval(intel);
        return setTime({ms:0,s:0,m:0,h:0})

    }
    const Stop=()=>{
        clearInterval(intel);
    }

    return(
        <>
        <div style={{textAlign:"center",marginTop:"200px"}}>
                <h1 style={{color:"#643516",fontStyle:"initial",border:"4px solid #425637",width:"270px",marginLeft:"540px",backgroundColor:"lightgreen"}}>Stop Watch</h1>
                <h1 style={{color:"brown",border:"3px solid #328981",width:"270px",marginLeft:"540px",fontSize:"35px",backgroundColor:"lightblue"}}><Displaying time={time}/></h1>
                <button  style={{backgroundColor:"blue"}} onClick={start}>start</button>
                <button  style={{backgroundColor:"orange"}} onClick={Reset}>reset</button>
                <button  style={{backgroundColor:"green"}}  onClick={Stop}>stop</button>
       </div>
        

        </>
    )
}
export default Stop;