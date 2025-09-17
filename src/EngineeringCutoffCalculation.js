import React,{useState} from "react";
function Engineering()
{
    const [name,setName]=useState("");
    const [maths,setMaths]=useState("");
    const [chemistry,setChemistry]=useState("");
    const [physics,setPhysics]=useState("");
    const  [cutt,setCutt]=useState("");
    const [college,setCollege]=useState("");
    const [res,setRes]=useState(false);
    
    const Submit=(e)=>{
        e.preventDefault();
   
         var a=parseInt(maths);
         var b=parseInt(chemistry);
         var c=parseInt(physics);
         var cutoff=a+(b/2)+(c/2);
         setCutt(cutoff);
         var Coll;
         if(cutoff > 190)
            {
                Coll="Anna University Chennai"
                if(cutoff >195)
                {
                    Coll="Assigned to CSE dept in  Anna University Chennai"

                }
                else{
                    Coll="Assigned  dept Other than CSE in  Anna University Chennai"
                }
            }
            else if(cutoff >180 ) 
            {
                if(cutoff >185)
                {
                     Coll="Assigned to CSE dept Psg Coimbatore"

                }
                else{
                      Coll="Assigned  dept Other than CSE in Psg Coimbatore"
                }
               
            }
            else if(cutoff>160) 
            {
                if(cutoff >165)
                {
                    Coll="Assigned to CSE dept BIT trichy"
                }
                else{
                       Coll="Assigned  dept Other than  CSE in BIT trichy"
                }

                }
               
            else if(cutoff >150)
            {
                Coll="GCE Trichy"
            }
            else{
                Coll="Choose Private Institution"
            }
            setCollege(Coll);
            //setName("");
            setMaths("");
            setChemistry("");
            setPhysics("");
            setRes(true);
        
        
    
        
    }
    
    return(
        <div style={{backgroundColor:"lightgreen",border:"2px solid green"}}>
           <form onSubmit={Submit} style={{textAlign:"center"}}>
            <h1 style={{backgroundColor:"#125634",color:"white"}}>Engineering cutoff Calculator</h1>
           <input type="text" placeholder=" Name"  onChange={(e)=>setName(e.target.value)} required style={{fontSize:"20px",backgroundColor:"silver",color:"brown",boxShadow:"1px 1px 2px 2px aqua"}}></input><br/><br/>
           <input type="number" placeholder=" Maths Mark" onChange={(e)=>setMaths(e.target.value)} required value={maths}  style={{fontSize:"20px",backgroundColor:"orange",color:"brown",boxShadow:"1px 1px 2px 2px aqua"}}></input><br/><br/>
           <input type="number" placeholder=" Chemistry Mark" onChange={(e)=>setChemistry(e.target.value)} value={chemistry} required style={{fontSize:"20px",backgroundColor:"lightblue",color:"brown",boxShadow:"1px 1px 2px 2px aqua"}}></input><br/><br/>
           <input type="number" placeholder=" Physics Mark" onChange={(e)=>setPhysics(e.target.value)} value={physics} required style={{fontSize:"20px",backgroundColor:"pink",color:"brown",boxShadow:"1px 1px 2px 2px aqua"}}></input><br/><br/>
           <button type="submit" style={{fontSize:"20px",backgroundColor:"black",color:"white"}}>Submit</button><br/><br/>
           </form>
           <div>
              {
                res &&  (<div style={{textAlign:"center",color:"#346571"}}><h2>Hello {name} ,your cutoff&nbsp;{cutt}</h2>  <h2>Assigned college:{college}</h2></div>)
              }
              </div>
     </div>
    )
}
export default  Engineering;
