import React, {Component} from 'react';

//Note that this will only work correctly in production mode. This is because react app
//will display any errors that occur automatically.
class ErrorBoundary extends Component{

    constructor(){
        super();
        this.state = {
            hasError: false
        };
    }

    componentDidCatch(error, info){
        this.setState({hasError:true});
    }

    render(){

        if(this.state.hasError){
            return(<h1>Oops, something went wrong 😞</h1>);
        }else{
            return this.props.children;   
        }
    }
}

export default ErrorBoundary;