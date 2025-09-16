import React from "react";
function Ternary()
{
    const age=prompt("Enter age:");
    return(
        <>
        {age>18?<h2>Elligible for Vote</h2>:<h2>Not Eligible For Vote</h2>}

        </>
    )
}
export default Ternary;