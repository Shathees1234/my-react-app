import React from "react";
import Img from "./Img";
import Photo1 from './images/n1.png';
import Photo2 from './images/n2.png';
import Photo3 from './images/n3.png';
import Photo4 from './images/n1.png';
import Photo5 from './images/s1.png';
function SenderImg()
{
    return(
        <>
        <div className="sat">
                  <Img  Photo={Photo1} value={1} place="norway"/><br/>
                  <Img  Photo={Photo2} value={2} place="alaska"/><br/>
                  <Img  Photo={Photo3} value={3} place="India"/>
        </div>
         
          

        </>
    )
}
export default SenderImg;