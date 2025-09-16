import React, { Suspense } from 'react';
const LazyLoading=React.lazy(()=>import('./LazyLoading.js')
    
)
function Ac(){
    return(
        <>
            <Suspense fallback={<h1>Loading......</h1>}>
                 <LazyLoading/>
            </Suspense>
           
        </>
    )
}
export default Ac;
