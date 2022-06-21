import React, {Component, useState, useEffect} from 'react';
// import { robots } from './robots'
import CardList from '../components/cardList';
import SearchBar from '../components/SearchBar';
import './app.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/errorBoundary';

function App(){

    //This is called destructuring
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState("");

    //Passed function will execute everytime render completes. If you inspect you will see that useEffect executes continuously,
    //this is because function passed updates the state which causes the render to occur again and so on and so forth. You can 
    // optionally pass a second parameter to avoid this. React will compare the current value of the passed array to the value it was
    // in the previous render, it will only rerender if the value has changed. https://reactjs.org/docs/hooks-effect.html
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/")
            .then(response => {
                return response.json();
            })
            .then(users => {
                setRobots(users);
                console.log(users);
            })
    }, []);

    const onChangeEventHandler = (event) => {
        setSearchField(event.target.value);
    }
  
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
                    <SearchBar onChangeEvent={onChangeEventHandler}/>
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

export default App;