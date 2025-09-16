import React from "react";
import Hello from "./Hello.js";
import Big from "./Big.js";
const Update=Big(Hello);
console.log(Update);

function Super()
{
    return(
        <>
         <Hello />
         <hr/>
         <Update />
        </>
    )
}
export default Super;