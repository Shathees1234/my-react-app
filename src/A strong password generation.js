import React,{useState} from "react";
import validator from "validator";
function Password()
{
    const [err,setErr]=useState("");
    const Change=(event)=>{
        if(validator.isStrongPassword(event.target.value,
            {
                minLength:4,
                minUppercase:2,
                minLowercase:1,
                minNumbers:1,
                minSymbols:2
            }
        ))
        {
           setErr("strong Password")

        }
        else{
            setErr("It is Not a strong Password,please enter valid one")
        }

    }

    return(
        <>
           <input type="password" onChange={Change} placeholder="Enter Password" style={{fontSize:"30px"}}/><h2>{err}</h2>

        </>
    )
}
export default Password;
