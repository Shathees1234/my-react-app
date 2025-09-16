import React from 'react';
import { BrowserRouter as Router,Routes,Route,Link,NavLink} from 'react-router-dom';
import Home from './Home.js';
import Contact from './Contact.js';
import About from './About.js';
import Not from './Not.js';
import Youtube from './Youtube.js'
import Facebook from './Facebook.js';


function A(){
    return(
        <Router>
              <ul type="None">
                <li>
                       <NavLink to="/H"  style={{color:"red"}}>home</NavLink> 
                </li>
                <li>
                        <NavLink to="/A" style={{color:"blue"}}>About</NavLink>
                </li>
                <li>
                        <NavLink to="/C/"  style={{color:"green"}}>contact</NavLink>
                </li>
                
              </ul>
               
              
             
            <Routes>
          
            <Route path="/H/:fname" Component={Home}/>
            <Route path="/A" Component={About}/>
            <Route path="/C/" Component={Contact}>
                <Route path="youtube" Component={Youtube}/>
                <Route path="facebook" Component={Facebook}/>
            </Route>
            <Route path="*" Component={Not}/>
            
            

            </Routes>
            
        </Router>
     )
    }
export default A;