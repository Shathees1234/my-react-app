import React, { useState } from 'react';
function Library()
{
    const [view,setView]=useState("home");
    const [books,setBooks]=useState([{id:1,title:"Siragukal",author:"ABJ"}]);
    const Add=(title,author)=>{
        setBooks([...books,{id:books.length+1,title,author}])
    }
   const Delete=(index)=>{
        setBooks(books.filter((_,i)=> index != i))
   }
    return(
        <div style={{textAlign:"center",backgroundColor:"pink"}}>
             
        <button onClick={()=>setView("home")}>Home</button>|
        <button onClick={()=>setView("books")}>books</button>|
        <button onClick={()=>setView("add-Books")}>add-books</button>
        {
            view === "home" && <h1>Welome to Library</h1>
        }
        {
            view === "books" &&  books.map((item,index)=>{
                return(
                    <>
                    <h1><li>{item.title} by {item.author} &nbsp;<button onClick={()=>Delete(index)}>Delete</button></li></h1>
                    </>
                )
            })
        }
        {
            view === "add-Books" && <BookForm Add={Add} />
        }



        </div>
    )
}
function BookForm({Add}){
    const [title,setTitle]=useState("");
    const [author,setAuthor]=useState("");
   
    const Submit=(e)=>{
        e.preventDefault();
        Add(title,author);
        
        setTitle("");
        setAuthor("");
       
    }
    return(
        <>
        <form onSubmit={Submit}>
            <h1>Library</h1>
        <input type="text" onChange={(e)=>setTitle(e.target.value)} placeholder='Title'  value={title}/><br/><br/>
        <input type="text" onChange={(e)=>setAuthor(e.target.value)} placeholder='Author'  value={author}/><br/><br/>
        <button type="submit">Submit</button><br/>
        </form>
        </>

    )
}
export default Library;