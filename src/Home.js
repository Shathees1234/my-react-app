import React from "react";
import {useParams} from 'react-router-dom';
import { useLocation } from "react-router-dom";


function Home()
{
       const {fname}=useParams();
       const Location=useLocation();
      
       
    
        return(
            <>
           <font style={{color:"red",fontSize:"35px"}}>welcome to Home page!!! you: {fname}</font>
           <h1 style={{color:"#234527"}}>Location is:{Location.pathname}</h1>
          
          
            </>
        )
    
}
export default Home;