import React from "react";
class ErrorBoundary extends React.Component
{
    constructor(props){
        super(props);
        this.state={error:null}
    }
    static getDerivedStateFromError(error){
        return {error:true}

    }
    componentDidCatch(error,infor){
        console.log(error);
        console.log(infor);

    }
    render(){
        if(this.state.error){
            return <h1>Fallback Ui.....Error Occuring!!</h1>
        }
        return this.props.children;
    }
  
}
export default ErrorBoundary;