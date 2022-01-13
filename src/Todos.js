import React from 'react';

const Todos = (props) => {


    return (
        <>
            <div className='todo'>
                <button id="del" onClick={() => {
                    props.onSelect(props.id)
                }}>Delete</button>
                <li>{props.text}</li>
            </div>
        </>
    );
};

export default Todos;