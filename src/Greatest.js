import React,{useState} from 'react';
function Greatest()
{
    const [n1,setN1]=useState("");
    const [n2,setN2]=useState("");
    const [n3,setN3]=useState("");
    const [res,setRes]=useState();
    const Submit=(e)=>{
        e.preventDefault();
        var a=parseInt(n1);
        var b=parseInt(n2);
        var c=parseInt(n3);
        if(!isNaN(a) && !isNaN(b) && !isNaN(c))
        {
            if(a === b && b === c)
            {
                setRes("THE a,b and c are all equal");

            }
            else if(a >=b && a>=c){
                setRes("THE 'a' is GREATEST NUMBER!");
            }
            else if(b >=a && b>=c){
                setRes("THE 'b' is GREATEST NUMBER!");
            }
            else{
                setRes("THE 'c' is GREATEST NUMBER!");
            }
            setN1("");
            setN2("");
            setN3("");

        }
        else{
            alert("ENTER VALID INPUT");
        }

    }
    return(
        <>
        
        <div style={{textAlign:"center",backgroundColor:"lightskyblue",border:"1px solid blue",boxShadow:"1px 0px 1px 5px aqua"}}>
        <form onSubmit={Submit}>
            <h1>Greatest of three numbers</h1>
            <input type="text" onChange={(e)=>setN1(e.target.value)} placeholder='NUMBER-1' required value={n1}/><br/><br/>
            <input type="text" onChange={(e)=>setN2(e.target.value)} placeholder='NUMBER-2' required value={n2}/><br/><br/>
            <input type="text" onChange={(e)=>setN3(e.target.value)} placeholder='NUMBER-3' required value={n3}/><br/><br/>
            <button type="submit">greatest</button>
        </form>
        <h2>{res}</h2>
        </div>


        </>
    )

}
export default Greatest;