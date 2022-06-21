import React from 'react';

const Card = (props) => {
    // const {name, email, id} = props; // Can then use this
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={"https://robohash.org/" + (props.robot.id + 13) + "?200x200"} alt=""></img>
            <h2>{props.robot.name}</h2>
            <p>{props.robot.email}</p>
        </div>
    );
}

export default Card;