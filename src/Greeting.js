import React from 'react';
function Greeting()
{
    var Hours=new Date().getHours(),greeting;
    if(Hours <12)
    {
        greeting="Good Morning!!!"
    }
    else if(Hours <18)
    {
        greeting="Good Afternoon!!!"
    }
    else{
        greeting="Good Evening!!!"
    }
    
    return(
        <>
        {Hours}Hour:{greeting}

        </>
    )
}
export default Greeting;