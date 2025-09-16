import React from "react";
function List(){
    const arr=[{id:1,name:"shathees",weight:60},
        {id:2,name:"aravinth",weight:50},
        {id:3,name:"gopal",weight:76},
        {id:4,name:"barath",weight:80}
    ];
    arr.sort((a,b)=>
        a.name.localeCompare(b.name)
     )
    /*arr.sort((a,b)=>a.weight-b.weight)*/
    const arr5= arr.filter((item)=> item.weight>50 );
     
    const items=arr5.map((data)=>{
        return <h1><li key={data.id}>{data.name} weight is {data.weight} </li></h1>
    })
    return <ul>{items}</ul>
}
export default List;