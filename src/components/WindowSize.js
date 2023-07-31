import React, { useEffect, useState } from 'react';
import UseEffects from './UseEffects';

const WindowSize = () => {
    const [size,setSize]=useState(window.screen.width)
    
    const actualWidth=()=>{
        console.log(window.innerWidth)
        setSize(window.innerWidth)
    }
    useEffect(()=>{
     window.addEventListener('resize',actualWidth)   
     return ()=>{
        window.removeEventListener('resize',actualWidth)
     }
    })

    
    return (
        <div>
            <h1>window size will show here </h1>
            <h4>size : {size}</h4>
        </div>
    );
};

export default WindowSize;