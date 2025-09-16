import React from "react";
import ChildA from './ChildA.js';
import { createContext } from "react";
const myvalue=createContext();
function Parent(){
    
    return(
        <>
          <myvalue.Provider value={"love for your studies!"}>
          <ChildA/>
          </myvalue.Provider>
          
        </>
    )
}
export default Parent;
export {myvalue}