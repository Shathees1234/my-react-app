import React from "react";
function ListReact()
{
    var arr1=[{name:"shathees",age:21},{name:"akilan",age:27},{name:"eman",age:31},{name:"Nithish",age:19}];
    //arr1.sort((a,b)=>a.name.localeCompare(b.name));
    //arr1.sort((a,b)=>a.age-b.age);
    var arr3=arr1.filter((data)=>{
       return  data.name==="Nithish" || data.name==="akilan"
    })


    var arr2=arr3.map((item)=>{
        return <li key={item.age}>Name:{item.name}   and  Age:{item.age}</li>
    })
    
    return(
        <>
             <ol>{arr2}</ol>
        </>
    )
}
export default ListReact;