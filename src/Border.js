import React from "react";
function Border(Component)
{
    function New()
    {
        return(
            <div style={{border:"2px solid blue",backgroundColor:"lightblue",height:"auto",width:"150px",padding:"20px",marginLeft:"500px",marginTop:"100px"}}>
                   <Component/>
            </div>
        )

    }
    return New;
}
export default Border;