import React from 'react';
function Conditional()
{
   var res;
   const age=prompt("enter age:");
   if(age>18)
   {
   
       res=<h1>Eligible for Vote!</h1>
    
   }
   else{
    
        res=<h1>Not Elligible for Vote!</h1>
    
   }
   return(
     <h3>{res}</h3>
   )
   
}
/*function Happy()
{
    return(
        <>
         <Conditional/>
        </>
    )
}*/
export default  Conditional;
