import React from "react";
import Con2 from "./Con2.js";
const val1=prompt("enter professor:");
var val2=(val1 === "true");
function Con1()
{
    return(
        <>
              <Con2 Professor={val2} subject="Software testing"/>
        </>
    )
}
export default Con1;