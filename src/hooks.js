import React,{useState} from "react";
const [num,setValue]=useState(1);
function Head(){
     return<div>
        <h1>{num}</h1>
        <button onClick={(num)=>{

            num=num+1

        }}>click</button>
     </div>
}
export default Head;
