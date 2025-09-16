import React from "react";
import PropsTypes from 'prop-types';
function  F(props)
{
    return(
        <>
        <h1>functional props</h1>
        <h1>Name:{props.name}</h1>
        <h1>Age:{props.age}</h1>


          
        </>
    )
}
F.defaultProps={
    name:"shathees",
    age:21
}
F.PropsTypes={
    name:PropsTypes.string,
    age:PropsTypes.number
}
export default F;