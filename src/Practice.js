import React, {useState} from 'react';

const Practice=(props)=>{
    return(
        <div>
            <p>{props.count}</p>
        

            <button onClic={()=>
                {
                    props.setCounter(props.count+1)
                }
            }>Add</button>
        </div>
    );
};

export default Practice;