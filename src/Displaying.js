import Stop from "./Stop";
function Displaying({time})
{
   var {ms,s,m,h}=time;
   return(
    <>
   
            
                 <b>{h>=10?h:"0"+h}</b>:
                 <b>{m>=10?m:"0"+m}</b>:
                 <b>{s>=10?s:"0"+s}</b>:
                 <b>{ms>=100?ms:"0"+ms}</b>  
                 
            

  
    </>
   )
}
export default Displaying;