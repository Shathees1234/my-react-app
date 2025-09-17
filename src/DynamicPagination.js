import React,{useEffect,useState} from 'react';
function Pagination()
{
    const [data,setData]=useState([]);
    const [pageno,setPageno]=useState(1);
    const DataDisplay=async()=>{
        const Res=await fetch(`https://picsum.photos/v2/list?page=${pageno}&limit=5`);
        const PageData=await Res.json();
        console.log(PageData);
        setData(PageData);
    }
    useEffect(()=>{
        DataDisplay()
    },[pageno])
    const Next=()=>{
           setPageno(pageno+1);
    }
    const Prev=()=>{
        setPageno(pageno-1);
     }

    
    return(
        <>
       {data.map((item)=>{
        return <img src={item.download_url} alt="image Not Found!" height="100px" width="100px" style={{margin:"20px"}}></img>
       })}<br/>
       {pageno>1? <button onClick={Prev}>Prev</button>:""}
       <button >{pageno}</button>
       <button onClick={Next}>Next</button>
       
       
        </>
    )
}
export default Pagination;
