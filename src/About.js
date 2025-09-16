import { useNavigate } from "react-router-dom";
function About(){
    const Navigate=useNavigate();
    const Go=()=>{
        Navigate('/C')
    }
   
    return(
        <>
        
        
         <font color="blue" style={{fontSize:"35px"}}>welcome to About page!!!</font><br></br>
         <button onClick={Go} style={{backgroundColor:"black",color:"white"}}>Go to Contact</button>
        
         
        
        </>
    )
}
export default About;