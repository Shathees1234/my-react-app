import React,{useState} from "react";
function Hide()
{
    const [text,setText]=useState(true);
    return(
        <>
        <button onClick={()=>setText(!text)}>{text?"hide":"show"}</button>
        {
            text?<h1>How are you?</h1>:""
        }

        </>
    )
}
export default Hide;