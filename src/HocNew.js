import React from "react";
const HocNew=(Component)=>{
    return(
        class extends React.Component{
            constructor(){
                super();
                this.state={auth:true}
            }
            render(){
                return(
                    <>
                        {this.state.auth?<Component/>:<h1>The auth will be false!</h1>}
                    </>
                )
            }
        }
        

    )
}
export default HocNew;