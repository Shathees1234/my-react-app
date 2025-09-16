import React from "react";
function Jsxhtml()
{
    //var Ele=React.createElement('h1',{},"Create Element without jsx");
    var a=prompt("enter age:");
    if(a>=18)
    {
        a=<h1>elligible for vote</h1>
    }
    else
    {
        a=<h1>not elligible</h1>
    }
    var c=prompt("enter your mark:");
    return(
        <>
          <h1>welcome to jsx </h1>
          
          <br/>
          {a}<br/>
          {c>=35?<h1> you are pass </h1>:<h1>you are fail</h1>}

          
        </>

    )
}
export default Jsxhtml;