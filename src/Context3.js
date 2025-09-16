import Myvalue from "./Context";
import React,{useContext} from 'react';
function Context3(){
    const a=useContext(Myvalue);
    return(
        <h1>{a}</h1>
    )

}
export default Context3;