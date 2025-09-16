import React,{useState} from "react";
function Expenses()
{
  const [expense,setExpense]=useState([]);
  const [des,setDes]=useState("");
  const [amount,setAmount]=useState(null);
  const [total,setTotal]=useState(0);
  const Submit=(e)=>{
    e.preventDefault();
    setExpense([...expense,{des:des,amount:amount}]);
    setTotal(total+parseFloat(amount));
    setDes("");
    setAmount("");
  }
  return(
    <>
    <div style={{backgroundColor:"silver",border:"1px solid black"}}>
    <div style={{textAlign:"center"}}>
      <h1 style={{backgroundColor:"aqua"}}>Expenses Tracker</h1>
    <input type="text" onChange={(e)=>setDes(e.target.value)} value={des} placeholder="Enter Description" style={{fontSize:"25px",backgroundColor:"pink"}}/><br/><br/>
    <input type="text" onChange={(e)=>setAmount(e.target.value)} value={amount} placeholder="Enter Amount" style={{fontSize:"25px",backgroundColor:"lightblue"}}/><br/><br/>
    <button onClick={Submit} style={{fontSize:"20px",backgroundColor:"black",color:"white"}}>Total</button><br/>
    {
      expense.map((item,index)=>{
        return(
          <h3 key={index}>Description:{item.des} and Amount:{item.amount}</h3>
        )
      })

    }
    
   <h2  style={{fontSize:"20px",height:"20px",width:"200px",marginLeft:"550px"}}> Total Is INR:{total}</h2>
   </div>
   </div>

    </>
  )
}
export default Expenses;