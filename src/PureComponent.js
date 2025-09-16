import React from 'react';
class PureComponent extends React.PureComponent
{
    constructor(){
        super();
        this.state={
            count:10
        }
    }
   

    Update=()=>{
        this.setState((count)=>count=10)
    }
  
  
    render(){
       console.log("PureComponent rerendering!!");
        return(
            <>
            <h1>count :{this.state.count}</h1>
            <button onClick={this.Update}>click</button>
            </>
        )
    }
}
export default PureComponent;
