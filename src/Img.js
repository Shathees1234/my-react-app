
import React from "react";
import './style.css';


function Img(props){
    return(
        <>
        <div className='Photo'>
             <img src={props.Photo} alt="Image Not Found" height="120px" width="150px"/>
             Nature -Mountain {props.value}<br/>
             place- {props.place}

        </div>
        


        </>
    )
}
export default Img;
