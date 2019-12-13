import React, {useState} from 'react';

const Practice=(props)=>{
    return(
        <div>
            <p>{props.count}</p>
        

            <button onClick={()=>{
                    props.setCount(props.count+1)
            }}>Add</button>
        </div>
    );
};

export default Practice;