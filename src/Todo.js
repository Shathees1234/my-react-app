import React,{useState} from "react";
function Todo()
{
    const [initial,setInitial]=useState("");
    const [data,setData]=useState([]);
    const Change=(e)=>{
        setInitial(e.target.value)

    }
    const Button=()=>{
        var store=[...data,initial];
        setData(store);
        setInitial("")
    }
    const Del=(index)=>{
        var filterData=data.filter((cur,id)=>{
            return index !== id;
        })
        setData(filterData)
    }
    return(
        <>
        <div style={{textAlign:"center"}}>
            <h1 style={{color:"#197467"}}>ToDo List</h1>
           <input type="text" onChange={Change} placeholder="Enter Task" style={{fontSize:"30px",boxShadow:"0px 0px 3px 2px silver",backgroundColor:"lightpink"}} value={initial}/>&nbsp;
           <button onClick={Button} style={{fontSize:"30px",backgroundColor:"lightblue",boxShadow:"0px 1px 3px 2px silver"}}>Add</button><br/>
           <h1>{data.map((item,index)=>{
            return(
                <>
                 <h5><li type="None" style={{color:"green"}}>{item} &nbsp;<button onClick={()=>Del(index)} style={{backgroundColor:"black",color:"white",boxShadow:"0px 0px 1px 2px lightblue"}}>Delete</button></li> </h5>
                
                 
                </>
            )
           })}</h1>
             </div>
        </>
    )
}
export default Todo;