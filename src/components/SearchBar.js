import React from 'react';

const SearchBar = ({onChangeEvent}) => {
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--green bg-lightest-blue' 
                type='text' 
                placeholder='Search Friends'
                onChange={onChangeEvent}
                />
        </div>
    );
}

export default SearchBar;