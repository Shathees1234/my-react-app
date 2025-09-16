import React from "react";
class Events extends React.Component
{
    constructor()
    {
        super();
        this.state={value:"Listen"}
    }
    Show=()=>{
        this.setState({value:"mouse clicked"})
    }
    render()
    {
        return(
            <>
               <center>
                   <div style={{marginTop:"200px"}}>
                          <h1 style={{backgroundColor:"#235461",border:"2px solid green",height:"auto",width:"100px"}}>{this.state.value}</h1>
                          <button onClick={this.Show}>Click</button>
                   </div>
                    
                </center>
            
            </>
        )
    }
}
export default Events;