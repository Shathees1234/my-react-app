import React from "react";
import img from './n2.png';
export function Down()
{
    
    return(
        <>
        <center>
              <img src={img} alt="image not found!!!" height="400px" width="500px" /><br/><br/>
              <button><a href={img} download={img}>Download</a></button>
              <br/>
              <ul type="None" style={{color:"green",fontSize:"30px"}}>
                <li>
                    This is about Nature
                </li>
                <li>
                    himalayas mountain
                </li>
              </ul>

        </center>
        
        </>
    )
}