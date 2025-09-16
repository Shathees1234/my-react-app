import { NavLink ,Outlet} from "react-router-dom";

function Contact(){
    return(
        <>
        <font  color="green" style={{fontSize:"35px"}}>welcome to Contact Page!!!</font><br></br>
        <NavLink to="youtube" style={{fontSize:"20px"}}>Youtube</NavLink><br></br>
        <NavLink to="Facebook" style={{fontSize:"20px"}} >Facebook</NavLink>
        <Outlet/>
        </>
       
    )
}
export default Contact;