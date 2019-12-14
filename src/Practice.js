import React, {useState} from 'react';

const Practice=(props)=>{
    var [color,setColor]=useState('red');
    return(
        <div>
            <p>{color}</p>
            <p>{props.count}</p>
        

            <button onClick={()=>{
                    props.setCount(props.count+1);
                    if(props.count%2 === 0)
                        document.body.style = 'background: red;';
                    else
                        document.body.style='background: green;';
            }}>Add</button>

            <button onClick={()=>{
                props.setCount(props.count+1);
                    document.body.style = 'background: blue;';
            }}>Blue</button>
            <button onClick={()=>{
                props.setCount(props.count+1);
                    document.body.style = 'background: black;';
            }}>Black</button>
        </div>
    );
};

export default Practice;