import React,{memo} from "react";
function Timer(props){
    console.log("Timer Re-rendering!!!!!")
    return(
        <>
        <h1>Timer:{props.value2}</h1>

        </>
    )
}
export default memo(Timer);