import React from "react";
function Condition(props)
{
    if(props.isStudent)
    {
        return <h1>Yes He is Student :{props.name}</h1>
    }
    else
    {
        return <h1>He is Not a student</h1>
    }
}
export default Condition;