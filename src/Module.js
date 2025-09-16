import React from 'react';
import style from './style.module.css';
class Module extends React.Component
{
    render()
    {
        return(
            <>

               <h1 className={style.head}>welcome to React Css</h1>
               <h2 className={style.head}>come on lets go</h2>
            </>
        )
    }
}
export default Module;