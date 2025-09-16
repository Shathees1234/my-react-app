import React,{useState} from 'react';
function Bank()
{
    const [bal,setBal]=useState(0);
    const [am1,setAm1]=useState();
    const [am2,setAm2]=useState();
    const Submit=(e)=>{
        e.preventDefault();
        if(am1>0){
            var a=bal+parseInt(am1);
            setBal(a);
            setAm1("");
         }
         else{
            alert("Please Enter valid Deposit Amount!");
            setAm1("");
         }
      
       }
    const WithDraw=(e)=>{
        e.preventDefault();
        if(am2<=bal && am2>0){

            var b=bal-parseInt(am2);
            setBal(b);
            setAm2("");
        }
        else{
            alert("Insufficient Balance! or Enter Valid Amount");
            setAm2("");
        }
      
    }
   
    
    return(
            <div style={{textAlign:"center"}}>
            <h1>Bank</h1>
            <h2>Balance : {bal}</h2>
            <form >
            <input type="number" placeholder="Deposit" onChange={(e)=>setAm1(e.target.value)} style={{fontSize:"20px",color:"green",backgroundColor:"",boxShadow:"1px 1px 2px 2px lightgreen"}}  value={am1}/><br/><br/>
            <button onClick={Submit} style={{fontSize:"20px",backgroundColor:"black",color:"white"}}>Balance-After-Deposit</button><br/><br/>
            <input type="number" placeholder='Withdraw' style={{fontSize:"20px",backgroundColor:"",color:"green",boxShadow:"1px 1px 2px 2px lightgreen"}} onChange={(e)=>setAm2(e.target.value)} value={am2}/><br/><br/>
            <button onClick={WithDraw} style={{fontSize:"20px",backgroundColor:"black",color:"white"}}>Balance-After-Withdraw</button>
        ,
            </form>

            
    
            </div>
        )
  
   
}
export default Bank;