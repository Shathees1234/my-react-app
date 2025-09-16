import React,{useState} from "react";
function Table()
{
    const [value,setValue]=useState([]);
    const [name,setName]=useState("");
    const [age,setAge]=useState("");
    const [editIndex,setEditIndex]=useState(null);
    const Submit=(e)=>{
        e.preventDefault();
        if(editIndex !== null)
        {
            var Update=value.map((item,index)=>(
               index === editIndex?{name:name,age:parseInt(age)}:item
            ))
            setValue(Update);
            setEditIndex(null)
        }
        else{
            setValue([...value,{name:name,age:parseInt(age)}]);
            setName("");
            setAge("");
        }
       
     

    }
    const Delete=(index)=>{
        setValue(value.filter((_,id)=>index != id));
    }
    const  Edit=(index)=>{
        var a=value[index];
        setName(a.name);
        setAge(a.age);
        setEditIndex(index);

    } 
    return(
        <>
          <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" value={name}/><br/><br/>
          <input type="text" onChange={(e)=>setAge(e.target.value)} placeholder="Enter Age" value={age}/><br/><br/>
          <button onClick={Submit}>submit</button><br/><br/>
          <table border="2">
            <tr>
                <td>Name</td>
                <td>Age</td>
                <td>delete</td>
                <td>Update</td>
            </tr>
            
               {value.map((item,index)=>{
                 return(
                    <tr>
                     <td key={index}>{item.name}</td>
                     <td key={index}>{item.age}</td>
                     <td key={index}><button onClick={()=>Delete(index)}>Delete</button></td>
                     <td><button onClick={()=>Edit(index)}>Update</button></td>
                    </tr>
                   )
                })}

            
          
        </table>

        </>
    )
}
export default  Table;