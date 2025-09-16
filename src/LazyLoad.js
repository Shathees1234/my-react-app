import React, { Suspense } from "react";
const Lazy=React.lazy(()=>import ("./Event.js"))

import Fine from './Fine.js';
function LazyLoad()
{
    return(
        <>
       
           
       <Fine/><hr/><hr/><br/>
        <Suspense fallback={<h1>Loading on .....</h1>}>
               <Lazy/>
        </Suspense>
     

        </>
    )
}
export default LazyLoad;