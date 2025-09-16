import React from "react";
import { useContext } from "react";
import { myvalue } from "./Parent";
function ChildC(){
    const context=useContext(myvalue)
    return(
        <>
         <h1>{context}

            
         </h1>
           
        </>
    )
}
export default ChildC;