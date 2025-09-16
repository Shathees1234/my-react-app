import React from "react";
import Prop2 from "./Prop2.js";
import Display from "./Display.js";
function Prop1()
{
  
    return(
        <>
            <Display>
                <Prop2 name="shathees" age={21}/>
                <Prop2 name="arya" age={31}/>
                <Prop2 name="surya" age={27}/>
                <Prop2 name="Rajiv" age={34}/>
            </Display>
        </>
        
    )
}
export default Prop1;