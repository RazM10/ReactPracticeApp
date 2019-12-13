import React, {useState} from 'react';

const Practice=(props)=>{
    return(
        <div>
            <p>{props.count}</p>
        

            <button onClick={()=>{
                    props.setCount(props.count+1);
                    if(props.count%2 === 0)
                        document.body.style = 'background: red;';
                    else
                        document.body.style='background: green;';
            }}>Add</button>
        </div>
    );
};

export default Practice;