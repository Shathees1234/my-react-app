import React from "react";
class Props extends React.Component
{
    render()
    {
        return(
            <>
            <h1>The learn language like {this.props.language} is oldest language .Tamil has {this.props.old} years old.</h1>
            <h1>Tamil is Mother:{this.props.mother?"yes":"no"}</h1>
            <h1>I am {this.props.var.fname} and lastName is {this.props.var.lname}</h1>
           

                
            </>
        )
    }
}
export default Props;