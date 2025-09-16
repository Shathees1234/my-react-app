import React from 'react';
import HocNew from './HocNew';
function HocOld(){
    return(
        <>
            <h1>welcome to Hoc</h1>
        </>
    )
}
export default HocNew(HocOld);
