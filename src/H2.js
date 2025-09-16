import Hello from "./Hello.js";
import React from "react";
const H2=(Component)=>
{
    return(
    class extends React.Component
    {
        constructor()
        {
            super();
            this.state={auth:false}
        }
        render()
        {
            return(
                <>
                {this.state.auth?<Component/>:<h2>The component auth false</h2>}
                </>
            )
        }
    }
)
}
export default H2;