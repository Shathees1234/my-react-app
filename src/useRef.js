import {useRef} from 'react';
function Ref(){
    const input=useRef();
    const focusing=()=>{
        input.current.focus()
    }
    console.log("useRef hooks........")
    return(
        <>
          <input type="text" ref={input}></input>
          <button onClick={focusing}>focus</button>
        </>
    )
}
export default Ref;
