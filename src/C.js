import React from "react";
function C(props)
{
 if(props.isStudent)
 {
    return <h1>yes he is Student:{props.name}</h1>
 }
 else
 {
    return <h1>No he not student</h1>
 }
}
export default C;