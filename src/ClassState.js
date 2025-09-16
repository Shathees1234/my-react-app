import React,{useState} from 'react';
/*class ClassState extends React.Component
{
    constructor()
    {
        super();
        this.state={value:"hi guys"}
    }
    Change=()=>{
            this.setState({value:"welcome to state in class Componenets"})
    }
    render()
    {
        return(
            <>
                 <h1>{this.state.value}</h1>
                 <button onClick={this.Change}>click</button>
            </>
        )
    }
}*/
function FuncState()
{
    const [count,setCount]=useState(1);
    const Change=()=>{
        setCount(count*3)
    }
    return(
        <>
          <h1>{count}</h1>
          <button onClick={Change}>Mul by 3</button>

        </>
    )
}
export default FuncState;