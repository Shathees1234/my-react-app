import React,{useState} from 'react';
function Posts({title,content})
{
    const [likes,setLikes]=useState(0);
    const Handle=()=>{
        setLikes(likes+1)
    }
    return(
        <>
        <h1>Title:{title}</h1>
        <h1>Content:{content}</h1>
        <button onClick={Handle} style={{backgroundColor:"aqua",fontSize:"20px"}}>Like:{likes}</button>

        </>
    )
}
export default Posts;