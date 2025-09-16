import React from "react";
import img1 from './images/n1.png';
import img2 from './images/n2.png';
import img3 from './images/n3.png';
import './index.css';

function Images(props){
    return(
        <div className="one">
        <img src={props.img}   alt="image not found!"/>
         <h2 className="head" >{props.text}
            
         </h2>
        </div>
    )
}
export default Images;