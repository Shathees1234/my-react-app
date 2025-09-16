import React from "react";
import Doctor from './Doctor.js';
function Ter(props)
{
    return(
        <>
        {props.isDoctor?<h1>yes he is Doctor</h1>:<h1>The Person Not A Doctor!</h1>}
            
        </>
    )
}
export default Ter;