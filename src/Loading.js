import React, { Suspense } from "react";

function Loading()
{
    const Lazy=React.lazy(()=>import('./Lazy.js'));
    return(
        <>
        <center>
            <div style={{margin:"200px"}}>
        <h1 style={{border:"2px solid blue",height:"100px",width:"140px",textAlign:"center",padding:"30px"}}>Hello World</h1>
         <Suspense fallback={<h1>Loading.......</h1>}>
           <Lazy/>
        </Suspense>
          </div>
        </center>
       
            
        </>
    )
}
export default Loading;