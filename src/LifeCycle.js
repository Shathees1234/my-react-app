import React, { Component } from "react";

class LifeCycle extends React.Component
{
    constructor()
    {
        super();
        this.state={value:"welcome"}
    }
    componentWillMount()
    {
        alert("You want to go Lifecycle methods")
    }
    componentDidMount()
    {
        
          setTimeout(()=>{
            this.setState({value:"Thank You Guys"})}
            ,3000)
        
        
    }
    componentWillUpdate(){
            alert("do you want to update?")
    }
    componentDidUpdate()
    {
        document.getElementById("good").innerHTML="<h2 style=margin-left:570px>"+"Updated successfully"+"</h2>";

    }
    shouldComponentUpdate()
    {
        return true;
    }
  
     Delete=()=>{
        this.setState({value:false})

    }
    componentWillUnmount()
    {
        alert("value is deleted");
    }
   
    
    render()
    {
        return(
            <>
            <div style={{textAlign:"center",marginTop:"190px"}}>
                        <h1>{this.state.value}</h1>
                        <button onClick={this.Delete}>Delete</button>
            </div>
            
    
            </>
        )

    }
   
}
export default LifeCycle;