import {useLayoutEffect,useRef,useState} from 'react';
function Layout(){
    const [boxsize,setBoxsize]=useState(0);
    const Boxref=useRef();
    const Height=()=>{
        const a=Boxref.current.clientHeight;
        setBoxsize(a);

    }
    useLayoutEffect(()=>{
        Height()
        return()=>{

}},[]);
     
    return(
        <div>
            <div ref={Boxref} style={{backgroundColor:"lightblue",height:"140px"}}><h1>Box</h1></div>
            <h1>Box Height:{boxsize}px</h1>
        </div>
    )
}
export default Layout;
