import React from 'react';
// import { robots } from './robots'
import CardList from '../components/cardList';
import SearchBar from '../components/SearchBar';
import './app.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/errorBoundary';

class app extends React.Component{

    constructor(){
        super();
        this.state = {
            robots: [],
            searchField: ""
        };
        console.log("constructor");
    }

    //This is a lifecycle method that is overridden(https://reactjs.org/docs/react-component.html) 
    componentDidMount(){
        console.log("componentDidMount");
        fetch("https://jsonplaceholder.typicode.com/users/")
            .then(response => {
                return response.json();
            })
            .then(users => {
                this.setState({robots: users});
                console.log(users);
            })
    }

    //NB: When adding a function to a component class that does not override the parent class, must use arrow 
    //function. This ensures that any this call within the function refers to the class it is declared in and 
    //not the parent element the function is called from i.e. from within SearchBar component were it is passed. 
    onChangeEventHandler = (event) => {
        this.setState({searchField: event.target.value});
    }

    render(){  
        //This is called destructuring
        const {robots, searchField} = this.state;
        const filteredRobots = robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        console.log("render");
        
        if(robots.length === 0){
            return <h1 className='tc'>Loading</h1>
        }
        else{
            return(
                <div className='tc container'>
                    <div className='header'>
                        <h1 className='f1'>RoboFriends</h1>
                        <SearchBar onChangeEvent={this.onChangeEventHandler}/>
                    </div>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        }
    }
}

export default app;