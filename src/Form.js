import React from "react";
import './index.css';

class Form extends React.Component
{
 
    constructor(){
        super();
        this.state={username:'',
            age:null,
            password:'',
            errmsg1:'',
            errmsg2:''
        };
    }
     Aging=(event)=>{
        let n=event.target.name;
        let v=event.target.value;
        let err1;
        if(n==="age"){
            if(v!="" && !Number(v)){
                err1=<strong>Age must in Number</strong>
            }
        }
       
        this.setState({errmsg1:err1});
       
        this.setState({[n]:v});
     }
     Password=(event)=>{
        let n1=event.target.name;
        let v1=event.target.value;
        let err2;
        if(n1==="password"){
            if(v1.length <3){
                err2=<strong>Please enter pw be must contain 3 characters!</strong>
            }
        }
        this.setState({errmsg2:err2});
        this.setState({[n1]:v1});

     }
     Submit=()=>{
        alert("form submitted sucessfully");
        var Username="Username";
        var age="age";
        var password="password";
        var a=document.getElementById("one").value;
        var b=document.getElementById("two").value;
        var c=document.getElementById("three").value;
        document.write(`<strong>${Username}:</strong>`+`<strong>${a}</strong>`+"<br>");
        document.write(`<strong>${age}:</strong>`+`<strong>${b}</strong>`+"<br>");
        document.write(`<b>${password}:</b>`+`<b>${c}</b>`+"<br>");
     }
  

    
        
    render()
    {
        return(
            <div className="hi">
        
            <form onSubmit={this.Submit}>
               <h1 style={{color:"brown"}}>Form validation in React</h1> 
                <b style={{color:"#093872",fontSize:"24px"}}>enter username:</b><input type="text" id="one" name="username" placeholder="enter username" onChange={this.Aging} required/><br/><br/><br/>
                <b style={{color:"#093872",fontSize:"24px"}}>enter the age:</b><input type="text" name="age" id="two" placeholder="enter age" onChange={this.Aging}/>{this.state.errmsg1}<br/><br/><br/>
                <b style={{color:"#093872",fontSize:"24px"}}>enter password:</b><input type="password" id="three" name="password" placeholder="enter password" onChange={this.Password} required></input>{this.state.errmsg2}<br></br><br/>
                
                <input type="submit" style={{backgroundColor:"brown",color:"yellow"}}/>
            </form>
            </div>
        )
           }
}
export default Form;