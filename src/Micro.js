
import React,{useState} from "react";
import Posts from "./Posts";
function Micro()
 {
    const [posts,setPosts]=useState([]);
    const [title,setTitle]=useState("");
    const [content,setContent]=useState("");
    const Submit=(e)=>{
        e.preventDefault();
        const variable={title,content};
        setPosts([...posts,variable])
        setTitle("");
        setContent("");


    }

    return(
        <>
        <div  style={{textAlign:"center"}}>
        <form onSubmit={Submit}>
            <h1 style={{backgroundColor:"aquamarine"}}>Blog</h1>
              <input type="text" onChange={(e)=>setTitle(e.target.value)} placeholder="title" value={title} style={{fontSize:"29px",backgroundColor:"green",boxShadow:"1px 1px 3px 1px "}}/><br/><br/>
              <textarea placeholder="content" onChange={(e)=>setContent(e.target.value)} value={content} style={{fontSize:"23px",backgroundColor:"#453267",boxShadow:"1px 1px 3px 1px brown"}}/><br/><br/>
              <button type="submit" style={{backgroundColor:"black",color:"aqua",fontSize:"30x"}}>Add Post</button>

        </form>
        {
            posts.map((item,index)=>{
                return(

                <div key={index}>
                   <Posts  title={item.title} content={item.content}/>

                </div>
                );
            })
        }
        </div>
          


       
          

        </>
    )
}
export default Micro;