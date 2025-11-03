import React,{useState} from 'react';
function BmiCalculator()
{
    const [weight,setWeight]=useState("");
    const [height,setHeight]=useState("");
    var [bmi,setBmi]=useState(null);
    var [status,setStatus]=useState();
    var w=parseFloat(weight);
    var  h=parseFloat(height)/100;
    var ranger="";
    const Submit=(e)=>{
        e.preventDefault();
        bmi=w/(h*h);
        setBmi(bmi);
        if(bmi<18.0)
        {
            ranger="less fat person";
        }
        else if(bmi<24.0)
            {
                ranger="Normal person";
            }
        else if(bmi<29.0)
                {
                    ranger="over weight person";
                }
        else if(bmi>29.0)
        {
            
                ranger="obesity"
            
        }
        
       
        setStatus(ranger);
    }
    return(
        <>
          <div style={{textAlign:"center",border:"3px solid #215647",width:"330px",marginLeft:"500px",marginTop:"100px",padding:"13px",boxShadow:"2px 2px 2px 20px aqua"}}>
          <form onSubmit={Submit}>
                    <h1 style={{color:"#435957"}}>BMI Calculator</h1>
                   <input type="text" placeholder='enter weight(kg)' style={{boxShadow:"0px 1px 3px 4px #896783",fontSize:"25px"}} onChange={(e)=>setWeight(e.target.value)}/><br/><br/>
                   <input type="text" placeholder='enter height(cm)'style={{boxShadow:"0px 1px 3px 4px #678903",fontSize:"25px"}}  onChange={(e)=>setHeight(e.target.value)}/><br/><br/>
                   <input type="submit" style={{backgroundColor:"#785624",fontSize:"25px"}}/>
                    <h3 style={{color:"#785624",fontSize:"30px"}}>Bmi:{bmi}</h3>
                    <h3 style={{color:"#785624",fontSize:"30px"}}>status:{status}</h3>
              

            </form>

          </div>
            
              

        </>
    )
}
export default Bmi;
