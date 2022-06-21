import React from 'react';
import Card from './card';

const CardList = ({ robots }) => {

    if(false){
        throw Error("error ocurred");
    }
    // const {name, email, id} = props; // Can then use this
    const cardArray = robots.map((item) => {
        return (
            // Key is needed for each element so that react can keep track of them on the virtual DOM.
            <Card key={item.id} robot={item}/>
        )
    })
    return (
        <div>
            {cardArray}
        </div>
    );
    
    //Could also just say:
    // return (
    //     <div>
    //         {   
    //             robots.map((item) => {
    //                 return (
    //                     <Card key={item.id} robot={item}/>
    //                 )
    //             })
    //         }
    //     </div>
    // );
}

export default CardList;