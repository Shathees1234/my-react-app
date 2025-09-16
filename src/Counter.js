import React,{memo} from "react";
function Counter(props){
    console.log("Counter re-rendering!!!")
    return(
        <>
            <h1>Count:{props.value}</h1>
        </>
    )
}
export default memo(Counter);