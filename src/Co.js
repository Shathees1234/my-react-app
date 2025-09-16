import React from "react";
/*function Co()
{
    var num=prompt("enter num:");
    var num2=(num==="1");
    if(num2)
    {
        num=1;
    }
    else{
        num="Not a 1";
    }
    return(
        <>
        <h1>{num}</h1>

        </>
    )

}
    */
function Co(props)
{
    var name;
    if(props.isSuperman)
    {

        name="Superman";

    }
    else{
        name="Not Superman";
    }
    return(
        <>
          <h1>{name}</h1>
            
        </>
    )
}
export default Co;