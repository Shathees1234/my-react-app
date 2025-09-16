import User from "./User.js";
import ErrorBoundary from "./ErrorBoundary.js";

import React from "react";
class Acc extends React.Component{
    render(){
        return(
            <>
            <ErrorBoundary>
            <User name="john"/>
            
            
            <User name="akash"/>

            </ErrorBoundary>
             
            
        
            </>
        )
    }
}
export default Acc;