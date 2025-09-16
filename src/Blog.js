import React,{useState} from "react";
function Blog()
{
    const [posts,setPosts]=useState([]);
    const [title,setTitle]=useState("");
    const [content,setContent]=useState("");
    const [like,setLike]=useState(0);
 

   
    
    
    const Change=(index)=>{
        var update=[...posts];
        update[index].like=like+1;
    
        setLike([index].like=like+1);
        
        setPosts(update);
      
    
        
        
    }
    const Submit=(e)=>{
        e.preventDefault();
        const newf={title,content,like:0};
        setPosts([...posts,newf]);
        setTitle("");
        setContent("");
        

    }
    return(
        <>
       
        <form onSubmit={Submit} style={{textAlign:"center"}}>
                  <font style={{color:"#456732",fontSize:"40px"}}>simple Blog</font><br/><br/>
                  <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title} placeholder="Title" style={{fontWeight:"bold",fontSize:"30px",boxShadow:"1px 1px 3px 4px lightgreen"}}/><br/><br/><br/>
                  <textarea onChange={(e)=>setContent(e.target.value)} value={content} placeholder="content" style={{fontWeight:"bold",fontSize:"30px",boxShadow:"1px 1px 3px 4px lightgreen"}}/><br/><br/>
                  <button type="submit" style={{fontWeight:"bold",fontSize:"25px",backgroundColor:"#215467"}}>Add posts</button>
        </form>
        {
            posts.map((item,index)=>{
                return(
                    <div key={index}>
                          <h1 style={{textAlign:"center"}}>Title:{item.title}</h1>
                          <h1 style={{textAlign:"center"}}>Content:{item.content}</h1>
                          <button  onClick={()=>Change(index)} style={{marginLeft:"600px"}}>Like{item.like}</button>
                      
                    </div>
                    
                )
            })
        }
        </>
    )
}
export default Blog;