import React from 'react';

const Todos = (props) => {


    return (
        <>
            <div className='del'>
                <button id='delb' onClick={()=>{
                    props.onSelect(props.id)
                }}>Delete</button>
                <li>{props.text}</li>
            </div>
        </>
    );
};

export default Todos;
